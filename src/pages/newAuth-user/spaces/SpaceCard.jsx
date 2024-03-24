import React from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../Homes/Loading";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import { useSelector } from "react-redux";

//display can either be owner or member
const SpaceCard = ({ space, selectedId, joinSpaceHandler }) => {
  const userId = useSelector((state) => state.authentication.userId);
  const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
  const memberState = useSelector((state) => state.space.isMember);

  // console.log("USERID", userId);
  // console.log("CREATORID", space.creator_uuid);
  // console.log(joinedSpacesArray);

  const joinedSpaceIds = joinedSpacesArray.map((space) => space.space_uuid);

  // console.log("JOINEDSPACEID", joinedSpaceIds);

  const { creator_uuid, title, uuid, src, description, engagement } = space;
  // console.log("UUID", uuid);

  let isMember = joinedSpaceIds.includes(uuid) || memberState;
  let showJoinButton = false;
  if (userId === creator_uuid) {
    showJoinButton = true;
  }
  return (
    <NavLink to={`/spaces/${title}`} key={uuid}>
      <div className="px-[0.5rem] md:px-[1.5rem] pt-[0.75rem] min-w-[18rem] max-w-[28rem] pb-[0.75rem] border-[#2A3C46] border border-opacity-[80%] bg-ElipseBg bg-no-repeat bg-cover rounded-[16px] cursor-pointer">
        <div className="flex flex-col gap-[0.75rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[0.5rem]">
              {!src && (
                <div className="w-[3rem] h-[3rem] rounded-full bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46]">
                  {title.slice(0, 1)}
                </div>
              )}
              {src && (
                <img
                  src={src}
                  alt={title.slice(0, 7)}
                  width="100"
                  height={"100"}
                  className="w-[4rem] h-[4rem] object-cover rounded-full"
                />
              )}
              <span className="text-[1rem] text-[#FFF] font-[400]">
                {title}
              </span>{" "}
            </div>
            {!showJoinButton && (
              <div>
                {selectedId === uuid && (
                  <div key={uuid} className="">
                    <Loading />
                  </div>
                )}
                {selectedId !== uuid && !isMember && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (e.target.tagName.toLowerCase() !== "button") {
                        e.stopPropagation();
                      }
                      joinSpaceHandler(uuid);
                      // console.log("E WORK", uuid);
                    }}
                    className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
                  >
                    Join
                  </button>
                )}
                {isMember && (
                  <span className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                    Member
                  </span>
                )}
              </div>
            )}
            {showJoinButton && (
              <span className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                Owner
              </span>
            )}
            {/* {display === "member" && (
              <span className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                Member
              </span>
            )} */}
          </div>
          <div className="py-[0.62rem]">
            <p className="font-Poppins text-[#A5A5A5] text-[0.75rem] font-[400] leading-[140%]">
              {description.length > 35
                ? description.slice(0, 35) + " ..."
                : description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
              <span>
                <Group />
              </span>
              <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
              <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                {engagement || 0}
              </span>
            </div>
            <div className="flex gap-[0.3rem] items-center">
              <span>
                <World />
              </span>
              <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
              <span>
                <Retweets />
              </span>
              <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
              <span className="">
                <Discords />
              </span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SpaceCard;
