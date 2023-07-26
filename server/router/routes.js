const express = require('express');

const router = express.Router();

/** POST methods */
router.route('/register').post((req, res) => res.json('Register route')); // register user
router
  .route('/register-mail')
  .post((req, res) => res.json('Register mail route')); // send email
router.route('/auth').post((req, res) => res.json('Auth route')); // authenticate user
router.route('/login').post((req, res) => res.json('Login route')); // login in app

/** GET methodes */
router.route('/user/:username').get((req, res) => res.json('User route')); // get user with username
router.route('/generate-otp').get((req, res) => res.json('User route')); // generate random OTP
router.route('/verify-otp').get((req, res) => res.json('User route')); // verify generated OTP
router.route('/create-reset-session').get((req, res) => res.json('User route')); // reset all the variables

/** PUT methods */
router.route('/update-user').put((req, res) => res.json('Update user route')); // update user profile
router
  .route('/reset-password')
  .put((req, res) => res.json('Reset password route')); // reset password

module.exports = router;
