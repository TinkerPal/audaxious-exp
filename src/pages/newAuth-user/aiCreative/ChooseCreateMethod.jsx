import Modal from "../../../components/socialmedia/Modal";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancels.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Robot } from "../../../assets/svg/robot.svg";
import article from "../../../assets/svg/article.svg";
import { useDispatch, useSelector } from "react-redux";
import { aiCreatieActions } from "../../../store/aiCreativeSlice";

const ChooseCreateMethod = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const isOpen = useSelector((state) => state.aiCreative.openCreatePostModal);
  const dispatch = useDispatch();
  const selectedOptionHandler = (option) => {
    setSelectedOption(option);
  };

  const nextClickHandler = () => {
    if (selectedOption === "ai") {
      navigate("/ai-creatives/ai");
    } else if (selectedOption === "manual") {
      navigate("/ai-creatives/manual");
    }
    dispatch(aiCreatieActions.setCreatePostModal(false));
  };

  const closeModal = () => {
    dispatch(aiCreatieActions.setCreatePostModal(false));
  };
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <section className="bg-[#060B12] relative rounded-md w-auto md:w-[43rem] py-[2.5rem] px-[1rem] md:px-0 text-[#FFF]">
        <div className="">
          <div className="text-neutral-300 top-[15px] absolute right-2">
            <span className="cursor-pointer" onClick={closeModal}>
              <Cancel />
            </span>
          </div>
          <h3 className=" text-center text-[1.25rem] font-normal font-Poppins text-[#FFF]">
            How do you intend to create your post?
          </h3>
          <div className="flex items-center justify-center md:px-10 md:p-5 gap-[2.75rem] my-[1rem] md:my-0">
            {/* <div className="flex flex-col items-center cursor-pointer justify-center gap-6 p-6 w-[10rem] h-[11rem] bg-white"></div> */}
            <div
              onClick={() => selectedOptionHandler("ai")}
              className={`flex flex-col items-center cursor-pointer justify-center gap-6 p-6 w-[160px] h-[180px] ${
                selectedOption === "ai"
                  ? "border-[2px] border-[#2B84D5] bg-[#09141A]"
                  : "border-[1px] border-[#2A3C46]"
              } rounded-[10px]`}
            >
              <Robot />
              <p className="text-white font-Poppins text-[12px] font-light text-center">
                Use AudaXious AI
              </p>
            </div>
            <div
              onClick={() => selectedOptionHandler("manual")}
              className={`flex flex-col items-center cursor-pointer justify-center gap-6 p-6 w-[160px] h-[180px] ${
                selectedOption === "manual"
                  ? "border-[2px] border-[#2B84D5] bg-[#09141A]"
                  : "border-[1px] border-[#2A3C46]"
              } rounded-[10px]`}
            >
              <img src={article} alt="" />
              <p className="text-white font-Poppins text-[12px] font-light text-center">
                Write manually
              </p>
            </div>
          </div>
          <button
            onClick={nextClickHandler}
            className="border-[#2A3C46] w-[6rem] border border-opacity-[80%] py-[0.4rem] px-[1rem] bg-[#79C4EC] rounded-md font-Poppins text-[#060B12] text-[0.75rem] font-[500]"
          >
            Next
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ChooseCreateMethod;
