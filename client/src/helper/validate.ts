import toast from 'react-hot-toast';

interface UsernameData {
  username?: string;
}

interface PasswordData {
  password?: string;
}

interface ResetPasswordData {
  password?: string;
  confirm_pwd?: string;
}

interface RegisterData {
  email?: string;
  username?: string;
  password?: string;
}

interface ProfileData {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  address?: string;
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

/** Validate reset password page username */
export const resetPasswordValidate = (values: ResetPasswordData) => {
  const errors = resetPasswordVerify({}, values);
  return errors;
};

/** Validate register page */
export const registerValidate = (values: RegisterData) => {
  const errors = registerVerify({}, values);
  return errors;
};

/** Validate profile page */
export const profileValidate = (values: ProfileData) => {
  const errors = profileVerify({}, values);
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

/** Validate reset password */
const resetPasswordVerify = (
  error: ResetPasswordData = {},
  values: ResetPasswordData
) => {
  if (values.password !== values.confirm_pwd) {
    error.confirm_pwd = toast.error('Password not match');
  }

  return error;
};

/** Validate username */
const registerVerify = (error: RegisterData = {}, values: RegisterData) => {
  if (!values.email) {
    error.email = toast.error('Email required');
  } else if (
    values.email.includes(' ') ||
    // eslint-disable-next-line no-useless-escape
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    error.email = toast.error('Invalid email');
  } else if (!values.username) {
    error.username = toast.error('Username required');
  } else if (!values.password) {
    error.password = toast.error('Password required');
  }

  return error;
};

/** Validate username */
const profileVerify = (error: ProfileData = {}, values: ProfileData) => {
  if (!values.email) {
    error.email = toast.error('Email required');
  } else if (
    values.email.includes(' ') ||
    // eslint-disable-next-line no-useless-escape
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    error.email = toast.error('Invalid email');
  }

  return error;
};
