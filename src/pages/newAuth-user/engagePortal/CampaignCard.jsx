import React from "react";
import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/clock.svg";
import AppImage from "../../../assets/svg/SpaceDefault/apeImage.png";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import Card from "../../../components/socialmedia/Card";
import ExpiryDate from "./ExpiryDate";

const CampaignsCard = ({ post }) => {
  return (
    <Card>
      <div className="flex justify-between px-[0.94rem] pt-[0.62rem] 0">
        <div className="flex items-center gap-[0.75rem] overflow-x-auto ">
          <button className="bg-[#13161E] flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]">
            <span>
              <Clock />
            </span>
            <span className="whitespace-nowrap">
              Tasks | {post.taskCount}/{post?.tasks?.length}
            </span>
          </button>
          <button className="bg-[#13161E] flex items-center gap-1 border-[1px] text-[#C556E1]/80 rounded-[26px] bg-[#C556E1]/5  border-[#C556E1]/20 px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] ">
            <span className="whitespace-nowrap flex">Earn | {post.points}</span>
          </button>
        </div>
      </div>
      <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.4rem] mx-[0.94rem]"></div>

      <div className="text-neutral-400 flex items-center gap-[1.25rem] px-[1rem]">
        <div className="flex items-center flex-col gap-[0.3rem]">
          <div>
            {true && (
              <img
                src={AppImage}
                width="100"
                height={"100"}
                className="w-[4rem] h-[3rem] object-cover rounded-[4px]"
              />
            )}
            {false && (
              <div className="w-[4rem] h-[3rem] rounded-[4px] bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46] uppercase font-Poppins font-[600]">
                {post.space_title.slice(0, 1)}
              </div>
            )}
          </div>

          <span className="text-[0.75rem] text-[#FFF] font-[400]">
            {post.space_title.length > 10
              ? post.space_title.slice(0, 10) + "..."
              : post.space_title}
          </span>
        </div>

        <div className="">
          <p className="text-[#E8E8E8]  font-Poppins font-[400] leading-[150%] ">
            {post.title.length > 35
              ? post.title.slice(0, 35) + "..."
              : post.title}
          </p>
        </div>
      </div>

      <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.4rem] mx-[0.94rem]"></div>

      <div className="my-[0.25rem] mx-[0.94rem] flex justify-between items-center">
        <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
          <span>
            <Group />
          </span>
          <span className="h-[1.1rem] w-[1px] bg-[#314048]"></span>
          <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
            {post.taskParticipantCount}
          </span>
        </div>
        <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
          <ExpiryDate expiryDate={post.endDate} />
        </span>
      </div>
    </Card>
  );
};

export default CampaignsCard;
