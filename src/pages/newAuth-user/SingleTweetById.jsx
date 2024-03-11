import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { ReactComponent as ProfilePicture } from "../../assets/svg/dashboardSvg/profilePic.svg";
import { ReactComponent as Clock } from "../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Tweet } from "../../assets/svg/dashboardSvg/tweeter.svg";
import { ReactComponent as Infinity } from "../../assets/svg/dashboardSvg/infinity.svg";
import { ReactComponent as Retweet } from "../../assets/svg/dashboardSvg/secondRetweet.svg";
import { ReactComponent as Love } from "../../assets/svg/dashboardSvg/love.svg";
import { ReactComponent as FlexLine } from "../../assets/svg/dashboardSvg/flexLine.svg";
import { ReactComponent as Cancel } from "../../assets/svg/dashboardSvg/cancel.svg";
import { ReactComponent as Next } from "../../assets/svg/dashboardSvg/next.svg";
import { ReactComponent as Previous } from "../../assets/svg/dashboardSvg/previous.svg";
import { ReactComponent as Actions } from "../../assets/svg/dashboardSvg/actions.svg";
import { ReactComponent as Check } from "../../assets/svg/dashboardSvg/check.svg";
import { ReactComponent as Group } from "../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../assets/svg/dashboardSvg/discords.svg";
import { ReactComponent as TwitterVerification } from "../../assets/svg/dashboardSvg/twitterVerification.svg";
import { POST, getTweetById } from "../../utils/postApi";
import { TOPEARNERS } from "../../utils/postApi";
import {
  CommentIntent,
  FollowIntent,
  LikeIntent,
  RepostIntent,
} from "./TweeterIntent";
import { getToken } from "../../utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/socialmedia/Modal";
import { Dialog } from "@headlessui/react";
import VerifyTweeterModal from "../../components/socialmedia/VerifyTweetModal";

