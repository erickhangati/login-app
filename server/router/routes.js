const express = require('express');
const {
  register,
  login,
  getUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  updateUser,
  resetPassword,
} = require('../controllers/controller');

const router = express.Router();

/** POST methods */
router.route('/register').post(register); // register user
router
  .route('/register-mail')
  .post((req, res) => res.json('Register mail route')); // send email
router.route('/auth').post((req, res) => res.json('Auth route')); // authenticate user
router.route('/login').post(login); // login in app

/** GET methodes */
router.route('/user/:username').get(getUser); // get user with username
router.route('/generate-otp').get(generateOTP); // generate random OTP
router.route('/verify-otp').get(verifyOTP); // verify generated OTP
router.route('/create-reset-session').get(createResetSession); // reset all the variables

/** PUT methods */
router.route('/update-user').put(updateUser); // update user profile
router.route('/reset-password').put(resetPassword); // reset password

module.exports = router;
