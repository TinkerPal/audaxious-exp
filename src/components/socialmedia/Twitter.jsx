import { ReactComponent as ProfilePicture } from "../../assets/svg/dashboardSvg/profilePic.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/dashboardSvg/message.svg";
import { ReactComponent as RetweenIcon } from "../../assets/svg/dashboardSvg/retweet.svg";
import { ReactComponent as Like } from "../../assets/svg/dashboardSvg/like.svg";
import { ReactComponent as Friends } from "../../assets/svg/dashboardSvg/friendsPlus.svg";
import { ReactComponent as Clock } from "../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import clsx from "clsx";
import { POST } from "../../../src/utils/postApi";

const Twitter = (props) => {
  const loadTweetByIdHandler = (id) => {
    props.onLoadTweet(id);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[1.25rem] gap-x-[2rem] pt-[1rem] pl-[0rem]">
      {POST.map((post) => (
        <div
          onClick={() => loadTweetByIdHandler(post.id)}
          id={post.id}
          // id={props.id}
          key={post.id}
          className={clsx(
            "border-[1px] border-gray-700 border-opacity-50 cursor-pointer rounded-[16px]",
            props.selectedPostId === post.id
              ? "bg-selectedBg bg-no-repeat bg-cover"
              : "bg-[#080e16]"
          )}
        >
          <div className="flex justify-between px-[0.94rem] pt-[0.62rem]">
            <div className="flex items-center gap-[0.75rem] overflow-x-auto">
              <button className="bg-[#13161E] flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]">
                <span>
                  <Clock />
                </span>
                <span className="whitespace-nowrap">
                  Tasks | {post.tasks}/10
                </span>
              </button>
              <button
                className={clsx(
                  "flex items-center gap-1 border-[1px] border-opacity-[50%] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px]",
                  post.coin.eth
                    ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                    : "bg-[#EEEFA2] bg-opacity-[10%] text-[#E1D356] border-[#C0D925] border-opacity-[50%]"
                )}
              >
                <span className="whitespace-nowrap flex">
                  Earn |{" "}
                  {post.coin.eth
                    ? `${post.coin.eth} ETH`
                    : `${post.coin.bnb} BNB`}
                </span>
                <span>{post.coin.eth ? <Eth /> : <Bnb />}</span>
              </button>
              <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
                {"12 Days left"}
              </span>
            </div>
          </div>
          <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.62rem] mx-[0.94rem]"></div>

          <div className="text-neutral-400 flex gap-[1.25rem] px-[1rem]">
            <div className="flex items-center flex-col gap-[0.3rem]">
              <div>
                <img
                  src={post?.profilePicture}
                  width="100"
                  height={"100"}
                  className="w-[4rem] h-[3rem] object-cover rounded-[4px]"
                />
              </div>

              <span className="text-[0.75rem] text-[#FFF] font-[400]">
                {post.userName}
              </span>
            </div>

            <div className="flex flex-col gap-[0.3rem]">
              <p className="text-[#E8E8E8] uppercase font-Poppins font-[700] leading-[150%]">
                {post.title}
              </p>
              <p className="text-[0.75rem] xl:text-[0.75rem] text-[#E8E8E8] font-[300] leading-[150%]">
                {post.tweet?.description.slice(0, 80)}
              </p>
            </div>
          </div>

          <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.62rem] mx-[0.94rem]"></div>

          <div className="my-[0.62rem] mx-[0.94rem]">
            <p className="text-[#FFF] font-Poppins text-[0.75rem] normal font-normal">
              Participants:{" "}
              <span className="text-[#1FDF00] font-[600]">
                +{post.participants}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twitter;
