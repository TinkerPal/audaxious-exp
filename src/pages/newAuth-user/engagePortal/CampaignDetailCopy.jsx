import { useEffect, useState } from "react";
import clsx from "clsx";

import { ReactComponent as ProfilePicture } from "../../../assets/svg/dashboardSvg/profilePic.svg";
import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Tweet } from "../../../assets/svg/dashboardSvg/tweeter.svg";
import { ReactComponent as Infinity } from "../../../assets/svg/dashboardSvg/infinity.svg";
import { ReactComponent as Retweet } from "../../../assets/svg/dashboardSvg/secondRetweet.svg";
import { ReactComponent as Love } from "../../../assets/svg/dashboardSvg/love.svg";
import { ReactComponent as FlexLine } from "../../../assets/svg/dashboardSvg/flexLine.svg";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel.svg";
import { ReactComponent as Next } from "../../../assets/svg/dashboardSvg/next.svg";
import { ReactComponent as Previous } from "../../../assets/svg/dashboardSvg/previous.svg";
import { ReactComponent as Actions } from "../../../assets/svg/dashboardSvg/actions.svg";
// import { ReactComponent as Check } from "../../../assets/svg/dashboardSvg/check.svg";
import { ReactComponent as Check } from "../../../assets/svg/dashboardSvg/checkMark.svg";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import { ReactComponent as Earn } from "../../../assets/svg/dashboardSvg/earn.svg";
import { POST, getTweetById } from "../../../utils/postApi";
import { TOPEARNERS } from "../../../utils/postApi";
import {
  CommentIntent,
  FollowIntent,
  LikeIntent,
  RepostIntent,
} from "./TweeterIntent";
// import { getToken } from "../../utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/socialmedia/Modal";
// import { Dialog } from "@headlessui/react";
import { authAction } from "../../../store/authorizationSlice";
import VerifyTweeter from "../authentication/VerifyTweeter";
import { getCampaignById } from "../../../store/campaignActions";
import Loading from "../../Homes/Loading";

