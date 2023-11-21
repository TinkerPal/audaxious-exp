import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import pathConstant from '../../routes/pathConstant';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Star } from '../../assets/svg/star.svg';
import { ReactComponent as Google } from '../../assets/svg/goog.svg';

const CreateAccount = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        password: Yup.string().min(8).required('Password is required'),
      }),

      onSubmit: async (values) => {
        try {
        } catch (error) {
          toast.error(error);
        }
      },
    });

  return (
    <>
      <Helmet>
        <title>Create Account | Audaxious</title>
        <meta
          name='description'
          content='Create account so you can start trading tokens'
        />
        <link rel='canonical' href={pathConstant.CREATEACCOUNT} />
      </Helmet>

      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
        <div className='container md:pt-28 py-10 2xl:flex 2xl:justify-center 2xl:flex-col 2xl:min-h-screen'>
          <div className='text-white font-Poppins flex flex-col justify-center items-center'>
            <div className='mr-40'>
              <Star />
            </div>
            <div className='mt-6 mb-8'>
              <Link to={pathConstant.HOME}>
                <Logo />
              </Link>
            </div>

            <h3 className='text-[22px] leading-[28px] font-light font-Bricolage_Grotesque'>
              Create your account
            </h3>
          </div>
          <form
            // onSubmit={handleSubmit}
            autoComplete='off'
            className='xl:px-20 2xl:px-72 md:mx-32 lg:mx-0'
          >
            <Input
              value={values.email}
              onChange={handleChange}
              type='email'
              id='email'
              name='email'
              placeholder='Enter email'
              className=''
              onBlur={handleBlur}
              required
            />
            {errors.email && touched.email && (
              <div className='pt-1 text-[#EB5757] text-[12px] font-Albert'>
                {errors.email}
              </div>
            )}

            <PasswordInput
              value={values.password}
              onChange={handleChange}
              name='password'
              id='password'
              placeholder='Create a password'
              className=''
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className='pt-1 text-[#EB5757] text-[12px] font-Albert'>
                {errors.password}
              </div>
            )}

            <Button primary round className='mt-8 mx-auto w-full'>
              Create account
            </Button>
          </form>

          <div className='bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] mx-auto p-3.5 mt-8 md:w-1/2'>
            <button className='text-[#A0A09C] flex gap-3 text-[16px] font-Bricolage_Grotesque'>
              <Google /> Sign up with Google
            </button>
          </div>

          <p className='text-[#E8E8E8] text-center font-Poppins text-[15px] font-light py-10'>
            Have an account?{' '}
            <Link to={pathConstant.LOGIN} className='text-[#79C4EC]'>
              LogIn
            </Link>
          </p>

          <p className='text-white text-center font-Poppins text-[13px] font-light'>
            By proceeding, you agree to the
            <br />
            <span className='text-[#79C4EC]'>
              Terms and Conditions
            </span> and <span className='text-[#79C4EC]'>Privacy Policy</span>
          </p>
        </div>
        <div className='bg-[#13161E] bg-split_screen bg-no-repeat bg-center hidden lg:block'></div>
      </div>
    </>
  );
};

export default CreateAccount;
