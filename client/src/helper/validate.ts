import toast from 'react-hot-toast';

interface UsernameData {
  username?: string;
}

interface PasswordData {
  password?: string;
}

/** Validate login page username */
export const usernameValidate = (values: UsernameData) => {
  const errors = usernameVerify({}, values);
  return errors;
};

/** Validate password page username */
export const passwordValidate = (values: PasswordData) => {
  const errors = passwordVerify({}, values);
  return errors;
};

/** Validate username */
const passwordVerify = (error: PasswordData = {}, values: PasswordData) => {
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error('Password required');
  } else if (values.password.includes(' ')) {
    error.password = toast.error('Wrong password');
  } else if (values.password.length < 4) {
    error.password = toast.error('Must be more than 4 characters');
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error('Must have special characters');
  }

  return error;
};

/** Validate username */
const usernameVerify = (error: UsernameData = {}, values: UsernameData) => {
  if (!values.username) {
    error.username = toast.error('Username required');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Invalid username');
  }

  return error;
};
