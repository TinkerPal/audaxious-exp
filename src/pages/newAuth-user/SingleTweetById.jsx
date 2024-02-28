import React, { useEffect, useState } from "react";
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
import { ReactComponent as Next } from "../../assets/svg/dashboardSvg/next.svg";
import { ReactComponent as Previous } from "../../assets/svg/dashboardSvg/previous.svg";
import { ReactComponent as Actions } from "../../assets/svg/dashboardSvg/actions.svg";
import { ReactComponent as Check } from "../../assets/svg/dashboardSvg/check.svg";
import { POST, getTweetById } from "../../utils/postApi";

const SingleTweetById = ({ onCancel, tweetId, setSelectedPostId }) => {
  const tweet = getTweetById(tweetId);
  const [post, setPost] = useState(tweet);
  const [like, setLike] = useState(false);
  const [repost, setRepost] = useState(false);
  const [follow, setFollow] = useState(false);
  const [comment, setComment] = useState(false);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(1);

  const toggleTabHandler = (id) => {
    setToggle(id);
  };

  const handleNextTweet = () => {
    console.log("clidked");
    const currentIndex = POST.findIndex((item) => item.id === post.id);
    const nextIndex = (currentIndex + 1) % POST.length;
    const nextTweet = POST[nextIndex];
    setPost(nextTweet);
  };
  const handlePreviousTweet = () => {
    const currentIndex = POST.findIndex((item) => item.id === post.id);
    console.log("Current Index:", currentIndex);
    let nextIndex = (currentIndex - 1) % POST.length;
    console.log("Next Index (before correction):", nextIndex);
    if (nextIndex < 0) {
      nextIndex = POST.length - 1;
    }
    console.log("Next Index (after correction):", nextIndex);
    const nextTweet = POST[nextIndex];
    console.log("Next Tweet:", nextTweet);
    setPost(nextTweet);
  };

  return (
    <section className="bg-[#060B12] relative py-[5rem] rounded-md max-w-[1300px] px-[1rem]">
      <div className="text-neutral-300 top-[15px] absolute right-2">
        <span className="cursor-pointer" onClick={onCancel}>
          <Cancel />
        </span>
      </div>
      <div className="container">
        <header className="flex justify-between items-center">
          <div className="flex gap-[0rem]">
            {/* <span>
              <Cadabra style={{ height: "100px", width: "100px" }} />
            </span> */}
            <div className="flex flex-col">
              <span className="font-Poppins text-[1.45rem] normal-case font-[400] text-[#FFF]">
                Cadabra Finance
              </span>
              <span className="text-[#D3D3D3] font-[275] text-[0.8125rem] font-Poppins normal-case">
                @{post.userName}
              </span>
            </div>
          </div>
          <div>
            <button className="px-[1rem] py-[0.5rem] font-Poppins text-[1rem] text-[#060B12] font-[400] bg-[#79C4EC] rounded-sm">
              Join communityssss
            </button>
          </div>
        </header>
        <div className="relative">
          <div className="absolute top-[50%] left-[-42px] z-[100]">
            <span className="cursor-pointer" onClick={handlePreviousTweet}>
              <Previous />
            </span>
          </div>
          <div className="absolute top-[50%] right-[-42px]">
            <span className="cursor-pointer" onClick={handleNextTweet}>
              <Next />
            </span>
          </div>
          <main className="flex flex-wrap md:flex-nowrap gap-[0.5rem] lg:gap-[2rem] justify-center mt-[4rem] lg:mt-[2rem] xl:[4rem]">
            <div className="flex flex-col gap-[2rem] w-[100%] md:w-[20.5rem] lg:w-[25rem] xl:w-[30rem]">
              <div className="flex justify-between my-[0.5rem] border border-[#19242D] rounded-md text-[1rem] font-Poppins font-[300]">
                <span
                  onClick={() => toggleTabHandler(1)}
                  className={clsx(
                    "cursor-pointer py-[0.5rem] w-[100%]",
                    toggle === 1
                      ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                      : "text-[#D3D3D3] border-r border-[#19242D]"
                  )}
                >
                  Post
                </span>
                <span
                  onClick={() => toggleTabHandler(2)}
                  className={clsx(
                    "cursor-pointer py-[0.5rem] w-[100%]",
                    toggle === 2
                      ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                      : "text-[#D3D3D3] border-x border-[#19242D]"
                  )}
                >
                  About
                </span>
                <span
                  onClick={() => toggleTabHandler(3)}
                  className={clsx(
                    "cursor-pointer py-[0.5rem] w-[100%]",
                    toggle === 3
                      ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                      : "text-[#D3D3D3]"
                  )}
                >
                  Top earners
                </span>
              </div>
              <div className={clsx(toggle === 1 ? "block" : "hidden")}>
                <div
                  key={post.id}
                  className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover"
                >
                  <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
                    <div className="flex items-center gap-[0.75rem]">
                      <button className="bg-[#152A39] flex items-center gap-1 border-[1px] border-[#5a8686] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#87cece] rounded-[26px]">
                        <span>
                          <Clock />
                        </span>
                        <span className="whitespace-nowrap">
                          Tasks | {post.tasks}/10
                        </span>
                      </button>
                      <button
                        className={clsx(
                          "flex items-center gap-1 border-[1px] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px]",
                          post.coin.eth
                            ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                            : "bg-[#2C2C2C] text-[#E1D356] border-[#708026]"
                        )}
                      >
                        <span className="whitespace-nowrap">
                          Earn |{" "}
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
                          <p className="text-[0.95rem] text-[#E8E8E8] text-start">
                            {post.tweet?.description}
                          </p>
                          {post &&
                            post.tweet &&
                            post.tweet.images.length > 0 && (
                              <div className="flex gap-[20px]">
                                {post.tweet.images.map((image) => (
                                  <div key={image} className="">
                                    <img
                                      src={image}
                                      width={"400"}
                                      height={"400"}
                                      className="w-[100%] h-[7rem] lg:h-[5rem] xl:h-[12rem] object-cover rounded-[10px]"
                                      alt={post.userName}
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                        <div className="flex items-baseline mb-[1rem]">
                          <div className="flex gap-1">
                            <div className="flex">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={clsx(toggle === 2 ? "block" : "hidden")}>
                <div className="">
                  <p className="text-[#FFF]">About</p>
                </div>
              </div>
              <div className={clsx(toggle === 3 ? "block" : "hidden")}>
                <div className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover">
                  <div className="border-[#314048] border-b-[0.5px] py-[1rem]">
                    <p className="text-[#FFF] font-Poppins text-[1.4rem] font-normal">
                      Top Earners
                    </p>
                  </div>
                  <div className="py-[1rem] flex flex-col justify-center">
                    <div>
                      <div className="flex items-center gap-[0.9rem]">
                        <span className="text-[#FFF]">1</span>
                        <div className="w-[2.5rem] h-[2.5rem] bg-slate-100"></div>
                        <span className="text-[#FFF]">Anabel</span>
                      </div>
                      <div>
                        {/* <span
                              className={clsx(
                                "whitespace-nowrap text-[0.5rem] md:text-[0.8rem]",
                                earners.coin.eth
                                  ? "text-[#F04086]"
                                  : "text-[#E1D356]"
                              )}
                            >
                              {earners.coin.eth
                                ? `${earners.coin.eth} ETH`
                                : `${earners.coin.btc} BNB`}
                            </span>
                            <span>{earners.coin.eth ? <Eth /> : <Bnb />}</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[2rem] w-[100%] md:w-[19.5rem] lg:w-[25rem] xl:w-[30rem]">
              <div className="p-[0.5rem] flex justify-between items-center">
                <span className="whitespace-nowrap font-Poppins text-[1rem] lg:text-[1.25rem] normal-case font-[300] text-[#E8E8E8]">
                  To complete this task
                </span>
                <span className="font-Poppins text-[1.25rem] font-[300] text-[#E8E8E8]">
                  {count}/4
                </span>
              </div>
              <div className="border-[#314048] border-[0.5px] rounded-[20px] px-[0.8rem] py-[2rem] lg:py-[0.7rem] xl:py-[1.16rem]">
                <div className="flex flex-col gap-[1rem]">
                  <button
                    onClick={() => {
                      if (!like) {
                        setLike(true);
                        setCount((prev) => prev + 1);
                      }
                    }}
                    className="flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
                  >
                    <div className="flex items-center gap-4">
                      <span>
                        <Love />
                      </span>
                      <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1rem] xl:[1.25rem] normal-case text-[#E8E8E8]">
                        Like this post
                      </span>
                    </div>

                    {!like && (
                      <span>
                        <Actions />
                      </span>
                    )}
                    {like && (
                      <span>
                        <Check />
                      </span>
                    )}
                  </button>
                  <span>
                    <FlexLine />
                  </span>

                  <button
                    onClick={() => {
                      if (!repost) {
                        setRepost(true);
                        setCount((prev) => prev + 1);
                      }
                    }}
                    className="flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
                  >
                    <div className="flex items-center gap-4">
                      <span>
                        <Retweet />
                      </span>
                      <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1rem] xl:[1.25rem] normal-case text-[#E8E8E8]">
                        Re-tweet Post
                      </span>
                    </div>
                    {!repost && (
                      <span>
                        <Actions />
                      </span>
                    )}
                    {repost && (
                      <span>
                        <Check />
                      </span>
                    )}
                  </button>
                  <span>
                    <FlexLine />
                  </span>

                  <button
                    onClick={() => {
                      if (!follow) {
                        setFollow(true);
                        setCount((prev) => prev + 1);
                      }
                    }}
                    className="flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
                  >
                    <div className="flex items-center gap-4">
                      <span>
                        <Tweet />
                      </span>
                      <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1rem] xl:[1.25rem] normal-case text-[#E8E8E8]">
                        {"Follow account"}
                      </span>
                    </div>
                    {!follow && (
                      <span>
                        <Actions />
                      </span>
                    )}
                    {follow && (
                      <span>
                        <Check />
                      </span>
                    )}
                  </button>
                  <span>
                    <FlexLine />
                  </span>

                  <button
                    onClick={() => {
                      if (!comment) {
                        setComment(true);
                        setCount((prev) => prev + 1);
                      }
                    }}
                    className="flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
                  >
                    <div className="flex items-center gap-3">
                      <span>
                        <Infinity />
                      </span>
                      <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1rem] xl:[1.25rem] normal-case text-[#E8E8E8]">
                        {"Comment"}
                      </span>
                    </div>
                    {!comment && (
                      <span>
                        <Actions />
                      </span>
                    )}
                    {comment && (
                      <span>
                        <Check />
                      </span>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-[2rem] pb-[1rem]">
                  <span>
                    <Fam />
                  </span>
                  <button className="border-[1.5px] border-[#4C5656] bg-[#B6B9B9] px-[1rem] py-[0.5rem] rounded-md">
                    <span className="font-Poppins text-[#000] text-[1rem] font-normal text-center">
                      Redeem reward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
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
