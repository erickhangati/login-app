import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidate } from '../helper/validate';

import usernameStyles from '../styles/Username.module.css';

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: 'KXj5YsEDF@dRG9',
      confirm_pwd: 'KXj5YsEDF@dRG9',
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex justify-center items-center min-h-screen'>
        <div className={usernameStyles.glass}>
          <div className='title flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Reset</h1>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter new password
            </span>
          </div>
          <form className='pt-20' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-6'>
              <input
                className={usernameStyles.textbox}
                type='password'
                placeholder='Password'
                {...formik.getFieldProps('password')}
              />
              <input
                className={usernameStyles.textbox}
                type='password'
                placeholder='Confirm Password'
                {...formik.getFieldProps('confirm_pwd')}
              />
              <button className={usernameStyles.btn} type='submit'>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
