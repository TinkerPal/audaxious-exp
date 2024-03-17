import Input from "../../../components/Input";
import { ReactComponent as Google } from "../../../assets/svg/goog.svg";
// import { ReactComponent as Google } from "../../assets/svg/goog.svg";
import { ReactComponent as Bitcoin } from "../../../assets/svg/bitcoin.svg";
import Button from "../../../components/Button";
import useInput from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail } from "../../../store/authActions";
import { toast } from "react-toastify";
import { authAction } from "../../../store/authorizationSlice";
import Loading from "../../Homes/Loading";

const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Login = ({ onVerifyEmail }) => {
  const {
    onChangeValueHandler,
    onBlurHandler,
    value,
    valueIsInvalid,
    // valueIsValid,
  } = useInput(validEmail);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authentication.loading);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(authAction.setLoading(true));
    // toast.loading("Please wait");
    try {
      const result = await dispatch(loginWithEmail(value));
      dispatch(authAction.setLoading(false));
      toast.success(result.message);
      console.log(result);
      onVerifyEmail(true);
    } catch (error) {
      console.log("LOGIN EMAIL ERROR: ", error.response.data.error);
      dispatch(authAction.setLoading(false));
      toast.error(error.response.data.error);
      onVerifyEmail(false);
    }
    // if (valueIsInvalid) {
    //   return;
    // } else if (valueIsValid) {
    //   dispatch(loginWithEmail(value));
    //   onVerifyEmail(true);
    // }
  };
  return (
    <div className="text-[#FFF] bg-[#060B12] w-screen min-w-[15rem] md:w-[35rem] xl:w-[50rem] rounded-lg container">
      <div className="">
        <div>
          <div className="container py-[4rem]">
            {loading && (
              <div>
                <Loading text={"Loading"} />
              </div>
            )}
            <div className="text-white font-Poppins flex flex-col justify-center items-center">
              <h3 className="text-[22px] leading-[28px] font-light font-Bricolage_Grotesque">
                Login
              </h3>
            </div>

            <form autoComplete="off" className="" onSubmit={submitHandler}>
              <Input
                value={value}
                onChange={onChangeValueHandler}
                onBlur={onBlurHandler}
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className="md:w-[70%]"
                required
              />
              {valueIsInvalid && (
                <div className="mt-[0.5rem]">
                  <p className="text-[#A91612] font-[700]">
                    Enter a valid email address
                  </p>
                </div>
              )}
              <Button
                type="submit"
                primary
                round
                className="mt-8 mx-auto whitespace-nowrap lg:w-[17rem]"
              >
                Login with email
              </Button>
            </form>

            <div className="flex items-center justify-center pt-6">
              <div className="w-1/4 md:w-[14rem] border-t border-[#24343D]"></div>
              <div className="px-6 text-[#A5A5A5] font-Poppins font-normal text-[16px]">
                OR
              </div>
              <div className="w-1/4 md:w-[14rem] border-t border-[#24343D]"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-[2rem]">
              <div className="bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] px-3.5 md:px-1 py-3.5 mt-8 md:w-[15rem]">
                <a
                  // href="https://api.audaxious.com/api/v1/auth/google"
                  href="#"
                  className="text-[#A0A09C] flex gap-3 text-[16px] font-Poppins"
                >
                  <Google /> Signin with Google
                </a>
              </div>

              <div className="bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] px-3.5 md:px-1 py-3.5 mt-8 md:w-[15rem]">
                <button
                  //   onClick={() => setIsOpen(true)}
                  className="text-[#A0A09C] flex gap-3 text-[16px] font-Poppins"
                >
                  <Bitcoin /> Signin with Wallet
                </button>
              </div>
            </div>

            <p className="text-white text-center font-Poppins text-[13px] font-light pt-16">
              By proceeding, you agree to the
              <br />
              <span className="text-[#79C4EC]">
                Terms and Conditions
              </span> and <span className="text-[#79C4EC]">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
