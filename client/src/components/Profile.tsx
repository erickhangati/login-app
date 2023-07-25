import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidate } from '../helper/validate';
import convertToBase64 from '../helper/convert';

import usernameStyles from '../styles/Username.module.css';
import profileStyles from '../styles/Profile.module.css';
import profile from '../assets/profile.png';

const Profile = () => {
  const [file, setFile] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      firstName: 'Eric',
      lastName: 'Khangati',
      email: 'ekhangati@gmail.com',
      mobile: '0720773895',
      address: 'KXj5YsEDF@dRG9',
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    validate: profileValidate,
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
        <div
          className={`${usernameStyles.glass} ${profileStyles.glass}`}
          style={{ width: '50%' }}
        >
          <div className='title flex flex-col items-center'>
            <h1 className='text-2xl font-bold'>Profile</h1>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              You can update details
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img
                  className={`${usernameStyles.profile_img} ${profileStyles.profile_img}`}
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
              <div className='name flex w-3/4 gap-6'>
                <input
                  {...formik.getFieldProps('firstName')}
                  className={`${usernameStyles.textbox} ${profileStyles.textbox}`}
                  type='text'
                  placeholder='FirstName'
                />
                <input
                  {...formik.getFieldProps('lastName')}
                  className={`${usernameStyles.textbox} ${profileStyles.textbox}`}
                  type='text'
                  placeholder='LastName'
                />
              </div>

              <div className='name flex w-3/4 gap-6'>
                <input
                  {...formik.getFieldProps('mobile')}
                  className={`${usernameStyles.textbox} ${profileStyles.textbox}`}
                  type='text'
                  placeholder='Mobile No.'
                />
                <input
                  {...formik.getFieldProps('email')}
                  className={`${usernameStyles.textbox} ${profileStyles.textbox}`}
                  type='text'
                  placeholder='Email*'
                />
              </div>

              <input
                {...formik.getFieldProps('address')}
                className={`${usernameStyles.textbox} ${profileStyles.textbox}`}
                type='text'
                placeholder='Address'
              />
              <button className={usernameStyles.btn} type='submit'>
                Update
              </button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Come back later?{' '}
                <button className='text-red-500'>Logout</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
