import { useState } from "react";
import OtpInput from "react18-input-otp";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailWithOtp } from "../../store/authActions";
import { authAction } from "../../store/store";

const VerifyEmail = ({ onEnterUserName, onVerifyEmail }) => {
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState(false);

  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (valueIsInvalid) {
  //     return;
  //   } else if (valueIsValid) {
  //     dispatch(loginWithEmail(value));
  //     onVerifyEmail(true);
  //   }
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (otpValue.length !== 6) {
      setOtpError(true);
      return;
    }
    try {
      const result = await dispatch(
        verifyEmailWithOtp({ email: email, otp: otpValue })
      );
      console.log(result);
      // dispatch(authAction.onclose());
      // localStorage.setItem("loggedin", "loggedin");
      // dispatch(authAction.loggin());
      console.log(result.data.token);
      localStorage.setItem("audaxiousAccessToken", result.data.token);

      dispatch(authAction.loggin());
      if (!result.data.username) {
        onEnterUserName(true);
        onVerifyEmail(false);
        return;
      } else {
        dispatch(authAction.onclose());
      }
    } catch (error) {
      console.log("TYPO", error);
      onEnterUserName(false);
      onVerifyEmail(true);
    }

    // console.log(otpValue);
  };
  return (
    <div className="text-[#FFF] w-screen md:w-[35rem] xl:w-[45rem] container bg-[#060B12] rounded-lg">
      <div className="w-[100%]">
        <div className="container py-[4rem]">
          <div className="text-[#E8E8E8] font-Poppins flex flex-col justify-center items-center">
            <h3 className="text-[22px] leading-[28px] mb-1 font-light font-Bricolage_Grotesque">
              Verify Email{" "}
            </h3>
            <p className="text-[#A5A5A5] text-center text-[1rem] font-normal leading-[22px] mt-2 font-Poppins">
              Enter the verification code we sent to{" "}
              <span className="text-[1.1rem] text-[#E8E8E8]">{email} </span>
            </p>
          </div>

          <form className="w-full" onSubmit={submitHandler}>
            <div className="flex items-center justify-center pt-8 space-x-2">
              <OtpInput
                value={otpValue}
                onChange={handleOtpChange}
                numInputs={6}
                isInputNum
                // className="w-[2.5rem] md:w-[4.37rem] h-[2rem] md:h-[3.75rem]"
                inputStyle={{
                  width: "3rem",
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
            {otpError && (
              <div className="mt-[0.5rem]">
                <p className="text-[#A91612] font-[700]">Enter a valid OTP</p>
              </div>
            )}
            <div className="mt-[2rem]">
              <p className="text-[#79C4EC] font-Poppins text-[1rem] font-[400]">
                Resend Code
                <span className="text-[#E8E8E8] ml-[0.5rem]">00:00</span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#14171E] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 mt-8 w-[15rem] md:w-[17rem]"
                // mt-8 mx-auto whitespace-nowrap lg:w-[17rem]
              >
                Next
              </button>
            </div>
          </form>

          <p className="text-[#A5A5A5] text-center font-Poppins text-[13px] font-light pt-20">
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
