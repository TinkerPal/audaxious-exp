import React from "react";
import React, { useEffect, useRef, useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const RecentPost = ({ value, onChange, options }) => {
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

  return (
    <>
      <div ref={divEl} className="w-40 relative">
        <div
          className="flex justify-between items-center cursor-pointer border border-[#79C4EC] rounded p-1 shadow bg-[#79C4EC] w-full"
          onClick={handleClick}
        >
          {value?.label || "Recent Post"}{" "}
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        {isOpen && (
          <div className="absolute top-full border p-3 shadow bg-white w-full">
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

export default RecentPost;
