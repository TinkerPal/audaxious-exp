import Input from "../../components/Input";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Star } from "../../assets/svg/star.svg";
import { ReactComponent as Google } from "../../assets/svg/goog.svg";
import { ReactComponent as Bitcoin } from "../../assets/svg/bitcoin.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import useInput from "../../hooks/useInput";

const validEmail = (email) => email.includes("@");

const Login = ({ onVerifyEmail }) => {
  const { onChangeValueHandler, onBlurHandler, value, valueIsInvalid } =
    useInput(validEmail);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    onVerifyEmail(true);
  };
  return (
    <div className="text-[#FFF] bg-[#060B12] w-[100%] min-w-[15rem] md:w-[35rem]">
      <div className="border-[#2A3C46] border border-opacity-[80%] rounded-md">
        <div>
          <div className="container py-[2rem]">
            <div className="text-white font-Poppins flex flex-col justify-center items-center">
              <div className="mr-40">
                <Star />
              </div>
              <div className="mt-[1rem] mb-8">
                <Link to={"/"}>
                  <Logo />
                </Link>
              </div>

              <h3 className="text-[22px] leading-[28px] font-light font-Bricolage_Grotesque">
                Login
              </h3>
            </div>
            <div className="2xl:mx-28 md:mx-36 lg:mx-16 3xl:mx-72">
              <form autoComplete="off" className="" onSubmit={submitHandler}>
                <Input
                  value={value}
                  onChange={onChangeValueHandler}
                  onBlur={onBlurHandler}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  className=""
                  required
                />

                <Button
                  type="submit"
                  primary
                  round
                  className="mt-8 mx-auto whitespace-nowrap w-[17rem]"
                >
                  Login with email
                </Button>
              </form>
            </div>
            <div className="flex items-center justify-center pt-6">
              <div className="w-1/4 border-t border-[#24343D]"></div>
              <div className="px-6 text-[#A5A5A5] font-Poppins font-normal text-[16px]">
                OR
              </div>
              <div className="w-1/4 border-t border-[#24343D]"></div>
            </div>

            <div className="bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] mx-auto p-3.5 mt-8 md:w-[17rem]">
              <a
                href="https://api.audaxious.com/api/v1/auth/google"
                className="text-[#A0A09C] flex gap-3 text-[16px] font-Poppins"
              >
                <Google /> Signin with Google
              </a>
            </div>

            <div className="bg-[#14171E] flex items-center justify-center rounded-[8px] border border-[#24343D] mx-auto p-3.5 mt-8 md:w-[17rem]">
              <button
                //   onClick={() => setIsOpen(true)}
                className="text-[#A0A09C] flex gap-3 text-[16px] font-Poppins"
              >
                <Bitcoin /> Signin with Wallet
              </button>
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
