import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

import usernameStyles from '../styles/Username.module.css';
import profile from '../assets/profile.png';

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      password: 'KXj5YsEDF@dRG9',
    },
    validate: passwordValidate,
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
            <h1 className='text-2xl font-bold'>Recovery!</h1>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>
          <form className='pt-20'>
            <div className='textbox flex flex-col items-center gap-6'>
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500'>
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  className={usernameStyles.textbox}
                  type='password'
                  placeholder='OTP'
                />
              </div>
              <button className={usernameStyles.btn} type='submit'>
                Recover
              </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Can't get OTP? <button className='text-red-500'>Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
