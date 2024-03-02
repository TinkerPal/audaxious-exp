import React from "react";
import { SPACES } from "../../utils/postApi";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../assets/svg/dashboardSvg/discords.svg";
import Query from "./Query";
import { NavLink } from "react-router-dom";

const AllSpaces = ({ onCreateSpace }) => {
  const createSpaceHandler = () => {
    onCreateSpace(true);
    console.log("AllSpace");
  };
  return (
    <div>
      <Query onCreateSpace={createSpaceHandler} />
      <div className="border-[#2A3C46] border-l border-opacity-[80%] py-[1.47rem] px-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2.5rem]">
          {SPACES &&
            SPACES.map((space) => (
              <NavLink to={`/dashboard/spaces/${space.id}`} key={space.id}>
                <div className="px-[1.5rem] pt-[0.75rem] min-w-[18rem] max-w-[28rem] pb-[1.25rem] border-[#2A3C46] border border-opacity-[80%] bg-ElipseBg bg-no-repeat bg-cover rounded-[16px] cursor-pointer">
                  <div className="flex flex-col gap-[0.75rem]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[0.5rem]">
                        <img
                          src={space.src}
                          alt={space.userName.slice(0, 7)}
                          width="100"
                          height={"100"}
                          className="w-[4rem] h-[4rem] object-cover rounded-full"
                        />
                        <span className="text-[1rem] text-[#FFF] font-[400]">
                          {space.userName}
                        </span>{" "}
                      </div>
                      <button className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                        Join
                      </button>
                    </div>
                    <div className="py-[0.62rem]">
                      <p className="font-Poppins text-[#A5A5A5] text-[0.75rem] font-[400] leading-[140%]">
                        {space.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-[0.3rem] px-[0.3rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                        <span>
                          <Group />
                        </span>
                        <span className="h-[1.5rem] w-[1px] bg-[#314048]"></span>
                        <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                          {space.engagement}k
                        </span>
                      </div>
                      <div className="flex gap-[0.3rem] items-center">
                        <span>
                          <World />
                        </span>
                        <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                        <span>
                          <Retweets />
                        </span>
                        <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                        <span>
                          <Discords />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllSpaces;
