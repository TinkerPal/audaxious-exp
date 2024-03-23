import clsx from "clsx";
import React from "react";
import { TOPEARNERS } from "../../../utils/postApi";
import { ReactComponent as Bnb } from "../../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Details } from "../../../assets/svg/dashboardSvg/details.svg";

const LeadershipBoard = () => {
  return (
    <div className="flex gap-[2rem] xl:gap-[5rem] flex-wrap md:flex-nowrap">
      <div className="border-[#314048] border-[0.5px] rounded-md bg-ElipseBg bg-no-repeat bg-cover w-[46rem]">
        <div className="border-[rgb(49,64,72)] border-b-[0.5px] py-[1rem] px-[1rem] flex gap-[1rem] items-center">
          <p className="text-[#E8E8E8] font-Poppins text-[1rem] font-normal">
            All time
          </p>
          <span className="w-[1.5px] h-[1rem] bg-[#E8E8E8]"></span>
          <p className="text-[#E8E8E8] font-Poppins text-[1rem] font-normal">
            View top ranked
          </p>
        </div>
        <div className="py-[1rem] flex flex-col px-[1rem] gap-[1rem]">
          {TOPEARNERS.slice(0, 7).map((earners, index) => (
            <div className="flex justify-between" key={earners.id}>
              <div className="flex items-center gap-[0.9rem]">
                <span className="text-[#FFF] text-[0.96rem] normal font-Poppins font-[300]">
                  {index + 1}
                </span>
                <div className="">
                  <img
                    src={earners.src}
                    height={"100"}
                    width={"100"}
                    className="w-[2.3rem] h-[2.3rem] object-cover rounded-full"
                  />
                </div>
                <span className="text-[#FFF] text-[0.96rem] normal font-Poppins font-[300]">
                  {earners.name}
                </span>
              </div>
              <div className="flex items-center gap-[1rem]">
                <span
                  className={clsx(
                    "whitespace-nowrap text-[0.5rem] md:text-[0.96rem]",
                    earners.coin.eth ? "text-[#F04086]" : "text-[#E1D356]"
                  )}
                >
                  {earners.coin.eth
                    ? `${earners.coin.eth} ETH`
                    : `${earners.coin.btc} BNB`}
                </span>
                <span>{earners.coin.eth ? <Eth /> : <Bnb />}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[22rem] md:h-[24rem] lg:h-[22rem] xl:h-[20rem] bg-ElipseBg bg-no-repeat bg-cover border-[#314048] border-[0.5px] rounded-md p-[1rem] flex flex-col gap-[1.5rem] items-center">
        <div className="mt-[1.5rem]">
          <span>
            <Details />
          </span>
        </div>
        <div>
          <p className="text-[1.125rem] font-[300] font-Poppins leading-[140%] text-[#E8E8E8] text-center">
            You have no ranking in this community, complete task to become top
            of the leader-board
          </p>
        </div>

        <button className="text-[#060B12] whitespace-nowrap font-Poppins font-[400] text-[1rem] w-[100%] lg:w-[90%] px-[1rem] py-[0.5rem] bg-[#EBEDED] rounded-md">
          Commence tasks
        </button>
      </div>
    </div>
  );
};

export default LeadershipBoard;
