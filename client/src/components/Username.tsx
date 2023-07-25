import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';

import usernameStyles from '../styles/Username.module.css';
import profile from '../assets/profile.png';

const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: 'ekhangati',
    },
    validate: usernameValidate,
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
            <h1 className='text-2xl font-bold'>Hello Again!</h1>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore more with us
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img
                className={usernameStyles.profile_img}
                src={profile}
                alt='avatar'
              />
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <input
                className={usernameStyles.textbox}
                type='text'
                placeholder='Username'
                {...formik.getFieldProps('username')}
              />
              <button className={usernameStyles.btn} type='submit'>
                Let's Go
              </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Not a member{' '}
                <Link className='text-red-500' to='/register'>
                  Register now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
