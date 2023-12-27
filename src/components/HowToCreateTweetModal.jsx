import React, { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import PathConstant from "../routes/pathConstant";

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
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        heading="How do you intend to create your post?"
      >
        <div className="flex items-center gap-5">
          <div
            onClick={() => handleOptionClick("ai")}
            className={`flex flex-col items-center cursor-pointer justify-center gap-6 p-6 ${
              selectedOption === "ai"
                ? "border-[2px] border-[#2B84D5]"
                : "border-[1px] border-[#2A3C46]"
            } rounded-[10px]`}
          >
            <p className="text-white">Logo</p>
            <p className="text-white font-Poppins text-[14px] font-light">
              Use AudaXious AI
            </p>
          </div>

          <div
            onClick={() => handleOptionClick("manual")}
            className={`flex flex-col items-center cursor-pointer justify-center gap-6 p-6 ${
              selectedOption === "manual"
                ? "border-[2px] border-[#2B84D5]"
                : "border-[1px] border-[#2A3C46]"
            } rounded-[10px]`}
          >
            <p className="text-white">Logo</p>
            <p className="text-white font-Poppins text-[14px] font-light">
              Write manually
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handleNextClick}
            className="bg-[#79C4EC] py-3 px-10 text-[14px] font-Poppins text-[£000] rounded-[4px]"
          >
            Next
          </button>
        </div>
      </Modal>
    </>
  );
};

export default HowToCreateTweetModal;