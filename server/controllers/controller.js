const UserModel = require('../model/User.model');

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
exports.register = async (req, res) => {
  try {
    const { username, password, profile, email } = req.body;

    res
      .status(200)
      .json({
        status: 'success',
        data: { username, password, profile, email },
      });

    // Check existing user
  } catch (error) {
    res.status(500).send(error);
  }
};

/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
exports.login = async (req, res) => {
  res.json('Login route');
};

/** GET: http://localhost:8080/api/user/example123 */
exports.getUser = async (req, res) => {
  res.json('Get user route');
};

/** PUT: http://localhost:8080/api/update-user */
exports.updateUser = async (req, res) => {
  res.json('Update user route');
};

/** GET: http://localhost:8080/api/generate-otp */
exports.generateOTP = async (req, res) => {
  res.json('Generate OTP route');
};

/** GET: http://localhost:8080/api/verify-otp */
exports.verifyOTP = async (req, res) => {
  res.json('Verify OTP route');
};

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/create-reset-session */
exports.createResetSession = async (req, res) => {
  res.json('Create reset session route');
};

// updat ethe password when we have valid session
/** PUT: http://localhost:8080/api/reset-password */
exports.resetPassword = async (req, res) => {
  res.json('Reset password route');
};
