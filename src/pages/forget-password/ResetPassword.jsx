import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import PasswordInput from "../../components/PasswordInput";
import Button from "../../components/Button";
import pathConstant from "../../routes/pathConstant";
import { AppApi } from "../../config/StoreQueryConfig";
import useAuthUser from "../../hooks/useAuthUser";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as MoneyBag } from "../../assets/svg/money-bag.svg";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // const authUser = useAuthUser();
  // const userId = authUser?.userId;
  // console.log(authUser, userId);
  const location = useLocation();
  const userId = location?.state?.data?.userId;
  // const userId = state;
  // console.log(state);

  const [resetPasswordMutation, resetPasswordMutationResult] =
    AppApi.useResetPasswordMutation();

  // const passwordRules =
  //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        otp: searchParams.get("otp"),
        userId: userId,
      },
      validationSchema: Yup.object().shape({
        password: Yup.string().min(8).required("Password is required"),
      }),

      onSubmit: async (values) => {
        try {
          const data = await resetPasswordMutation({
            data: values,
          }).unwrap();
          console.log(data);
          if (data.error) {
            return toast.error(data.Message);
          }
          if (data) {
            toast.success("password reset successful");

            navigate(pathConstant.LOGIN);
          }
        } catch (error) {
          toast.error(error);
        }
      },
    });

  return (
    <>
      <Helmet>
        <title>Reset Password | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.RESETPASSWORD} />
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
              Reset Password{" "}
            </h3>
            <p className="text-center md:text-left text-[14px] font-normal leading-[22px]">
              Provide your registered email and password to sign in{" "}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="pt-4 2xl:mx-28 md:mx-36 lg:mx-16 3xl:mx-72"
          >
            <PasswordInput
              value={values.password}
              onChange={handleChange}
              name="password"
              id="password"
              placeholder="Enter new password"
              className=""
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="pt-1 text-[#EB5757] text-[12px] font-Albert">
                {errors.password}
              </div>
            )}

            <Button
              disabled={resetPasswordMutationResult.isLoading}
              type="submit"
              primary
              round
              className="mt-8 mx-auto w-full"
            >
              Reset
            </Button>
          </form>
        </div>
        <div className="bg-[#13161E] bg-split_screen bg-no-repeat bg-center hidden lg:block relative">
          <div className="rounded-[4px] border border-[#24343D] absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4">
            <div className="flex items-center gap-4">
              <MoneyBag />
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

export default ResetPassword;