const SingleTweetById = ({ onCancel, tweetId, setSelectedPostId }) => {
  const checkTweetId = useParams();
  const tweet = getTweetById(checkTweetId.postId);
  const [post, setPost] = useState(tweet);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(1);
  const [open, setOpen] = useState(false);
  const [openIntent, setOpenIntent] = useState(true);

  // const loadTweetByIdHandler = (id) => {
  //   props.onLoadTweet(id);
  // };
  // console.log(navigation(".."));
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isLogedIn);
  const verifyTweeter = useSelector((state) => state.verifyTweet);
  const joinSpaceHandler = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    dispatch(authAction.loggin());
  };

  const toggleTabHandler = (id) => {
    setToggle(id);
  };

  const handleLike = () => {
    console.log("BEGINING", open);
    console.log("clicked");
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      setOpen(true);
      console.log("SCOPE", open);
      document.activeElement.blur();

      return;
    }
    if (!post.like) {
      LikeIntent("1763151012615925766");
      const updatedPost = { ...post, like: true };
      setPost(updatedPost);
      // setCount((prev) => prev + 1);
    }
  };
  const handleRetweet = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      document.activeElement.blur();
      setOpen(true);
      return;
    }
    if (!post.repost) {
      RepostIntent("1763151012615925766");
      const updatedPost = { ...post, repost: true };
      setPost(updatedPost);
      // setCount((prev) => prev + 1);
    }
  };
  const handleFollow = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      document.activeElement.blur();
      setOpen(true);
      return;
    }
    if (!post.follow) {
      FollowIntent("AudaXious3");
      const updatedPost = { ...post, follow: true };
      setPost(updatedPost);
      // setCount((prev) => prev + 1);
    }
  };
  const handleComment = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      document.activeElement.blur();
      setOpen(true);
      return;
    }
    if (!post.comment) {
      CommentIntent(
        "1763151012615925766",
        "AUDIAXIOUS CHANGING THE WORLD FOR GOOD"
      );
      const updatedPost = { ...post, comment: true };
      setPost(updatedPost);
      // setCount((prev) => prev + 1);
    }
  };

  const handleNextTweet = () => {
    const currentIndex = POST.findIndex((item) => item.id === post.id);
    const nextIndex = (currentIndex + 1) % POST.length;
    const nextTweet = POST[nextIndex];
    setPost(nextTweet);
  };
  const handlePreviousTweet = () => {
    const currentIndex = POST.findIndex((item) => item.id === post.id);
    let nextIndex = (currentIndex - 1) % POST.length;
    if (nextIndex < 0) {
      nextIndex = POST.length - 1;
    }
    const nextTweet = POST[nextIndex];
    setPost(nextTweet);
  };
  const navigate = useNavigate();
  const closeIntentModalHandler = () => {
    navigate(-1);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <VerifyTweeterModal onClose={closeModalHandler} open={open}>
        <section className="bg-[#060B12] py-[2.5rem] rounded-md max-w-[1300px] px-[1rem]">
          <div className="container">
            <h2 className="text-[#FDF2F8] font-Poppins font-normal text-[1.25rem] md:[2rem]">
              AudaXious Engage
            </h2>
            <div className="flex flex-col items-center gap-[1rem] md:gap-[1.6rem] mt-[3rem]">
              <span>
                <TwitterVerification />
              </span>
              <div>
                <h2 className="text-[#FDF2F8] font-Poppins font-[900] text-[1.25rem] md:text-[2rem]">
                  Twitter Verification
                </h2>
                <div className="mt-[0.5rem]">
                  <p className="text-[#EBEDED] text-center text-[0.875rem] md:text-[1.2rem] font-Poppins leading-[140%] font-[300]">
                    In order to continue, you need to verify your twitter
                    account
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1.5rem] md:gap-[2.3rem] mt-[2.3rem]">
              <div className="flex items-center justify-between">
                <span className="bg-[#8AADC2] w-[100%] h-[1px]"></span>
                <span className="text-[#fff] px-[1.5rem]">1</span>
                <span className="bg-[#8AADC2] w-[100%] h-[1px]"></span>
              </div>
              <div className="flex items-center justify-center">
                <button
                  // type="submit"
                  className="bg-[#E8E8E8] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 w-[100%] md:w-[17rem]"
                >
                  <span className="text-[#060B12] font-Poppins font-[600]">
                    Tweet authentication post
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-[#8AADC2] w-[100%] h-[1px]"></span>
                <span className="text-[#fff] px-[1.5rem]">2</span>
                <span className="bg-[#8AADC2] w-[100%] h-[1px]"></span>
              </div>
              <form>
                <input
                  required
                  type="text"
                  // value={website}
                  // onChange={websiteOnchange}
                  // onBlur={websiteOnBlur}
                  name="website"
                  id="website"
                  placeholder="Copy and paste the link to the tweet"
                  className="text-[#FFF] font-Poppins font-[500] bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] md:py-[1rem] text-[0.75rem]"
                />
                <div className="flex items-center justify-center mt-[1.6rem]">
                  <button
                    type="submit"
                    className="bg-[#E8E8E8] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 w-[100%] md:w-[17rem]"
                  >
                    <span className="text-[#060B12] font-Poppins font-[600]">
                      Verify Twitter Acount
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </VerifyTweeterModal>

      <Modal onClose={closeIntentModalHandler} open={openIntent}>
        <section className="bg-[#060B12] relative py-[5rem] rounded-md max-w-[1300px] px-[1rem]">
          <div className="text-neutral-300 top-[15px] absolute right-2">
            <span className="cursor-pointer" onClick={closeIntentModalHandler}>
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
                {!isAuthenticated && (
                  <button
                    onClick={joinSpaceHandler}
                    className="px-[1rem] py-[0.5rem] font-Poppins text-[1rem] text-[#060B12] font-[400] bg-[#79C4EC] rounded-sm"
                  >
                    Join space
                  </button>
                )}
                {isAuthenticated && (
                  <button
                    // onClick={joinSpaceHandler}
                    className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                  >
                    Joined
                  </button>
                )}
              </div>
            </header>
            <div className="relative">
              <div className="absolute top-[50%] left-[-42px] z-[100] hidden md:block">
                <span className="cursor-pointer" onClick={handlePreviousTweet}>
                  <Previous />
                </span>
              </div>
              <div className="absolute top-[50%] right-[-42px] hidden md:block">
                <span className="cursor-pointer" onClick={handleNextTweet}>
                  <Next />
                </span>
              </div>
              <main className="flex flex-wrap md:flex-nowrap gap-[0.5rem] lg:gap-[2rem] justify-center mt-[4rem] lg:mt-[2rem] xl:[4rem]">
                <div className="flex flex-col gap-[2rem] w-[100%] md:w-[20.5rem] lg:w-[25rem] xl:w-[25rem] xl:max-w-[25rem]">
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
                      <div className="h-[1px] bg-[#2A3C46] my-[1rem]"></div>
                      <div className="relative pb-[13px] px-[1rem]">
                        <div className="text-neutral-400 flex flex-col gap-[13px]">
                          <div className="flex items-center gap-3">
                            <div>
                              <ProfilePicture />
                            </div>

                            <span>@{post.userName}</span>
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
                            <div>
                              <p className="text-[#FFF] font-Poppins text-[1rem] normal font-normal text-start">
                                Participants:{" "}
                                <span className="text-[#1FDF00] font-[600]">
                                  +{post.participants}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={clsx(toggle === 2 ? "block" : "hidden")}>
                    <div className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover">
                      <div>
                        <div className="flex items-center justify-center gap-[1rem] border-[#314048] border-b-[0.5px] py-[1.19rem]">
                          <span>
                            <img
                              width={"48"}
                              height={"48"}
                              src={post.profilePicture}
                              className="h-[48px] w-[48px] object-cover rounded-full"
                              alt=""
                            />
                          </span>
                          <p className="text-[#FFF] font-Poppins normal-case font-normal text-[1.4rem]">
                            {post.userName}
                          </p>
                        </div>
                        <div className="px-[1.25rem] py-[0.69rem]">
                          <div className="px-[0.5rem] py-[0.62rem]">
                            <p className="font-Poppins text-[1rem] font-[300] text-[#A5A5A5] leading-[140%] text-start">
                              The next-gen smart platform for multi-chain yield
                              maximization and with deflationary ABRA token.
                              Boost yields, automate manual actions, save gas
                              and your time. The next-gen smart platform for
                              multi-chain yield maximization and with
                              deflationary ABRA token. Boost yields, automate
                              manual actions, save gas and your time.
                            </p>
                          </div>

                          <div className="flex gap-[2rem] items-center">
                            <div className="flex items-center gap-[0.62rem] px-[0.62rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                              <span>
                                <Group />
                              </span>
                              <span className="h-[1.5rem] w-[1px] bg-[#314048]"></span>
                              <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                                200k
                              </span>
                            </div>
                            <div className="flex gap-[0.62rem] items-center">
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

                          <div className="flex flex-col justify-baseline items-stretch pt-[1.5rem] pb-[0.5rem]">
                            <button className="rounded-md py-[0.5rem] px-[1rem] font-Poppins text-[1.25rem] font-normal text-[#E8E8E8] border-[#314048] border-opacity-[40%] border-[1px]">
                              Join community
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={clsx(toggle === 3 ? "block" : "hidden")}>
                    <div className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover">
                      <div className="border-[#314048] border-b-[0.5px] py-[1rem]">
                        <p className="text-[#FFF] font-Poppins text-[1.4rem] font-normal">
                          Top Earners
                        </p>
                      </div>
                      <div className="py-[1rem] flex flex-col items-stretch px-[3rem] gap-[1rem]">
                        {TOPEARNERS.slice(0, 7).map((earners, index) => (
                          <div
                            className="flex justify-between"
                            key={earners.id}
                          >
                            <div className="flex items-center gap-[0.9rem]">
                              <span className="text-[#FFF] text-[0.96rem] normal font-Poppins font-[300]">
                                {index + 1}
                              </span>
                              <div className="">
                                <img
                                  src={earners.src}
                                  height={"100"}
                                  width={"100"}
                                  className="w-[2.3rem] h-[2.3rem] object-cover rounded-full"
                                />
                              </div>
                              <span className="text-[#FFF] text-[0.96rem] normal font-Poppins font-[300]">
                                {earners.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-[1rem]">
                              {/* <span className="text-[#FFF] text-[0.8rem] normal font-Poppins font-[300]">
                            10 BNB
                          </span>
                          <span className="text-[#FFF]">
                            <Bnb />
                          </span> */}
                              <span
                                className={clsx(
                                  "whitespace-nowrap text-[0.5rem] md:text-[0.96rem]",
                                  earners.coin.eth
                                    ? "text-[#F04086]"
                                    : "text-[#E1D356]"
                                )}
                              >
                                {earners.coin.eth
                                  ? `${earners.coin.eth} ETH`
                                  : `${earners.coin.btc} BNB`}
                              </span>
                              <span>
                                {earners.coin.eth ? <Eth /> : <Bnb />}
                              </span>
                            </div>
                          </div>
                        ))}
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
                        onClick={handleLike}
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

                        {!post.like && (
                          <span>
                            <Actions />
                          </span>
                        )}
                        {post.like && (
                          <span>
                            <Check />
                          </span>
                        )}
                      </button>
                      <span>
                        <FlexLine />
                      </span>

                      <button
                        onClick={handleRetweet}
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
                        {!post.repost && (
                          <span>
                            <Actions />
                          </span>
                        )}
                        {post.repost && (
                          <span>
                            <Check />
                          </span>
                        )}
                      </button>
                      <span>
                        <FlexLine />
                      </span>

                      <button
                        onClick={handleFollow}
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
                        {!post.follow && (
                          <span>
                            <Actions />
                          </span>
                        )}
                        {post.follow && (
                          <span>
                            <Check />
                          </span>
                        )}
                      </button>
                      <span>
                        <FlexLine />
                      </span>

                      <button
                        onClick={handleComment}
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
                        {!post.comment && (
                          <span>
                            <Actions />
                          </span>
                        )}
                        {post.comment && (
                          <span>
                            <Check />
                          </span>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-[2rem] pb-[1rem]">
                      <div>
                        <p className="text-[#FFF] whitespace-nowrap font-Poppins text-[1rem] md:text-[0.9rem] lg:text-[1.2rem] normal font-normal">
                          Participants:{" "}
                          <span className="text-[#1FDF00] font-[600]">
                            +{post.participants}
                          </span>
                        </p>
                      </div>
                      <button className="border-[1.5px] border-[#4C5656] bg-[#B6B9B9] px-[1rem] py-[0.5rem] rounded-md">
                        <span className="whitespace-nowrap font-Poppins text-[#000] text-[0.8rem] lg:text-[1rem] font-normal text-center">
                          Redeem reward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </main>
              <div className="text-[#FFF] flex mt-[1rem] justify-between md:hidden">
                <button
                  onClick={handlePreviousTweet}
                  className="border-[1.5px] border-[#4C5656] bg-[#79C4EC] px-[1rem] py-[0.5rem] rounded-md"
                >
                  <span className="whitespace-nowrap font-Poppins text-[#000] text-[0.8rem] md:text-[1rem] font-normal text-center">
                    Prev
                  </span>
                </button>
                <button
                  onClick={handleNextTweet}
                  className="border-[1.5px] border-[#4C5656] bg-[#79C4EC] px-[1rem] py-[0.5rem] rounded-md"
                >
                  <span className="whitespace-nowrap font-Poppins text-[#000] text-[0.8rem] md:text-[1rem] font-normal text-center">
                    Next
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default SingleTweetById;
