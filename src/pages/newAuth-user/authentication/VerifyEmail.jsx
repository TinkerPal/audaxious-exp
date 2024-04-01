import { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail, verifyEmailWithOtp } from "../../../store/authActions";
import { toast } from "react-toastify";
import { authAction } from "../../../store/authorizationSlice";
import Loading from "../../Homes/Loading";

const VerifyEmail = ({ onEnterUserName, onVerifyEmail }) => {
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [countDown, setCountDown] = useState(120);
  const [countdownActive, setCountdownActive] = useState(true);
  const loading = useSelector((state) => state.authentication.loading);
  const email = useSelector((state) => state.authentication.email);
  const dispatch = useDispatch();

  const handleOtpChange = (otp) => {
    setOtpValue(otp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setCountdownActive(false);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, countdownActive]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const count = formatTime(countDown);

  const resendTokenHandler = async () => {
    dispatch(authAction.setLoading(true));
    // toast.loading("Please wait");
    try {
      const result = await dispatch(loginWithEmail(email));
      dispatch(authAction.setLoading(false));
      toast.success("Check you email for another token");
      setCountDown(120);
      setCountdownActive(true);
      // console.log(result);
      // onVerifyEmail(true);
    } catch (error) {
      console.log("LOGIN EMAIL ERROR: ", error.response.data.error);
      dispatch(authAction.setLoading(false));
      toast.error(error.response.data.error);
      // onVerifyEmail(false);
    }
  };

  const changeEmailHandler = () => {
    onVerifyEmail(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(authAction.setLoading(true));
    if (otpValue.length !== 6) {
      setOtpError(true);
      return;
    }
    try {
      const result = await dispatch(
        verifyEmailWithOtp({ email: email, otp: otpValue })
      );
      dispatch(authAction.setLoading(false));
      toast.success(result.message);
      localStorage.setItem("audaxiousAccessToken", result.data.token);

      dispatch(authAction.loggin());
      console.log("the result is", result);

      if (!result.data.username) {
        onEnterUserName(true);
        onVerifyEmail(false);
        return;
      } else {
        dispatch(authAction.onclose());
      }
    } catch (error) {
      console.log("TYPO", error.response.data.error);
      dispatch(authAction.setLoading(false));
      toast.error(
        `${error.response.data.error} or check your email for valid token`
      );
      onEnterUserName(false);
      onVerifyEmail(true);
    }

    // console.log(otpValue);
  };
  return (
    <div className="text-[#FFF] w-screen md:w-[35rem] xl:w-[45rem] container bg-[#060B12] rounded-lg">
      <div className="w-[100%]">
        <div className="container py-[4rem]">
          {loading && (
            <div>
              <Loading text={"Loading"} />
            </div>
          )}
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
                <button
                  onClick={resendTokenHandler}
                  disabled={countdownActive}
                  className="disabled:cursor-not-allowed cursor-pointer"
                >
                  Resend Code
                </button>
                <span className="text-[#E8E8E8] ml-[0.5rem]">{count}</span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#E8E8E8] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 mt-8 w-[15rem] md:w-[17rem]"
                // mt-8 mx-auto whitespace-nowrap lg:w-[17rem]
              >
                <span className="text-[#060B12] font-Poppins font-[600]">
                  Next
                </span>
              </button>
            </div>
          </form>

          <p className="text-[#A5A5A5] text-center font-Poppins text-[13px] font-light pt-20">
            You entered a wrong email?{" "}
            <span
              className="text-[#79C4EC] cursor-pointer"
              onClick={changeEmailHandler}
            >
              Change Email
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
