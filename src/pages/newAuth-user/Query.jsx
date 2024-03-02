import React from "react";
import { ReactComponent as All } from "../../assets/svg/dashboardSvg/all.svg";
import { ReactComponent as Recent } from "../../assets/svg/dashboardSvg/recent.svg";
import { ReactComponent as Defi } from "../../assets/svg/dashboardSvg/defi.svg";
import { ReactComponent as Gaming } from "../../assets/svg/dashboardSvg/gaming.svg";
import { ReactComponent as Startups } from "../../assets/svg/dashboardSvg/startups.svg";
import { ReactComponent as Music } from "../../assets/svg/dashboardSvg/music.svg";
const Query = ({ onCreateSpace }) => {
  // const createSpaceHandler = () => {
  //   onCreateSpace(true);
  // };
  return (
    <div className="py-[1.5rem] pl-[1rem] border border-[#19242D] border-r-0 border-t-0 flex gap-[1rem] justify-between overflow-x-auto max-w-[1920px] container">
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <All />
        </span>
        <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          All
        </span>
      </div>
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <Recent />
        </span>
        <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          Most recent
        </span>
      </div>
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <Recent />
        </span>
        <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          Oldest
        </span>
      </div>

      <span className="w-[1px] h-[2rem] bg-[#19242D]"></span>
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <Defi />
        </span>
        <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          De-Fi
        </span>
      </div>
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <Gaming />
        </span>
        <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          Gaming
        </span>
      </div>
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <Startups />
        </span>
        <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          Startups
        </span>
      </div>
      <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
        <span>
          <Music />
        </span>
        <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
          Music
        </span>
      </div>
      <span className="w-[1px] h-[2rem] bg-[#19242D]"></span>
      <button
        onClick={onCreateSpace}
        className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
      >
        Create space
      </button>
    </div>
  );
};

export default Query;
