import React from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../Homes/Loading";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import {
  Hashtag,
  People,
  UserAdd,
  Award,
  TickCircle,
  Verify,
} from "iconsax-react";
import apeImage from "../../../assets/svg/SpaceDefault/apeImage.png";
import { useSelector } from "react-redux";

//display can either be owner or member
const SpaceCard = ({ space, selectedId, joinSpaceHandler }) => {
  const userId = useSelector((state) => state.authentication.userId);
  const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
  const memberState = useSelector((state) => state.space.isMember);

  const joinedSpaceIds = joinedSpacesArray.map((space) => space.space_uuid);

  const {
    creator_uuid,
    title,
    uuid,
    src,
    description,
    spaceMembersCount,
    iconUrl,
    tags,
    campaignsCount,
    isVerified,
  } = space;

  // console.log("list of spaces", space);

  let isMember = joinedSpaceIds.includes(uuid) || memberState;
  let showJoinButton = false;
  if (userId === creator_uuid) {
    showJoinButton = true;
  }
  return (
    <NavLink to={`/spaces/${title}`} key={uuid}>
      {/* min-w-[18rem]  max-w-[28rem] border-[1px] border-[#07111c] bg-[#060e16] hover:border-white/70  2xl:min-w-[22rem] border-opacity-50 cursor-pointer  rounded-[16px] */}

      <div className="flex flex-col h-full justify-between border-white/20 border-[#07111c] bg-[#060e16] hover:border-white/70 px-[0.5rem] md:px-[1.5rem] pt-[0.75rem] min-w-[18rem] max-w-[28rem] pb-[0.75rem]  hover:border-[#14435c]  border border-opacity-[80%]  rounded-[16px] cursor-pointer ">
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center gap-[0.5rem]">
              {!src && (
                <div className="w-[3rem] h-[3rem] rounded-full bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46]">
                  {title.slice(0, 1)}
                </div>
              )}
              {src && (
                <img
                  src={apeImage}
                  alt={title.slice(0, 7)}
                  width="100"
                  height={"100"}
                  className="w-[4rem] h-[4rem] object-cover rounded-full"
                />
              )}
              <span className="text-[1rem] text-[#FFF] font-[400]">
                {title}
              </span>{" "}
            </div> */}

            <div className="flex items-center gap-[0.5rem]">
              {!iconUrl && (
                <div className="w-[3rem] h-[3rem] rounded-full bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46]">
                  {title.slice(0, 1)}
                </div>
              )}
              {true && (
                <div className="relative">
                  <img
                    src={iconUrl}
                    alt={title.slice(0, 7)}
                    width="100"
                    height="100"
                    className="w-[3rem] h-[3rem] object-cover rounded-full"
                  />
                  {isVerified && (
                    <div className="  flex justify-center items-center bg-[#060E16] h-[24px] w-[24px] rounded-full absolute -bottom-[6px] -right-[6px]">
                      {" "}
                      <Verify
                        size={24}
                        color="#1089FF"
                        variant="Bold"
                        className=""
                      />
                    </div>
                  )}
                </div>
              )}
              <span className="text-[1rem] text-[#FFF] font-[400]">
                {title?.length > 10 ? title.slice(0, 10) + "..." : title}
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
                  // <button
                  //   type="button"
                  //   onClick={(e) => {
                  //     e.preventDefault();
                  //     if (e.target.tagName.toLowerCase() !== "button") {
                  //       e.stopPropagation();
                  //     }
                  //     joinSpaceHandler(uuid);
                  //     // console.log("E WORK", uuid);
                  //   }}
                  //   className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
                  // >
                  //   Join
                  // </button>
                  <button
                    className="p-2 border rounded-full border-[#EEA307]/20 bg-[#EEA307]/5"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (e.target.tagName.toLowerCase() !== "button") {
                        e.stopPropagation();
                      }
                      joinSpaceHandler(uuid);
                    }}
                  >
                    <UserAdd size="20" color="#EEA307" />
                  </button>
                )}
                {isMember && (
                  <div className="p-2 border rounded-full border-[#36A616]/20 bg-[#36A616]/5">
                    <TickCircle size="20" color="#36A616" />
                  </div>
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
          <div className="h-[2px]  my-[0.4rem] mx-[0.94rem] "></div>
          <div className="py-[0.62rem]">
            {campaignsCount > 0 ? (
              <div className=" flex px-4  py-1 gap-8  items-center  rounded-l-full rounded-br-full  bg-[#641da1] text-[#cbc9c5] font-mono">
                <Award size="32" color="#EEA307" variant="Bold" />
                {campaignsCount} Active Campaigns
              </div>
            ) : (
              <p className="font-Poppins text-[#A5A5A5] text-[0.75rem] font-[400] leading-[140%]">
                {description.length > 50
                  ? description.slice(0, 50) + " ..."
                  : description}
              </p>
            )}
          </div>
          <div className="h-[2px]  my-[0.4rem] mx-[0.94rem]"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center  gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem]  ">
              <span>
                <People size="16" color="#E78370" />
              </span>
              <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
              <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                {spaceMembersCount || 0}
              </span>
            </div>
            <div className="flex gap-[0.3rem] items-center">
              <span>
                <Hashtag size="16" color="#A5D740" />{" "}
              </span>
              <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
              <div className="gap-[6px] flex">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[0.65rem] font-Poppins font-normal text-[#79C4EC]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default SpaceCard;
