import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

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
import { ReactComponent as Chart } from "../../assets/svg/Chart.svg";
// import useAuthUser from "../../hooks/useAuthUser";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();
  // const authUser = useAuthUser();
  // console.log(authUser);

  const [loginUserMutation, loginUserMutationResult] =
    AppApi.useLoginUserMutation();

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
          const data = await loginUserMutation({
            data: values,
          }).unwrap();
          console.log(data);

          if (data.error) {
            if (
              data.message === "Please Check Your Credentials and Try Again."
            ) {
              return toast.error("Invalid email or password");
            } else {
              return toast.error(data.message);
            }
          }

          if (data) {
            toast.success("login successful");

            navigate(pathConstant.DASHBOARD);
          }
        } catch (error) {
          toast.error(error);
        }
      },
    });

  return (
    <>
      <Helmet>
        <title>Login | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.LOGIN} />
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
              LogIn
            </h3>
            <p className="text-center md:text-left text-[14px] font-normal leading-[22px]">
              Provide your registered email and password to login{" "}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="pt-4 2xl:mx-28 md:mx-36 lg:mx-16 3xl:mx-72"
          >
            <Input
              value={values.email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              className=""
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="pt-1 text-[#EB5757] text-[12px] font-Albert">
                {errors.password}
              </div>
            )}

            <Button
              disabled={loginUserMutationResult.isLoading}
              type="submit"
              primary
              round
              className="mt-8 mx-auto w-full"
            >
              Sign In
            </Button>
          </form>

          <div className="text-center font-Poppins pt-6 text-[14px] font-light">
            <Link to={pathConstant.FORGETPASSWORD} className="text-[#79C4EC]">
              Forgot Password?
            </Link>

            <p className="text-[#E8E8E8] mt-4">
              Don’t have an account?{" "}
              <Link to={pathConstant.CREATEACCOUNT} className="text-[#79C4EC]">
                Sign Up
              </Link>
            </p>
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
        </div>
        <div className="bg-[#13161E] bg-split_screen bg-no-repeat bg-center hidden lg:block relative">
          <div className="rounded-[4px] border border-[#24343D] absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4">
            <div className="flex items-center gap-4">
              <Chart />
              <p className="text-[#EBEDED] font-Poppins text-[18px] font-light">
                Promote Projects
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
