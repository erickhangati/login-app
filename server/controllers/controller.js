const bcrypt = require('bcrypt');
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

    // check the existing user
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, function (err, user) {
        if (err) reject(new Error(err));
        if (user) reject({ error: 'Please use unique username' });

        resolve();
      });
    });

    // check for existing email
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (email) reject({ error: 'Please use unique Email' });

        resolve();
      });
    });

    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || '',
                email,
              });

              // return save result as a response
              user
                .save()
                .then((result) =>
                  res.status(201).send({ msg: 'User Register Successfully' })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res.status(500).send({
                error: 'Enable to hashed password',
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send(error);
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
