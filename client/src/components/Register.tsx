import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidate } from '../helper/validate';
import convertToBase64 from '../helper/convert';

import usernameStyles from '../styles/Username.module.css';
import profile from '../assets/profile.png';

const Password = () => {
  const [file, setFile] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: 'ekhangati@gmail.com',
      username: 'ekhangati',
      password: 'KXj5YsEDF@dRG9',
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      values = Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  /** Formik does not support file upload so we need to create this handler */
  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null; // Nullish coalescing to handle null case

    if (selectedFile) {
      convertToBase64(selectedFile)
        .then((base64) => {
          setFile(base64);
        })
        .catch((error) => {
          console.error('Error converting to base64:', error);
        });
    }
  };

  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='py-16 flex justify-center items-center min-h-screen'>
        <div className={usernameStyles.glass} style={{ width: '50%' }}>
          <div className='title flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Register</h1>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Happy to join you!
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img
                  className={usernameStyles.profile_img}
                  src={file || profile}
                  alt='avatar'
                />
              </label>
              <input
                type='file'
                id='profile'
                name='profile'
                onChange={onUpload}
              />
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <input
                className={usernameStyles.textbox}
                type='text'
                placeholder='Email*'
                {...formik.getFieldProps('email')}
              />
              <input
                className={usernameStyles.textbox}
                type='text'
                placeholder='Username*'
                {...formik.getFieldProps('username')}
              />
              <input
                className={usernameStyles.textbox}
                type='password'
                placeholder='Password*'
                {...formik.getFieldProps('password')}
              />
              <button className={usernameStyles.btn} type='submit'>
                Register
              </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Registered?{' '}
                <Link className='text-red-500' to='/'>
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