const SingleTweetById = () => {
  const checkTweetId = useParams();
  const tweet = getTweetById(checkTweetId.postId);
  // const [post, setPost] = useState(tweet);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(1);
  const [post, setPost] = useState({});

  const POST = useSelector((state) => state.campaign.campaign);

  const params = useParams();
  const campaignId = params.postId;

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const verifyTweeter = useSelector(
    (state) => state.authentication.verifyTweet
  );

  // useEffect(() => {
  //   const getCampaigns = async () => {
  //     try {
  //       const result = await dispatch(getCampaignById(campaignId));
  //       setPost(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCampaigns();
  // }, [dispatch, campaignId]);

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
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      // setOpen(true);
      dispatch(authAction.onOpenTweeterModal(true));
      // VerifyIntent(tweetText, tweetUrl);
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
      dispatch(authAction.onOpenTweeterModal(true));
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
      dispatch(authAction.onOpenTweeterModal(true));
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
      dispatch(authAction.onOpenTweeterModal(true));
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
    const currentIndex = POST.findIndex((item) => item.title === post.title);
    const nextIndex = (currentIndex + 1) % POST.length;
    const nextTweet = POST[nextIndex];
    setPost(nextTweet);
    navigate(`/engage-portal/${nextTweet.title}`);
  };
  const handlePreviousTweet = () => {
    const currentIndex = POST.findIndex((item) => item.title === post.title);
    let nextIndex = (currentIndex - 1) % POST.length;
    if (nextIndex < 0) {
      nextIndex = POST.length - 1;
    }
    const nextTweet = POST[nextIndex];
    setPost(nextTweet);
    navigate(`/engage-portal/${nextTweet.title}`);
  };

  const navigate = useNavigate();
  const closeIntentModalHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const result = await dispatch(getCampaignById(campaignId));
        console.log("result of campaign", result);

        setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampaigns();
  }, [dispatch, campaignId]);

  if (!post) {
    return <Loading />;
  }

  console.log(campaignId);
  console.log(post);

  return (
    <>
      <VerifyTweeter />

      <Modal onClose={closeIntentModalHandler} open={true}>
        <section className="bg-[#060B12] relative pt-[5rem] pb-[1rem] rounded-md max-w-[1300px] px-[1rem]">
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
                    @{post.title}
                  </span>
                </div>
              </div>
              <div>
                {!isAuthenticated && (
                  <div
                    onClick={joinSpaceHandler}
                    className="cursor-pointer px-[1rem]  py-[0.5rem] font-Poppins text-[1rem] text-[#060B12] font-[400] bg-[#79C4EC] rounded-sm"
                  >
                    Join space
                  </div>
                )}
                {isAuthenticated && (
                  <div
                    // onClick={joinSpaceHandler}
                    className="cursor-pointer whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                  >
                    Joined
                  </div>
                )}
              </div>
            </header>
            <div className="relative">
              <div className="absolute top-[50%] left-[-42px] hidden md:block">
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
                      key={"post.id"}
                      className="border-[#314048] border-[0.5px] rounded-[20px] bg-heroCustom bg-no-repeat bg-cover"
                    >
                      <div className="flex justify-between mx-[0.81rem] mt-[0.9rem]">
                        <div className="flex items-center gap-[0.75rem] overflow-x-auto">
                          <button className="bg-[#13161E] flex items-center gap-1 border-[1px] border-[#2A3C46] border-opacity-[80%] px-[9px] py-[6px] font-Poppins font-[300] text-[0.8rem] text-[#87cece] rounded-[26px]">
                            <span>
                              <Clock />
                            </span>
                            <span className="whitespace-nowrap">
                              Tasks | {"post.tasks"}/10
                            </span>
                          </button>
                          <button
                            className={clsx(
                              "flex items-center gap-1 border-[1px] border-opacity-[50%] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px]"
                              // post.coin.eth
                              //   ? "bg-[#1F2030] text-[#C556E1] border-[#C556E1]"
                              //   : "bg-[#EEEFA2] bg-opacity-[10%] text-[#E1D356] border-[#C0D925] border-opacity-[50%]"
                            )}
                          >
                            <span className="whitespace-nowrap flex">
                              Earn | {post.points}
                              {/* {post.coin.eth
                                ? `${post.coin.eth} ETH`
                                : `${post.coin.bnb} BNB`} */}
                            </span>
                            {/* <span>{post.coin.eth ? <Eth /> : <Bnb />}</span> */}
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
                              {post.profilePicture && (
                                <img
                                  src={post?.profilePicture}
                                  width="100"
                                  height={"100"}
                                  className="w-[4rem] h-[3rem] object-cover rounded-[4px]"
                                />
                              )}
                              {!post.profilePicture && (
                                <div className="w-[4rem] h-[3rem] rounded-[4px] bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46] uppercase font-Poppins font-[600]">
                                  {post.title && post.title.slice(0, 1)}
                                </div>
                              )}
                            </div>

                            <span>@{post.title}</span>
                          </div>
                          <div className="flex flex-col gap-[1rem]">
                            <div className="w-[100%] flex flex-col gap-[1rem]">
                              <p className="text-[0.95rem] text-[#E8E8E8] text-start">
                                {post.description}
                              </p>
                              {/* {post &&
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
                                )} */}
                            </div>
                            <div>
                              <p className="text-[#FFF] font-Poppins text-[1rem] normal font-normal text-start">
                                Participants:{" "}
                                <span className="text-[#1FDF00] font-[600]">
                                  +{"post.participants"}
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
                            <div>
                              {post.profilePicture && (
                                <img
                                  src={post?.profilePicture}
                                  width="100"
                                  height={"100"}
                                  className="w-[4rem] h-[3rem] object-cover rounded-[4px]"
                                />
                              )}
                              {!post.profilePicture && (
                                <div className="w-[4rem] h-[3rem] rounded-[4px] bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46] uppercase font-Poppins font-[600]">
                                  {post.title && post.title.slice(0, 1)}
                                </div>
                              )}
                            </div>
                          </span>
                          <p className="text-[#FFF] font-Poppins normal-case font-normal text-[1.4rem]">
                            {post.title}
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
                      <div
                        onClick={handleLike}
                        className="cursor-pointer select-none flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
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
                          <span className="whitespace-nowrap font-[300] md:text-[0.65rem] lg:text-[1rem] xl:[1.25rem] normal-case text-[#E8E8E8]">
                            <Actions />
                          </span>
                        )}
                        {post.like && (
                          <span>
                            <Check />
                          </span>
                        )}
                      </div>
                      <span>
                        <FlexLine />
                      </span>

                      <div
                        onClick={handleRetweet}
                        className="cursor-pointer select-none flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
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
                      </div>
                      <span>
                        <FlexLine />
                      </span>

                      <div
                        onClick={handleFollow}
                        className="cursor-pointer select-none flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
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
                      </div>
                      <span>
                        <FlexLine />
                      </span>

                      <div
                        onClick={handleComment}
                        className="cursor-pointer select-none flex justify-between py-[0.5rem] px-[1.3rem] items-center bg-[#0C131B] rounded-[8px]"
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
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <div className="flex items-center justify-between mt-[1rem] pt-[1rem] pb-[1rem] bg-[#070C13] rounded-xl px-[0.38rem]">
                <button className="bg-[#0E161D] px-[1rem] py-[0.5rem] rounded-md md:w-2/3 flex justify-center items-center gap-[1rem]">
                  <span>
                    <Earn />
                  </span>
                  <span className="whitespace-nowrap font-Poppins text-[#E8E8E8] text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] font-[300] text-center">
                    Claim Rewards & Points
                  </span>
                </button>
                <div className="flex items-center gap-[0.6rem] md:gap-[1.5rem]">
                  <span className="font-Poppins text-[0.5rem] md:text-[0.9rem] text-[#E1D356] bg-[#1E2321] rounded-[2.638rem] px-[0.8rem] py-[0.5rem] border border-[#E1D356]">
                    5 USDIT
                  </span>
                  <span className="font-Poppins text-[0.5rem] md:text-[0.9rem] text-[#7ABB81] bg-[#061812] rounded-[2.638rem] px-[0.8rem] py-[0.5rem] border border-[#7ABB81]">
                    50 XP
                  </span>
                </div>
              </div>
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
