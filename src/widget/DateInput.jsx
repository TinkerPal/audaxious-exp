import React from "react";
import { ReactComponent as Calender } from "../../src/assets/svg/dashboardSvg/calender.svg";
// import DatePicker from "react-datepicker";

const DateInput = ({ value, onClick, placeholder, errorMsg, isInvalid }) => {
  return (
    <div className="relative">
      <input
        readOnly
        value={value}
        onClick={onClick}
        // required
        // type="text"
        // name="startDate"
        // id="startDate"
        placeholder={placeholder}
        className="bg-transparent outline-none placeholder:text-[#A5A5A5] px-[0.62rem] w-[100%] md:w-[13rem] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md py-[0.62rem] text-[0.75rem] font-Poppins"
      />
      {/* <DatePicker /> */}
      <span className="absolute right-3 top-1 cursor-pointer">
        <Calender />
      </span>

      {isInvalid && (
        <p className="text-[#b40e0e] text-end text-[0.75rem] font-[600] font-Poppins">
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default DateInput;
