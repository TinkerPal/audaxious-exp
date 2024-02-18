import React from "react";
import { ReactComponent as Cadabra } from "../../assets/svg/dashboardSvg/binance.svg";
import clsx from "clsx";

import { ReactComponent as ProfilePicture } from "../../assets/svg/dashboardSvg/profilePic.svg";
import { ReactComponent as MessageIcon } from "../../assets/svg/dashboardSvg/message.svg";
import { ReactComponent as RetweenIcon } from "../../assets/svg/dashboardSvg/retweet.svg";
import { ReactComponent as Like } from "../../assets/svg/dashboardSvg/like.svg";
import { ReactComponent as Friends } from "../../assets/svg/dashboardSvg/friendsPlus.svg";
import { ReactComponent as Clock } from "../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Tweet } from "../../assets/svg/dashboardSvg/tweeter.svg";
import { ReactComponent as Infinity } from "../../assets/svg/dashboardSvg/infinity.svg";
import { ReactComponent as Retweet } from "../../assets/svg/dashboardSvg/secondRetweet.svg";
import { ReactComponent as Love } from "../../assets/svg/dashboardSvg/love.svg";
import { ReactComponent as Setting } from "../../assets/svg/dashboardSvg/setting.svg";
import { ReactComponent as Bird } from "../../assets/svg/dashboardSvg/bird.svg";
import { ReactComponent as Btw } from "../../assets/svg/dashboardSvg/btw.svg";
import { ReactComponent as Fam } from "../../assets/svg/dashboardSvg/famnfrd.svg";
import { ReactComponent as FlexLine } from "../../assets/svg/dashboardSvg/flexLine.svg";
import { ReactComponent as Cancel } from "../../assets/svg/dashboardSvg/cancel.svg";
import { POST, getTweetById } from "../../utils/postApi";

