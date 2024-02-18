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
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-[1.25rem] gap-x-[2rem] pt-[1rem] pl-[0rem]">
      {POST.map((post) => (
        <div
          onClick={() => props.onLoadTweet(post.id)}
          id={post.id}
          // id={props.id}
          key={post.id}
          className={clsx(
            "border-[#314048] cursor-pointer border-[0.5px] rounded-[20px] bg-no-repeat bg-cover",
            props.selectedPostId === post.id ? "bg-selectedBg" : "bg-heroCustom"
          )}
        >
          <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
            <div className="flex items-center gap-[0.75rem]">
              <button className="bg-[#152A39] flex items-center gap-1 border-[1px] border-[#5a8686] px-[9px] py-[6px] font-Poppins font-semibold text-[0.6rem] text-[#87cece] rounded-[26px]">
                <span>
                  <Clock />
                </span>
                <span className="whitespace-nowrap">
                  Tasks | {post.tasks}/10
                </span>
              </button>
              <button
                className={clsx(
                  "flex items-center gap-1 border-[1px] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-semibold text-[#C556E1] rounded-[26px]",
                  post.coin.eth
                    ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                    : "bg-[#2C2C2C] text-[#E1D356] border-[#708026]"
                )}
              >
                <span className="whitespace-nowrap flex">
                  engage <span className="hidden lg:block">to earn</span> |{" "}
                  {post.coin.eth
                    ? `${post.coin.eth} ETH`
                    : `${post.coin.bnb} BNB`}
                </span>
                <span>{post.coin.eth ? <Eth /> : <Bnb />}</span>
              </button>
            </div>
          </div>
          <div className="h-[1px] bg-[#2A3C46] my-[1rem]"></div>
          <div className="relative pb-[13px] px-[1rem]">
            <div className="text-neutral-400 flex flex-col gap-[13px]">
              <div className="flex items-center gap-3">
                <div>
                  <ProfilePicture />
                </div>

                <span>@{post.userName}</span>
                <span className="text-[#929192] font-[500] text-[0.67rem]">
                  {"Dec 13, 7:44 PM"}
                </span>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div className="w-[100%] flex flex-col gap-[1rem]">
                  <p className="text-[0.95rem] xl:text-[1rem]">
                    {post.tweet?.description.slice(0, 80)}
                  </p>
                </div>
                <div className="flex items-baseline">
                  <div className="flex justify-between gap-1">
                    <div className="flex gap-[0.4rem]">
                      <span>
                        <MessageIcon />
                      </span>
                      <span>{post.quote}</span>
                    </div>
                    <div className="flex gap-[0.4rem]">
                      <span>
                        <RetweenIcon />
                      </span>
                      <span>{post.repost}</span>
                    </div>
                    <div className="flex gap-[0.4rem]">
                      <span>
                        <Like />
                      </span>
                      <span>{post.like}</span>
                    </div>
                    <div className="">
                      <span>
                        <Friends />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twitter;
