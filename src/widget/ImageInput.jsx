import React from "react";
import { ReactComponent as AddIcon } from "../assets/svg/dashboardSvg/addIcon.svg";

const ImageInput = ({ onChange, val, name }) => {
  return (
    <label
      htmlFor={name}
      className="block bg-transparent border-[#2A3C46] border border-opacity-[80%] h-[9rem] w-[9rem] xl:w-[14rem] xl:h-[14rem] rounded-full relative overflow-hidden z-[1]"
    >
      <div className="absolute top-[28%] left-[15%] xl:top-[35%] xl:left-[20%] flex items-center flex-col gap-[0.5rem] z-[3]">
        <AddIcon />
        <p className="text-[0.6rem] xl:text-[0.8rem] text-[#A5A5A5] font-Poppins font-[400] leading-[150%] normal whitespace-nowrap">
          Add Campaign Photo
        </p>
      </div>
      {val ? (
        <img src={URL.createObjectURL(val)} alt="" className="w-[100%]" />
      ) : (
        ""
      )}
      <input
        required
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        style={{
          width: "100%",
          height: "100%",
          opacity: "0",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </label>
  );
};

export default ImageInput;
