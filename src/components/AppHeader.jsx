import React from "react";
import { ReactComponent as Brick1 } from "../assets/svg/brick-line.svg";
import { ReactComponent as Brick2 } from "../assets/svg/brickline2.svg";
import { ReactComponent as Robot } from "../assets/svg/robot.svg";
import avatar from "../assets/svg/avatar.svg";
import avatar1 from "../assets/svg/avatar1.svg";
import avatar2 from "../assets/svg/avatar2.svg";

const AppHeader = () => {
  return (
    <div className="border-[0.5px] border-solid border-[#314048] rounded-[8px] bg-rgba-blue-alpha-04 backdrop-blur-9 md:m-5 relative z-10">
      <div className="flex items-center justify-between md:p-4 p-2 py-4 relative">
        <div className="flex items-start md:gap-5 gap-2 relative">
          <div className="absolute -left-4 -top-4">
            <Brick1 />
          </div>
          <Robot />
          <div>
            <h3 className="text-[#EBEDED] font-Bricolage_Grotesque font-normal text-[14px] md:text-[24px] md:leading-[32px]">
              Create & Schedule post using{" "}
              <span className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                AudaXious AI
              </span>
            </h3>
            <p className="font-Poppins text-[#A5A5A5] text-[12px] md:text-[15px] md:leading-[24px] font-light mt-2">
              Utilize the power of our AI to schedule and automate your
              <br className="hidden md:block" />
              posts OR simply post manually
            </p>
          </div>
        </div>

        <div className="border border-[#314048] hidden md:block z-20 relative rounded-[13px] p-4 mx-4 bg-[#18242B] shadow-customShadow">
          <div className="text-white absolute -left-7 z-10 -top-3">
            <img src={avatar1} alt="" />
          </div>
          <div className="flex items-center gap-4">
            <img src={avatar2} alt="" />
            <div>
              <p className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                Janet C
              </p>
              <p className="text-[#D3D3D3]">2.3k Likes</p>
            </div>
          </div>
          <div className="text-white absolute -right-7 -bottom-3">
            <img src={avatar} alt="" />
          </div>{" "}
        </div>
        <div className="absolute right-0 -bottom-0 z-10 hidden md:block">
          <Brick2 />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
