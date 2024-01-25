import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import CreateAccountWithCryptoModal from "../../components/CreateAccountWithCryptoModal";
import pathConstant from "../../routes/pathConstant";
import { AppApi } from "../../config/StoreQueryConfig";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Google } from "../../assets/svg/goog.svg";
import { ReactComponent as Bitcoin } from "../../assets/svg/bitcoin.svg";
import { ReactComponent as Communities } from "../../assets/svg/communities.svg";

const CreateAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [verifyNewUserIdentityMutation, verifyNewUserIdentityMutationResult] =
    AppApi.useVerifyNewUserIdentityMutation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string().min(8).required("Password is required"),
      }),

      onSubmit: async (values) => {
        try {
          const data = await verifyNewUserIdentityMutation({
            data: values,
          }).unwrap();
          console.log(data);
          if (data.error) {
            return toast.error(data.message);
          }

          if (data) {
            toast.success("OTP sent to your email");

            navigate("/create-account-otp".concat("?email=", values.email));
          }
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
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.CREATEACCOUNT} />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="container md:pt-28 py-10 2xl:flex 2xl:justify-center 2xl:flex-col 2xl:min-h-screen">
          <div className="text-white font-Poppins flex flex-col justify-center items-center">
            <div className="mr-40">
              <Star />
            </div>
            <div className="mt-6 mb-8">
              <Link to={pathConstant.HOME}>
                <Logo />
              </Link>
            </div>

            <h3 className="text-[22px] leading-[28px] font-light font-Bricolage_Grotesque">
              Create your account
            </h3>
          </div>
          <div className="2xl:mx-28 md:mx-36 lg:mx-16 3xl:mx-72">
            <form onSubmit={handleSubmit} autoComplete="off" className="">
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

              <PasswordInput
                value={values.password}
                onChange={handleChange}
                name="password"
                id="password"
                placeholder="Create a password"
                className=""
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="pt-1 text-[#EB5757] text-[12px] font-Albert">
                  {errors.password}
                </div>
              )}

              <Button
                type="submit"
                disabled={verifyNewUserIdentityMutationResult.isLoading}
                primary
                round
                className="mt-8 mx-auto w-full"
              >
                Next
              </Button>
            </form>
          </div>

          <p className="text-[#E8E8E8] text-center font-Poppins text-[13px] font-light pt-4">
            Already have an account?{" "}
            <Link to={pathConstant.LOGIN} className="text-[#79C4EC]">
              Sign In
            </Link>
          </p>

          <div className="flex items-center justify-center pt-6">
            <div className="w-1/4 border-t border-[#24343D]"></div>
            <div className="px-6 text-[#A5A5A5] font-Poppins font-normal text-[16px]">
              OR
            </div>
            <div className="w-1/4 border-t border-[#24343D]"></div>
          </div>

          <div className="bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] mx-auto p-3.5 mt-8 md:w-1/2">
            <a
              href="https://audaxious-auth-api-a107eed7620b.herokuapp.com/api/v1/auth/google"
              className="text-[#A0A09C] flex gap-3 text-[16px] font-Poppins"
            >
              <Google /> Sign up with Google
            </a>
          </div>

          <div className="bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] mx-auto p-3.5 mt-8 md:w-1/2">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#A0A09C] flex gap-3 text-[16px] font-Poppins"
            >
              <Bitcoin /> Use Crypto Wallet
            </button>
            <CreateAccountWithCryptoModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              setIsOpen={setIsOpen}
            />
          </div>

          <p className="text-white text-center font-Poppins text-[13px] font-light pt-16">
            By proceeding, you agree to the
            <br />
            <span className="text-[#79C4EC]">
              Terms and Conditions
            </span> and <span className="text-[#79C4EC]">Privacy Policy</span>
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
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
