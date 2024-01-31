import React, { useEffect, useRef, useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const HearAboutUsSelect = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      //check if the div element doesn't exist
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  // const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      <div ref={divEl} className="w-full mt-6 relative">
        <div
          className="flex justify-between items-center text-[#A5A5A5] cursor-pointer border bg-[#04080D] border-[#424A57] rounded-[9px] p-3 shadow w-full"
          onClick={handleClick}
        >
          {value?.label || "Please select"}{" "}
          {/* {selectedOption ? selectedOption.label : "Please select"}{" "} */}
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {isOpen && (
          <div className="absolute top-full z-50 border p-3 shadow text-[#A5A5A5] bg-[#04080D] border-[#424A57] w-full">
            {options.map((option) => {
              return (
                <div
                  className="hover:bg-sky-100 rounded cursor-pointer p-1"
                  onClick={() => handleOptionClick(option)}
                  key={option.value}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default HearAboutUsSelect;
