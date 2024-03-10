import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/store";

const EnterUserName = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // onOpen(false);
    dispatch(authAction.onclose());
    localStorage.setItem("loggedin", "loggedin");
    dispatch(authAction.loggin());
    // console.log("Login");
    // localStorage.setItem("loggedin", "loggedin");
    // window.location.href = "/spaces";
  };

  return (
    <div className="text-[#FFF] bg-[#060B12] w-screen min-w-[15rem] md:w-[35rem] xl:w-[50rem] rounded-lg container">
      <div className="">
        <div className="container py-[4rem]">
          <div className="text-[#E8E8E8] font-Poppins flex flex-col justify-center items-center">
            <h3 className="text-[22px] leading-[28px] mb-1 font-light font-Bricolage_Grotesque">
              Set Username{" "}
            </h3>
            <p className="text-[#A5A5A5] text-center text-[1rem] font-normal leading-[22px] mt-2 font-Poppins">
              Please note that after saving a username, you can only change it
              after 30 days.
            </p>
          </div>

          <form className="w-full" onSubmit={submitHandler}>
            <Input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter user name"
              className="md:w-[70%]"
              required
            />
            <div className="mt-[2rem]">
              <p className="text-[#79C4EC] font-Poppins text-[1rem] font-[400]">
                Resend Code
                <span className="text-[#E8E8E8] ml-[0.5rem]">00:00</span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#14171E] text-[#000] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 mt-8 w-[15rem] md:w-[17rem]"
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

export default EnterUserName;
