const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user.model');
const jwtconfig = require('../config/jwt.config');


module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = jwtconfig.secret;
    passport.use(new Strategy(opts, (payload, done) => {
        getUserById(payload.data._id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));

}

function getUserById(id, callback) {
    User.findById(id, callback);
}