import React, { useEffect, useState } from "react";
import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/clock.svg";
import AppImage from "../../../assets/svg/SpaceDefault/apeImage.png";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import Card from "../../../components/socialmedia/Card";
import ExpiryDate from "./ExpiryDate";
import {
  Hashtag,
  People,
  UserAdd,
  Award,
  TickCircle,
  Verify,
  TaskSquare,
  MedalStar,
  Timer,
} from "iconsax-react";
import { getAllCompletedTask } from "../../../store/campaignActions";
import { useDispatch } from "react-redux";

const CampaignsCard = ({ post, campaignId }) => {
  const [completed, setCompleted] = useState([]);
  const dispatch = useDispatch();

  // console.log("post id", post.uuid);
  const checkCompletedTaskFunction = async () => {
    try {
      const result = await dispatch(getAllCompletedTask(campaignId));
      // setCheckCompletedTask(result.data);
      setCompleted(result.data);
    } catch (error) {
      // toast.error(error.response.data.error);
      console.log(error);
    }
  };
  useEffect(() => {
    if (campaignId) {
      checkCompletedTaskFunction();
    }
  }, [campaignId]);

  console.log("completed tasks", completed);

  return (
    <Card>
      <div className="flex justify-between px-[0.94rem] pt-[0.62rem] ">
        <div className="flex flex-row w-full items-center justify-between  ">
          <button className=" flex items-center gap-1  px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]">
            <span>
              <TaskSquare size="18" color="#36A616" />
            </span>
            <span className="h-[1.1rem] w-[1px] bg-[#314048]"></span>
            {completed?.length}/{post?.tasks?.length}
          </button>
          {/* <button className="bg-[#13161E] flex items-center gap-1 border-[1px] text-[#C556E1]/80 rounded-[26px] bg-[#C556E1]/5  border-[#C556E1]/20 px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] ">
            <span className="whitespace-nowrap flex">
              Earn | {post.points} xp
            </span>
          </button> */}

          <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] ">
            <span>
              <MedalStar size="20" color="#EEA307" />
            </span>
            <span className="h-[1.1rem] w-[1px] bg-[#314048]"></span>
            <span className="  text-[#79C4EC] font-Poppins font-[300] text-[0.8rem]">
              {post.points} xp
            </span>
          </div>
        </div>
      </div>
      <div className="h-[10px]  my-[0.4rem] mx-[0.94rem]"></div>

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

      <div className="h-[10px]  my-[0.4rem] mx-[0.94rem]"></div>

      <div className="my-[0.25rem] mx-[0.94rem] flex justify-between items-center">
        <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] ">
          <span>
            <People size="16" color="#E78370" />
          </span>
          <span className="h-[1.1rem] w-[1px] bg-[#314048]"></span>
          <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
            {post.taskParticipantCount}
          </span>
        </div>
        <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] ">
          <span>
            <Timer size="16" color="#A5D740" />
          </span>
          <span className="h-[1.1rem] w-[1px] bg-[#314048]"></span>
          <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
            <ExpiryDate expiryDate={post.endDate} />
          </span>
        </div>
        {/* <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
          <Timer size="32" color="#FF8A65" />
          <ExpiryDate expiryDate={post.endDate} />
        </span> */}
      </div>
    </Card>
  );
};

export default CampaignsCard;
