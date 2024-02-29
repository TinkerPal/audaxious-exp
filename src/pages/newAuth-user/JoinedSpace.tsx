import React from "react";
import { ReactComponent as NoSpace } from "../../assets/svg/dashboardSvg/noSpace.svg";

const JoinedSpace = () => {
  return (
    <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
      <span>
        <NoSpace />
      </span>
      <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
        <p className="font-[400] text-[1.2rem]">No spaces to show</p>
        <p className="text-center font-[300] text-[0.8rem] leading-normal">
          Spaces you join will appear here
          <br /> click <span className="text-[#FFF]">“Join a space”</span> to
          join one
        </p>
      </div>
      <button className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
        Join a space
      </button>
    </div>
  );
};

export default JoinedSpace;
