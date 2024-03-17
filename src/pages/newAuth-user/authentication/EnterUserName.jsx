import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import { enterUserName } from "../../../store/authActions";
import { toast } from "react-toastify";
import { authAction } from "../../../store/authorizationSlice";
import Loading from "../../Homes/Loading";
const validUserName = (name) => name.trim() !== "";
const EnterUserName = () => {
  const dispatch = useDispatch();
  const { onBlurHandler, value, onChangeValueHandler, valueIsInvalid } =
    useInput(validUserName);
  const loading = useSelector((state) => state.authentication.loading);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(authAction.setLoading(true));
    try {
      const result = await dispatch(enterUserName(value));
      dispatch(authAction.setLoading(false));
      toast.success(result.message);
      dispatch(authAction.onclose());
    } catch (error) {
      console.log("TYPO", error.response.data.error);
      dispatch(authAction.setLoading(false));
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="text-[#FFF] bg-[#060B12] w-screen min-w-[15rem] md:w-[35rem] xl:w-[50rem] rounded-lg container">
      <div className="">
        <div className="container py-[4rem]">
          {loading && (
            <div>
              <Loading text={"Loading"} />
            </div>
          )}
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
              onBlur={onBlurHandler}
              onChange={onChangeValueHandler}
              value={value}
              id="userName"
              name="userName"
              placeholder="Enter user name"
              className="md:w-[70%]"
              required
            />
            {valueIsInvalid && (
              <div className="mt-[0.5rem]">
                <p className="text-[#A91612] font-[700]">
                  Enter a valid user name
                </p>
              </div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#E8E8E8] text-[#060B12] font-[600] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 mt-8 w-[15rem] md:w-[17rem]"
              >
                Next
              </button>
            </div>
          </form>

          <p className="text-[#A5A5A5] text-center font-Poppins text-[13px] font-light pt-20">
            You entered a wrong email?{" "}
            <Link to={"#"} className="text-[#79C4EC]">
              Change Email
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnterUserName;
