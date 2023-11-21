import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import pathConstant from '../../routes/pathConstant';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Star } from '../../assets/svg/star.svg';
import { ReactComponent as Send } from '../../assets/svg/send-svg.svg';

const CreateAccountLink = () => {
  return (
    <>
      <Helmet>
        <title>Create Account | Audaxious</title>
        <meta
          name='description'
          content='Create account so you can start trading tokens'
        />
        <link rel='canonical' href={pathConstant.CREATEACCOUNTLINK} />
      </Helmet>

      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
        <div className='container md:pt-28 py-10 2xl:flex 2xl:justify-center 2xl:flex-col 2xl:min-h-screen'>
          <div className='text-[#E8E8E8] font-Poppins flex flex-col justify-center items-center'>
            <div className='mr-40'>
              <Star />
            </div>
            <div className='mt-6 mb-10'>
              <Link to={pathConstant.HOME}>
                <Logo />
              </Link>
            </div>

            <h3 className='text-[22px] leading-[28px] mb-1 font-light font-Bricolage_Grotesque'>
              Confirm Email{' '}
            </h3>
            <p className='text-[#A5A5A5] text-center md:text-left text-[15px] font-normal leading-[22px] mt-2'>
              We sent an email to{' '}
              <span className='text-[20px] text-[#E8E8E8]'>
                eddyeequere@gmail.com
              </span>
            </p>
          </div>
          <div className='flex justify-center my-12'>
            <Send />
          </div>

          <p className='text-white text-center font-Poppins text-[15px] font-light'>
            Click the Link in the email to login
            <br /> into your account <br />
          </p>
        </div>
        <div className='bg-[#13161E] bg-split_screen bg-no-repeat bg-center hidden lg:block'></div>
      </div>
    </>
  );
};

export default CreateAccountLink;
