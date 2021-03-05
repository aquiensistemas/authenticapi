const express = require('express')
const mongoose = require('mongoose');
const database = require('./src/config/database.config');
const usersRouter = require('./src/routes/users.router')
const bodyParser = require('body-parser');

const cors = require('cors');
const passport = require('passport');
const app = express()
const port = 3000


//Conexión a mongo via mongoose 
mongoose.connect(database.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to Database', database.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Connecting to Database ERROR', err);
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./src/config/passport.config')(passport);


//Routes
app.use('/api/users', usersRouter);


app.listen(port, () => {
    console.log(`Run on port http://localhost:${port}`)
})