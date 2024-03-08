import { useState } from "react";
import OtpInput from "react18-input-otp";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";

const VerifyEmail = ({ onEnterUserName, onVerifyEmail }) => {
  const [otpValue, setOtpValue] = useState("");

  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(otpValue);
    onEnterUserName(true);
    onVerifyEmail(false);
  };
  return (
    <div className="text-[#FFF] bg-[#060B12] w-[100%] min-w-[15rem] md:w-[35rem]">
      <div className="border-[#2A3C46] border border-opacity-[80%] rounded-md">
        <div className="container py-[2rem]">
          <div className="text-[#E8E8E8] font-Poppins flex flex-col justify-center items-center">
            <div className="mr-40">
              <Star />
            </div>
            <div className="mt-6 mb-10">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>

            <h3 className="text-[22px] leading-[28px] mb-1 font-light font-Bricolage_Grotesque">
              Verify Email{" "}
            </h3>
            <p className="text-[#A5A5A5] text-center md:text-left text-[1rem] font-normal leading-[22px] mt-2 font-Poppins">
              Enter the verification code we sent to{" "}
              <span className="text-[1.1rem] text-[#E8E8E8]">
                {"your email address"}{" "}
              </span>
            </p>
          </div>

          <form className="w-full" onSubmit={submitHandler}>
            <div className="flex items-center justify-center pt-8 space-x-2">
              <OtpInput
                value={otpValue}
                onChange={handleOtpChange}
                numInputs={4}
                isInputNum
                inputStyle={{
                  width: "4.37rem",
                  height: "3.75rem",
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
            <div className="mt-[2rem]">
              <p className="text-[#79C4EC] font-Poppins text-[1rem] font-[400]">
                Resend Code
                <span className="text-[#E8E8E8] ml-[0.5rem]">00:00</span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                //   disabled={verifyOneTimePasswordMutationResult.isLoading}
                // primary
                // round
                className="bg-[#14171E] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] mx-auto p-3.5 mt-8 md:w-[17rem]"
              >
                Next
              </button>
            </div>
          </form>

          <p className="text-[#A5A5A5] text-center font-Poppins text-[13px] font-light pt-40">
            You entered a wrong email?{" "}
            <Link to={"pathConstant.LOGIN"} className="text-[#79C4EC]">
              Change Email
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