const SingleTweetById = ({ onCancel, tweetId }) => {
  const post = getTweetById(tweetId);
  // console.log(tweet);
  return (
    <section className="bg-[#060B12] relative">
      <div className="text-neutral-300 top-[-40px] absolute right-0">
        <span className="" onClick={onCancel}>
          <Cancel />
        </span>
      </div>
      <div className="container">
        {/* <header className="flex justify-between items-center">
          <div className="flex gap-[2rem]">
            <span>
              <Cadabra style={{ height: "60px", width: "60px" }} />
            </span>
            <div className="flex flex-col">
              <span className="font-Poppins text-[1.45rem] normal-case font-[400] text-[#FFF]">
                Cadabra Finance
              </span>
              <span className="text-[#D3D3D3] font-[275] text-[0.8125rem] font-Poppins normal-case">
                @Theblckchain_experts
              </span>
            </div>
          </div>
          <div>
            <button className="px-[1rem] py-[0.5rem] font-Poppins text-[1rem] text-[#060B12] font-[400] bg-[#79C4EC] rounded-sm">
              Join community
            </button>
          </div>
        </header> */}
        <main className="flex gap-[2rem] justify-center mt-[4rem]">
          <div className="flex flex-col gap-[2rem] w-[100%] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]">
            <div className="flex gap-3 px-[0.8rem] lg:px-[1rem] xl:px-[2.81rem] py-[0.5rem] border border-[#19242D] rounded-md">
              <span className="pr-[0.1rem] lg:pr-[0.5rem] xl:pr-[2rem]">
                <button className="rounded-sm bg-[#EBEDED] lg:px-[0rem] xl:px-[1rem] py-[0.5rem] font-Poppins text-[0.8rem] font-[300] text-[#060B12] w-[4rem] lg:w-[8rem]">
                  Post
                </button>
              </span>
              <span className="font-Poppins text-[0.8rem] normal-case font-[400] text-[#79C4EC] py-[0.5rem] px-[1rem] lg:px-[1rem] xl:px-[3rem] border-x border-[#19242D]">
                About
              </span>
              <span className="whitespace-nowrap font-Poppins text-[0.8rem] normal-case font-[400] text-[#79C4EC] py-[0.5rem] px-[0.3rem] lg:px-[1rem]">
                Top earners
              </span>
            </div>
            <div>
              <div
                key={post.id}
                className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover"
              >
                <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
                  <div className="flex items-center gap-[0.75rem]">
                    <button className="bg-[#152A39] flex items-center gap-1 border-[1px] border-[#5a8686] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#87cece] rounded-[26px]">
                      <span>
                        <Clock />
                      </span>
                      <span className="whitespace-nowrap">
                        Tasks | {post.tasks}/10
                      </span>
                    </button>
                    <button
                      className={clsx(
                        "flex items-center gap-1 border-[1px] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#C556E1] rounded-[26px]",
                        post.coin.eth
                          ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                          : "bg-[#2C2C2C] text-[#E1D356] border-[#708026]"
                      )}
                    >
                      <span className="whitespace-nowrap">
                        engage to earn |{" "}
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
                        <p className="text-[0.95rem]">
                          {post.tweet?.description}
                        </p>
                        {post && post.tweet && post.tweet.images.length > 0 && (
                          <div className="flex gap-[20px]">
                            {post.tweet.images.map((image) => (
                              <div key={image} className="">
                                <img
                                  src={image}
                                  width={"400"}
                                  height={"400"}
                                  className="w-[100%] h-[13rem] object-cover rounded-[10px]"
                                  alt={post.userName}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-baseline mb-[1rem]">
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
                          {/* <div className="">
                            <span>
                              <Friends />
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>

          {/* second div */}

          <div className="flex flex-col gap-[2rem] w-[100%] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]">
            <div className="p-[0.5rem]">
              <span className="whitespace-nowrap font-Poppins text-[1.3rem] lg:text-[1.75rem] normal-case font-[300] text-[#E8E8E8]">
                To complete this task
              </span>
            </div>
            <div className="border-[#314048] border-[0.5px] rounded-[20px] px-[1.25rem] py-[2.8rem]">
              <div className="flex flex-col gap-5 border-[#314048] border-b-[0.5px] pb-[1.5rem]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <span>
                      <Love />
                    </span>
                    <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1.25rem] normal-case text-[#E8E8E8]">
                      Like this post
                    </span>
                  </div>

                  <div className="px-[1rem] py-[0.5rem] font-Poppins font-normal text-[1rem] border-[0.2px] border-[#8F989D] rounded-[4px] text-[#E8E8E8] w-[8rem] text-center">
                    Like
                  </div>
                </div>
                <span>
                  <FlexLine />
                </span>
                {/* second */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <span>
                      <Retweet />
                    </span>
                    <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1.25rem] normal-case text-[#E8E8E8]">
                      Re-tweet Post
                    </span>
                  </div>
                  <div className="px-[1rem] py-[0.5rem] font-Poppins font-normal text-[1rem] border-[0.2px] border-[#8F989D] rounded-[4px] text-[#E8E8E8] w-[8rem] text-center">
                    Re-tweet
                  </div>
                </div>
                <span>
                  <FlexLine />
                </span>
                {/* third */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <span>
                      <Tweet />
                    </span>
                    <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1.25rem] normal-case text-[#E8E8E8]">
                      {post.userName}
                    </span>
                  </div>
                  <div className="px-[1rem] py-[0.5rem] font-Poppins font-normal text-[1rem] border-[0.2px] border-[#8F989D] rounded-[4px] text-[#E8E8E8] w-[8rem] text-center">
                    Follow
                  </div>
                </div>
                <span>
                  <FlexLine />
                </span>
                {/* fourth */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <span>
                      <Infinity />
                    </span>
                    <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1.25rem] normal-case text-[#E8E8E8]">
                      {post.userName}
                    </span>
                  </div>
                  <div className="px-[1rem] py-[0.5rem] font-Poppins font-normal text-[1rem] border-[0.2px] border-[#8F989D] rounded-[4px] text-[#E8E8E8] w-[8rem] text-center">
                    Follow
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-[2.8rem] lg:pt-[1.5rem]">
                <div className="flex items-center gap-0 lg:gap-3">
                  <span>
                    <Setting />
                  </span>
                  <span>
                    <Btw />
                  </span>
                  <span>
                    <Bird />
                  </span>
                </div>
                <div>
                  <span>
                    <Fam />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* second section */}
      {/* <div className="container flex mt-[5rem] mb-[1.5rem] items-center justify-between">
        <span>
          <Cadabra style={{ height: "40px", width: "40px" }} />
        </span>
        <p className="whitespace-nowrap font-Poppins text-[0.7rem] lg:text-[1.25rem] normal-case font-[300] text-[#A5A5A5]">
          See more posts from Theblockchain_experts
        </p>
        <div className="w-[40%] h-[1px] bg-neutral-600"></div>
        <span className="whitespace-nowrap text-[#79C4EC] font-Poppins text-[1.25rem] cursor-pointer">
          View profile
        </span>
      </div> */}
      {/* MORE ABOUT USER POST */}
      {/* <div className="container">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-[1.25rem] gap-x-[2rem] pt-[1rem] pl-[0rem]">
          {POST.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover"
            >
              <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
                <div className="flex items-center gap-[0.75rem]">
                  <button className="bg-[#152A39] flex items-center gap-1 border-[1px] border-[#5a8686] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#87cece] rounded-[26px]">
                    <span>
                      <Clock />
                    </span>
                    <span>Tasks | {post.tasks}/10</span>
                  </button>
                  <button
                    className={clsx(
                      "flex items-center gap-1 border-[1px] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#C556E1] rounded-[26px]",
                      post.coin.eth
                        ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                        : "bg-[#2C2C2C] text-[#E1D356] border-[#708026]"
                    )}
                  >
                    <span>
                      engage to earn |{" "}
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
                      <p className="text-[0.95rem]">
                        {post.tweet?.description}
                      </p>
                      {post && post.tweet && post.tweet.images.length > 0 && (
                        <div className="flex gap-[8px] mb-[30px]">
                          {post.tweet.images.map((image) => (
                            <div
                              key={image}
                              className="h-[4rem] w-[10rem] bg-white rounded-[8px] object-cover"
                            >
                              <img
                                src={image}
                                width={"400"}
                                height={"400"}
                                alt=""
                              />
                            </div>
                          ))}
                        </div>
                      )}
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
      </div> */}
      {/* <div className="w-100% h-[1px] bg-[#2A3C46] my-[3.25rem]"></div> */}

      {/* <article className="mb-[5rem] container">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-[1.25rem] gap-x-[2rem] pt-[1rem] pl-[0rem]">
          {POST.map((post) => (
            <div
              key={post.id}
              className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover"
            >
              <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
                <div className="flex items-center gap-[0.75rem]">
                  <button className="bg-[#152A39] flex items-center gap-1 border-[1px] border-[#5a8686] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#87cece] rounded-[26px]">
                    <span>
                      <Clock />
                    </span>
                    <span>Tasks | {post.tasks}/10</span>
                  </button>
                  <button
                    className={clsx(
                      "flex items-center gap-1 border-[1px] px-[9px] py-[6px] font-Poppins text-[0.6rem] font-[300] text-[#C556E1] rounded-[26px]",
                      post.coin.eth
                        ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                        : "bg-[#2C2C2C] text-[#E1D356] border-[#708026]"
                    )}
                  >
                    <span>
                      engage to earn |{" "}
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
                      <p className="text-[0.95rem]">
                        {post.tweet?.description}
                      </p>
                      {post && post.tweet && post.tweet.images.length > 0 && (
                        <div className="flex gap-[8px] mb-[30px]">
                          {post.tweet.images.map((image) => (
                            <div key={image} className="rounded-[8px]">
                              <img
                                src={image}
                                width={"400"}
                                height={"400"}
                                className="w-[100%] h-[8rem] object-cover rounded-[8px]"
                                alt=""
                              />
                            </div>
                          ))}
                        </div>
                      )}
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
      </article> */}
    </section>
  );
};

export default SingleTweetById;
