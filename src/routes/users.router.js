var express = require('express');
const { register, login, profile, changepassword, forgotpassword, resetpassword } = require('../controllers/user.controller');
var router = express.Router();
const passport = require('passport');

//Register
router.post('/register', register);

//Authenticate
router.post('/login', login);

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), profile);

//ChangePassword
router.post('/changepassword', passport.authenticate('jwt', { session: false }), changepassword);

//ForgotPassword
router.post('/forgotpassword', forgotpassword);

//ResetPassword
router.post('/resetpassword', resetpassword)

module.exports = router;
