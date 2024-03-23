import React from "react";

const Input = ({ label, name, type, className, placeholder, res, value }) => {
  return (
    <div className="flex flex-col items-start gap-[0.6rem] w-[100%]">
      <label
        htmlFor={name}
        className="font-Poppins text-[#E8E8E8] text-[1rem] font-[300]"
      >
        {label}
      </label>
      <div className="relative w-[100%]">
        <input
          required
          type={type}
          name={name}
          value={value}
          id={name}
          placeholder={placeholder}
          className={className}
          {...res}
        />
        {/* <span className="absolute right-1 top-3 md:top-2 text-[0.7rem] md:text-[0.875rem] font-Poppins font-[300] text-[#79C4EC]">
          0/40
        </span> */}
      </div>
      {/* {titleInvalid && (
          <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
            campaign must not be empty
          </p>
        )} */}
    </div>
  );
};

export default Input;
