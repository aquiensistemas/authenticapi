const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date, 
    required: true
  },
  updated_at: {
    type: Date,
  }
});

module.exports = mongoose.model('User', userSchema, 'users');





