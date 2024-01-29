import React, { useState } from "react";
import { classNames } from "../../utils/Helper";

function FormCheckboxCard({ title, img, onClick }) {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
    onClick(title);
  };

  return (
    <>
      <label
        className={classNames(
          "cursor-pointer px-2 md:px-5 py-4 my-2 shadow-sm rounded-[40px] transition-colors text-[#707171]",
          checked
            ? "border-[2px] border-activeBorder text-[#EBEDED]"
            : "border-[1px] border-[#424A57]"
        )}
      >
        {/* <img src={img} width="24" height="24" alt="" /> */}
        <div className="flex justify-center items-center gap-4">
          <div
            aria-hidden="true"
            className={classNames(
              checked ? "opacity-100" : "opacity-0",
              "transition-opacity"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17.3327 9.04655C17.3327 4.44418 13.6017 0.713217 8.99935 0.713217C4.39698 0.713217 0.666016 4.44418 0.666016 9.04655C0.666016 13.6489 4.39698 17.3799 8.99935 17.3799C13.6017 17.3799 17.3327 13.6489 17.3327 9.04655Z"
                fill="#EBEDED"
                stroke="#2A3C46"
                strokeWidth="1.25"
              />
              <path
                d="M5.66602 9.67122C5.66602 9.67122 6.99935 10.4317 7.66602 11.5462C7.66602 11.5462 9.66602 7.17122 12.3327 5.71289"
                stroke="#060B12"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h4 className="font-light text-[12px] md:text-[14px] font-Poppins">
            {title}
          </h4>
          <input
            type="checkbox"
            className="hidden opacity-0"
            onChange={handleCheckbox}
          />
        </div>
      </label>
    </>
  );
}

export default FormCheckboxCard;
