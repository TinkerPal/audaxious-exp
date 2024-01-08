import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import pathConstant from "../../routes/pathConstant";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Communities } from "../../assets/svg/communities.svg";

const ForgetPassword = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        // password: '',
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        // password: Yup.string().min(8).required('Password is required'),
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
        <title>Forget Password | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.FORGETPASSWORD} />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="container md:pt-28 py-10 2xl:flex 2xl:justify-center 2xl:flex-col 2xl:min-h-screen">
          <div className="text-[#E8E8E8] font-Poppins flex flex-col justify-center items-center">
            <div className="mr-40">
              <Star />
            </div>
            <div className="mt-6 mb-10">
              <Link to={pathConstant.HOME}>
                <Logo />
              </Link>
            </div>

            <h3 className="text-[22px] leading-[28px] mb-2 font-light font-Bricolage_Grotesque">
              Reset Password
            </h3>
            <p className="text-center md:text-left text-[14px] font-normal leading-[22px]">
              Provide your registered email and password to set new password
            </p>
          </div>
          <form
            // onSubmit={handleSubmit}
            autoComplete="off"
            className="pt-4 xl:px-20 2xl:px-20 md:mx-32 lg:mx-0"
          >
            <Input
              value={values.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className=""
              onBlur={handleBlur}
              required
            />
            {errors.email && touched.email && (
              <div className="pt-1 text-[#EB5757] text-[12px] font-Albert">
                {errors.email}
              </div>
            )}

            {/* <PasswordInput
              value={values.password}
              onChange={handleChange}
              name='password'
              id='password'
              placeholder='Enter password'
              className=''
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className='pt-1 text-[#EB5757] text-[12px] font-Albert'>
                {errors.password}
              </div>
            )} */}

            <Button primary round className="mt-8 mx-auto w-full">
              Recover Password
            </Button>
          </form>

          <div className="text-center font-Poppins pt-8 text-[14px] font-light">
            <p className="text-[#79C4EC]">
              <Link to={pathConstant.LOGIN} className="text-[#79C4EC]">
                Remember Password?{" "}
              </Link>
            </p>
          </div>

          <p className="text-[#E8E8E8] text-center font-Poppins text-[13px] font-light pt-8">
            Don't have an account?{" "}
            <Link to={pathConstant.CREATEACCOUNT} className="text-[#79C4EC]">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="bg-[#13161E] bg-split_screen bg-no-repeat bg-center hidden lg:block relative">
          <div className="rounded-[4px] border border-[#24343D] absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4">
            <div className="flex items-center gap-4">
              <Communities />
              <p className="text-[#EBEDED] font-Poppins text-[18px] font-light">
                Build Communities
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default ForgetPassword;
