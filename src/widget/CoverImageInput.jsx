import React from "react";
import { ReactComponent as ImageSelector } from "../assets/svg/dashboardSvg/selectImage.svg";
const CoverImageInput = ({ onChange, val, name }) => {
  return (
    <div className="bg-ElipseBg bg-cover">
      <label
        htmlFor={name}
        className="block border-[#2A3C46] border-b border-opacity-[80%] h-[10rem] relative overflow-hidden z-[1]"
      >
        <div className="absolute top-[30%] left-[50%] flex items-center flex-col gap-[0.5rem] z-[3]">
          <ImageSelector />
          <p className="text-[1rem] text-[#2A3C46] text-opacity-[80%] font-Poppins font-[300] leading-[150%] normal">
            Select Banner Image
          </p>
        </div>
        {val ? (
          <img src={URL.createObjectURL(val)} alt="" className="w-[100%]" />
        ) : (
          ""
        )}
        <input
          // value={cover}
          // onBlur={coverImageOnBlur}

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
    </div>
  );
};

export default CoverImageInput;
