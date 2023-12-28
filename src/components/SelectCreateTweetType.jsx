import React, { useEffect, useRef, useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import { TweetType } from "../constants/globalConstant";
import PathConstant from "../routes/pathConstant";

const SelectCreateTweetType = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);

    // Navigate based on the selected option
    if (option.value === "Create post manually") {
      navigate(PathConstant.POSTMANAGEMENTMANUAL);
    } else if (option.value === "Create post with AI") {
      navigate(PathConstant.POSTMANAGEMENTAI);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div ref={divEl} className="w-64 z-30 relative bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
        <div
          className="flex justify-between items-center cursor-pointer border border-[#79C4EC] rounded p-2 shadow w-full"
          onClick={handleClick}
        >
          {value?.label || "Select how to create Post"}{" "}
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {isOpen && (
          <div className="absolute top-full border border-[#79C4EC] p-3 shadow w-full">
            {TweetType.map((option) => (
              <div
                className="hover:bg-sky-100 rounded cursor-pointer p-2 bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent"
                onClick={() => handleOptionClick(option)}
                key={option.value}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectCreateTweetType;