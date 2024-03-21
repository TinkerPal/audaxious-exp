import { ReactComponent as Clock } from "../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";

import clsx from "clsx";
import { POST } from "../../../src/utils/postApi";
import { NavLink } from "react-router-dom";

const Twitter = () => {
  // const loadTweetByIdHandler = (id) => {
  //   props.onLoadTweet(id);
  // };
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4  gap-x-4 2xl:gap-x-[2.4rem] gap-y-[2.5rem]  pt-[1rem] pl-[0rem] ">
          {POST.map((post) => (
            <NavLink key={post.id} to={`/engage-portal/${post.id}`}>
              <div
                // onClick={() => loadTweetByIdHandler(post.id)}
                id={post.id}
                // id={props.id}
                className={clsx(
                  "min-w-[18rem]  max-w-[28rem] border-[1px] border-[#2A3C46] 2xl:min-w-[22rem] border-opacity-50 cursor-pointer bg-ElipseBg rounded-[16px] "
                  // post.id
                  //   ? "bg-selectedBg bg-no-repeat bg-cover"
                  //   : "bg-[#080e16]"
                )}
              >
                <div className="flex justify-between px-[0.94rem] pt-[0.62rem] ">
                  <div className="flex items-center gap-[0.75rem] overflow-x-auto ">
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
                          ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]/30"
                          : "bg-[#EEEFA2] bg-opacity-[10%] text-[#E1D356] border-[#C0D925]/30 border-opacity-[50%]"
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
                    {/* <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
                {"12 Days left"}
              </span> */}
                  </div>
                </div>
                <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.25rem] mx-[0.94rem]"></div>

                <div className="text-neutral-400 flex items-center gap-[1.25rem] px-[1rem]">
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
                    <p className="text-[#E8E8E8]  font-Poppins font-[400] leading-[150%] ">
                      {post.title.slice(0, 35)}
                    </p>
                    {/* <p className="text-[0.75rem] 2xl:text-[1rem] text-[#A5A5A5] font-[300] leading-[150%]">
                      {post.tweet?.description.slice(0, 50) + "..."}
                    </p> */}
                  </div>
                </div>

                <div className="h-[2px] bg-gray-800 bg-opacity-50 my-[0.25rem] mx-[0.94rem]"></div>

                <div className="my-[0.25rem] mx-[0.94rem] flex justify-between items-center">
                  <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                    <span>
                      <Group />
                    </span>
                    <span className="h-[1.1rem] w-[1px] bg-[#314048]"></span>
                    <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                      {post.participants}
                    </span>
                  </div>
                  <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
                    {"12 Days left"}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Twitter;
