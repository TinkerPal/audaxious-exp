import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import PathConstant from "../routes/pathConstant";

import { ReactComponent as Robot } from "../assets/svg/robot.svg";
import article from "../assets/svg/article.svg";

const HowToCreateTweetModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    // Update the selected option
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    // Navigate based on the selected option
    if (selectedOption === "ai") {
      navigate(PathConstant.POSTMANAGEMENTAI);
    } else if (selectedOption === "manual") {
      navigate(PathConstant.POSTMANAGEMENTMANUAL);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      heading="How do you intend to create your post?"
    >
      <div className="flex items-center justify-center md:px-10 md:p-5 gap-5">
        <div
          onClick={() => handleOptionClick("ai")}
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
          onClick={() => handleOptionClick("manual")}
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
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleNextClick}
          className="bg-[#79C4EC] py-3 px-10 text-[14px] font-Poppins text-[#000] rounded-[4px]"
        >
          Next
        </button>
      </div>
    </Modal>
  );
};

export default HowToCreateTweetModal;
