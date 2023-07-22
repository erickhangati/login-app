import toast from 'react-hot-toast';

interface Data {
  username: string;
}

/** Validate login page username */
export const usernameValidate = (values: Data) => {
  const errors = usernameVerify({ username: '' }, values);
  return errors;
};

/** Validate username */
const usernameVerify = (error: Data, values: Data) => {
  if (!values.username) {
    error.username = toast.error('Username required');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Invalid username');
  }

  return error;
};
