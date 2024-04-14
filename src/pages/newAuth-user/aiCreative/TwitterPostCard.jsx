import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/clock.svg";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Postdropdown from "./Postdropdown";
const TwitterPostCard = ({ post }) => {
  const tweetername = useSelector((state) => state.authentication.verifyTweet);
  return (
    <div
      className="w-[100%] md:w-[35rem] lg:w-[43rem] border-[2px] border-[#07111c] py-[1.2rem] rounded-md"
      //   key={index}
    >
      <div className="flex justify-between items-center px-[0.7rem]">
        <div className="flex gap-2">
          {" "}
          <button
            type="button"
            className="bg-[#13161E] flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]"
          >
            <span>
              <Clock />
            </span>
            <span className="whitespace-nowrap">
              Tasks | {`${post.task}`}/{`${10}`}
            </span>
          </button>
          <button
            type="button"
            className={clsx(
              "flex items-center gap-1 border-[1px] border-opacity-[50%] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px] bg-[#C556E1]/5  border-[#C556E1]/25"
            )}
          >
            <span className="whitespace-nowrap flex">
              Earn | {post.point} Point
            </span>
          </button>
        </div>
        <Postdropdown />
      </div>
      <div className="border border-b-[1px] border-[#07111c] my-[1.25rem]"></div>
      <div className="flex gap-3 px-[0.7rem] items-start">
        <div className="w-[2rem] h-[2rem] md:w-[80px] md:h-[40px] px-[0.4rem] py-[0.4rem] bg-[#EBBEF3] rounded-full flex items-center justify-center">
          <p className="text-[1.25rem] font-Poppins font-[600] text-neutral-950">
            {tweetername ? tweetername.slice(0, 1) : ""}
          </p>
        </div>
        <div className="flex flex-col gap-[1.4rem]">
          <div className="flex items-baseline gap-2">
            <p
              className=" font-Poppins text-[1.125rem] font-normal whitespace-nowrap text-[#E8E8E8]"
              style={{ wordBreak: "break-all" }}
            >
              @{tweetername ? tweetername : "username"}
            </p>
            <p className=" font-Poppins text-[0.875rem] font-[300] whitespace-nowrap text-[#929192]">
              {"Dec 13, 7:48 PM"}
            </p>
          </div>
          <div className="text-[#FFF]" style={{ wordBreak: "break-all" }}>
            <p
              className=" font-Poppins text-[#E8E8E8] font-[275]"
              style={{ wordBreak: "break-all" }}
            >
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPostCard;
