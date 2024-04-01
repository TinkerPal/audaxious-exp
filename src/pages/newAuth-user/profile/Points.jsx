import React from "react";
import { useSelector } from "react-redux";

const Points = () => {
  const points = useSelector((state) => state.authentication.points);
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-[1.25rem]">
      <div className="flex flex-col items-center gap-[0.5rem] border-[1.8px] px-[0.5rem] md:px-0 border-[#18232C] w-[7rem] md:w-[16rem] py-[1.25rem] rounded-[0.23081rem]">
        <div className="flex gap-[1.08rem]">
          <span className="w-[0.13463rem] h-[1.65rem] bg-[#3EDCFF] rounded-md"></span>
          <div className="flex flex-col gap-[0.46rem]">
            <p className="text-[#808080] text-[0.62325rem] md:text-[0.92325rem] font-Poppins font-[400] leading-[140%]">
              Loyalty Point
            </p>
            <p className="text-[1rem] font-[400] text-[#D3D3D3] font-Poppins">
              {points} XP
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[0.5rem] border-[1.8px] border-[#18232C] w-[7rem] md:w-[16rem] px-[0.5rem] md:px-0 py-[1.25rem] rounded-[0.23081rem]">
        <div className="flex gap-[1.08rem]">
          <span className="w-[0.13463rem] h-[1.65rem] bg-[#B63EFF] rounded-md"></span>
          <div className="flex flex-col gap-[0.46rem]">
            <p className="text-[#808080] whitespace-nowrap text-[0.62325rem] md:text-[0.92325rem] font-Poppins font-[400] leading-[140%]">
              Global Ranking
            </p>
            <p className="text-[1rem] font-[400] text-[#D3D3D3] font-Poppins">
              {0}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[0.5rem] border-[1.8px] border-[#18232C] px-[0.5rem] md:px-0 w-[7rem] md:w-[16rem] py-[1.25rem] rounded-[0.23081rem]">
        <div className="flex gap-[1.08rem]">
          <span className="w-[0.13463rem] h-[1.65rem] bg-[#FFAA3E] rounded-md"></span>
          <div className="flex flex-col gap-[0.46rem]">
            <p className="text-[#808080] text-[0.62325rem] md:text-[0.92325rem] font-Poppins font-[400] leading-[140%]">
              ADX Airdrop
            </p>
            <p className="text-[1rem] font-[400] text-[#D3D3D3] font-Poppins">
              {0} <span className="text-[#909292]">ADX</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[0.5rem] border-[1.8px] border-[#18232C] px-[0.5rem] md:px-0 w-[7rem] md:w-[16rem] py-[1.25rem] rounded-[0.23081rem]">
        <div className="flex gap-[1.08rem]">
          <span className="w-[0.13463rem] h-[1.65rem] bg-[#3EFFDC] rounded-md"></span>
          <div className="flex flex-col gap-[0.46rem]">
            <p className="text-[#808080] text-[0.62325rem] md:text-[0.92325rem] font-Poppins font-[400] leading-[140%]">
              Total Reward
            </p>
            <p className="text-[1rem] font-[400] text-[#D3D3D3] font-Poppins">
              {0} <span className="text-[#909292]">USD</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
