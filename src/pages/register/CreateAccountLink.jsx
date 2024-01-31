import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import OtpInput from "react18-input-otp";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import pathConstant from "../../routes/pathConstant";
import Button from "../../components/Button";
import { AppApi } from "../../config/StoreQueryConfig";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Chart } from "../../assets/svg/Chart.svg";

const CreateAccountLink = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const user = searchParams.get("user");

  const [verifyOneTimePasswordMutation, verifyOneTimePasswordMutationResult] =
    AppApi.useVerifyOneTimePasswordMutation();

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      email: searchParams.get("email"),
      otp: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await verifyOneTimePasswordMutation({
          data: values,
        }).unwrap();
        console.log(data);

        if (data.error) {
          console.log(data.error);
          return toast.error(data.message);
        }

        if (data) {
          console.log(data);
          navigate(pathConstant.QUESTIONAIRE.concat("?user=", user));
        }
      } catch (error) {
        console.log(error);
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
        <link rel="canonical" href={pathConstant.CREATEACCOUNTOTP} />
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

            <h3 className="text-[22px] leading-[28px] mb-1 font-light font-Bricolage_Grotesque">
              Verify Email{" "}
            </h3>
            <p className="text-[#A5A5A5] text-center md:text-left text-[15px] font-normal leading-[22px] mt-2">
              Enter the verification code we sent to{" "}
              <span className="text-[20px] text-[#E8E8E8]">
                {searchParams.get("email") || "your email address"}{" "}
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center justify-center pt-8 space-x-2">
              <OtpInput
                value={values.otp}
                onChange={(otp) => {
                  setFieldValue("otp", otp);
                }}
                numInputs={6}
                isInputNum
                inputStyle={{
                  width: "45px",
                  height: "45px",
                  margin: "0 5px",
                  border: "2px solid rgba(42, 60, 70, 0.75)",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  color: "#fff",
                  backgroundColor: "#060B12",
                }}
                separator={<span></span>}
              />
            </div>
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={verifyOneTimePasswordMutationResult.isLoading}
                primary
                round
                className="mt-6 mx-auto w-1/2"
              >
                Next
              </Button>
            </div>
          </form>

          <p className="text-[#E8E8E8] text-center font-Poppins text-[13px] font-light pt-40">
            Already have an account?{" "}
            <Link to={pathConstant.LOGIN} className="text-[#79C4EC]">
              Sign In
            </Link>
          </p>
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

export default CreateAccountLink;
