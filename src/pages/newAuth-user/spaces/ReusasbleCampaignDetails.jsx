import { useEffect, useState } from "react";
import clsx from "clsx";

import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/clock.svg";
import { ReactComponent as Bnb } from "../../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel.svg";
import { ReactComponent as Next } from "../../../assets/svg/dashboardSvg/next.svg";
import { ReactComponent as Previous } from "../../../assets/svg/dashboardSvg/previous.svg";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import { ReactComponent as Earn } from "../../../assets/svg/dashboardSvg/earn.svg";

import { TOPEARNERS } from "../../../utils/postApi";

import {
  CommentIntent,
  FollowIntent,
  LikeIntent,
  RepostIntent,
} from "../engagePortal/TweeterIntent";
// import { getToken } from "../../utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Modal from "../../../components/socialmedia/Modal";
// import { Dialog } from "@headlessui/react";
import { authAction } from "../../../store/authorizationSlice";
import VerifyTweeter from "../authentication/VerifyTweeter";
import {
  claimPointTask,
  getAllCompletedTask,
  getCampaignById,
  participateInTask,
} from "../../../store/campaignActions";
import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";
import SingleAction from "../engagePortal/SingleAction";
import { toast } from "react-toastify";
import { getAllJoinedSpaces, joinSpace } from "../../../store/spaceActions";

const ReusasbleCampaignDetails = ({
  closeIntentModalHandler,
  post,
  setPost,
  campaignId,
}) => {
  const [toggle, setToggle] = useState(1);
  const [taskStatus, setTaskStatus] = useState([]);
  const [processingStates, setProcessingStates] = useState([]); //for animation
  const [selectedIndex, setSelectedIndex] = useState([]);
  const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
  const joinedSpaceIds = joinedSpacesArray.map((space) => space.space_uuid);
  const memberState = useSelector((state) => state.space.isMember);
  const [completedTask, setCompletedTask] = useState([]);
  const [checkCompletedTask, setCheckCompletedTask] = useState([]);
  const [joinUuid, setJoinUuid] = useState("");
  const navigate = useNavigate();
  const urlPath = useLocation().pathname;
  const params = useParams();
  const spaceId = params.spaceId;

  const engagePOST = useSelector((state) => state.campaign.campaign);
  const spacePOST = useSelector((state) => state.space.spaceCampaigns);

  let POST;
  if (urlPath.slice(1, 7) === "engage") {
    POST = engagePOST;
  } else if (urlPath.slice(1, 7) === "spaces") {
    POST = spacePOST;
  }

  //   const POST = useSelector((state) => state.space.spaceCampaigns);

  function NavigationHandler(id) {
    if (urlPath.slice(1, 7) === "engage") {
      navigate(`/engage-portal/${id}`);
    } else if (urlPath.slice(1, 7) === "spaces") {
      navigate(`/spaces/${spaceId}/${id}`);
    }
  }

  let nextIndex;
  const handleNextTweet = () => {
    setCompletedTask(() => []);
    const currentIndex = POST.findIndex((item) => item.uuid === post.uuid);
    nextIndex = (currentIndex + 1) % POST.length;
    const nextTweet = POST[nextIndex];
    setPost(() => nextTweet);

    const joinIndex = nextTweet.tasks.findIndex(
      (task) => task.action === "join"
    );

    const joinUUID = nextTweet.tasks[joinIndex].uuid;

    if (!isTaskUuidInArray(joinUUID, completedTask) && isMember) {
      const newTask = { uuid: joinUUID };
      setCompletedTask((prev) => [...prev, newTask]);
    }

    // navigate(`/engage-portal/${nextTweet.uuid}`);
    NavigationHandler(nextTweet.uuid);
    // checkCompletedTaskFunction();
  };
  const handlePreviousTweet = () => {
    setCompletedTask(() => []);
    const currentIndex = POST.findIndex((item) => item.uuid === post.uuid);
    nextIndex = (currentIndex - 1) % POST.length;
    if (nextIndex < 0) {
      nextIndex = POST.length - 1;
    }

    const nextTweet = POST[nextIndex];
    setPost(() => nextTweet);
    // console.log("next tweet", nextTweet);
    const joinIndex = nextTweet.tasks.findIndex(
      (task) => task.action === "join"
    );

    const joinUUID = nextTweet.tasks[joinIndex].uuid;

    if (!isTaskUuidInArray(joinUUID, completedTask) && isMember) {
      const newTask = { uuid: joinUUID };
      setCompletedTask((prev) => [...prev, newTask]);
    }

    NavigationHandler(nextTweet.uuid);

    // checkCompletedTaskFunction();
  };

  let isMember = joinedSpaceIds.includes(post.space_uuid) || memberState;
  const checkCompletedTaskIds = checkCompletedTask.map((task) => task.uuid);
  const checkFuntion = (id) => checkCompletedTask.includes(id);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const verifyTweeter = useSelector(
    (state) => state.authentication.verifyTweet
  );

  useEffect(() => {
    const joinedSpaces = async () => {
      try {
        const result = await dispatch(getAllJoinedSpaces());
        dispatch(spaceActions.replaceJoinSpace(result.data));
      } catch (error) {
        toast.error(error.response.data.error);
      }
    };
    joinedSpaces();
  }, [dispatch]);

  const checkCompletedTaskFunction = async () => {
    try {
      const result = await dispatch(getAllCompletedTask(campaignId));
      setCheckCompletedTask(result.data);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  useEffect(() => {
    if (campaignId) {
      checkCompletedTaskFunction();
    }
  }, [campaignId]);

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const result = await dispatch(getCampaignById(campaignId));
        setPost(result.data);

        const joinIndex = result.data.tasks.findIndex(
          (task) => task.action === "join"
        );

        const joinUUID = result.data.tasks[joinIndex].uuid;

        setTaskStatus((cur) =>
          Array(result.data.tasks.length).fill("incomplete")
        );
        setProcessingStates((cur) =>
          Array(result.data.tasks.length).fill(false)
        );

        setTaskStatus((prevTaskStatus) => {
          const updatedTaskStatus = [...prevTaskStatus];
          updatedTaskStatus[joinIndex] = isMember ? "complete" : "incomplete";

          return updatedTaskStatus;
        });

        if (!isTaskUuidInArray(joinUUID, completedTask) && isMember) {
          const newTask = { uuid: joinUUID };
          setCompletedTask((prev) => [...prev, newTask]);
        }
      } catch (error) {
        toast.error(error.response.data.error);
      }
    };
    getCampaigns();
  }, [dispatch, campaignId, isMember, nextIndex]);

  const joinSpaceHandler = async () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    dispatch(spaceActions.setLoading(true));
    try {
      const result = await dispatch(joinSpace(post.space_uuid));
      dispatch(spaceActions.setLoading(false));
      toast.success(result.message);
      dispatch(spaceActions.setIsMember(true));
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setIsMember(false));
      toast.error(error.response.data.error);
    }
  };

  const toggleTabHandler = (id) => {
    setToggle(id);
  };

  const isTaskUuidInArray = (taskUuid, array) =>
    array.some((item) => item.uuid === taskUuid);

  const handleJoin = async (task, index) => {
    setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, index]);
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      dispatch(authAction.onOpenTweeterModal(true));
      document.activeElement.blur();
      return;
    }
    if (!isTaskUuidInArray(task.uuid, completedTask)) {
      setProcessingStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
      const newTask = { uuid: task.uuid };
      setCompletedTask((prev) => [...prev, newTask]);
      try {
        const result = await dispatch(joinSpace(task.url));
        dispatch(spaceActions.setLoading(false));
        toast.success(result.message);
        dispatch(spaceActions.setIsMember(true));
      } catch (error) {
        dispatch(spaceActions.setLoading(false));
        dispatch(spaceActions.setIsMember(false));
        toast.error(error.response.data.error);
      }
      // const tweetId = extractHandle(task.url);
      // LikeIntent(tweetId);
      const updatedPost = { ...post, like: true };
      setTimeout(() => {
        setProcessingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = false;
          return updatedStates;
        });
        setPost(updatedPost);
        setTaskStatus((prevTaskStatus) => {
          const updatedTaskStatus = [...prevTaskStatus];
          updatedTaskStatus[index] = "complete";
          return updatedTaskStatus;
        });
      }, 10000); // 60 seconds in milliseconds
    }
  };
  const handleLike = (task, index) => {
    setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, index]);

    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      dispatch(authAction.onOpenTweeterModal(true));
      document.activeElement.blur();
      return;
    }
    //   const isTaskUuidInArray = (taskUuid, array) => {
    //   return array.some(item => item.uuid === taskUuid);
    // };
    if (!isTaskUuidInArray(task.uuid, completedTask)) {
      setProcessingStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
      const newTask = { uuid: task.uuid };
      setCompletedTask((prev) => [...prev, newTask]);
      const tweetId = extractHandle(task.url);
      LikeIntent(tweetId);
      const updatedPost = { ...post, like: true };
      setTimeout(() => {
        setProcessingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = false;
          return updatedStates;
        });
        setPost(updatedPost);
        setTaskStatus((prevTaskStatus) => {
          const updatedTaskStatus = [...prevTaskStatus];
          updatedTaskStatus[index] = "complete";
          return updatedTaskStatus;
        });
      }, 10000); // 60 seconds in milliseconds
    }
  };

  const handleRetweet = (task, index) => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      document.activeElement.blur();
      return;
    }
    if (!verifyTweeter) {
      dispatch(authAction.onOpenTweeterModal(true));
      document.activeElement.blur();
      return;
    }
    if (!isTaskUuidInArray(task.uuid, completedTask)) {
      setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, index]);

      const tweetId = extractHandle(task.url);
      setProcessingStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
      const newTask = { uuid: task.uuid };
      setCompletedTask((prev) => [...prev, newTask]);
      RepostIntent(tweetId);
      const updatedPost = { ...post, repost: true };
      setTimeout(() => {
        setProcessingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = false;
          return updatedStates;
        });
        setPost(updatedPost);
        setTaskStatus((prevTaskStatus) => {
          const updatedTaskStatus = [...prevTaskStatus];
          updatedTaskStatus[index] = "complete";
          return updatedTaskStatus;
        });
      }, 10000); // 60 seconds in milliseconds
    }
  };

  function extractHandle(url) {
    if (typeof url !== "string") {
      return null; // Handle invalid input
    }

    const tweetIdRegex = /\/status\/(\d+)/i;

    const usernameRegex = /(?:twitter\.com|X\.com)\/([^/?]+)/i;

    const tweetIdMatch = url.match(tweetIdRegex);
    const usernameMatch = url.match(usernameRegex);

    if (tweetIdMatch && tweetIdMatch[1]) {
      return tweetIdMatch[1]; // Return tweet ID if found
    } else if (usernameMatch && usernameMatch[1]) {
      return usernameMatch[1]; // Return username if found
    } else {
      return null; // Neither tweet ID nor username found
    }
  }

  const handleFollow = (task, index) => {
    setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, index]);

    const username = extractHandle(task.url);

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
    if (!isTaskUuidInArray(task.uuid, completedTask)) {
      setProcessingStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
      const newTask = { uuid: task.uuid };
      setCompletedTask((prev) => [...prev, newTask]);
      FollowIntent(username);
      const updatedPost = { ...post, follow: true };
      setTimeout(() => {
        setProcessingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = true;
          return updatedStates;
        });
        setPost(updatedPost);
        setTaskStatus((prevTaskStatus) => {
          const updatedTaskStatus = [...prevTaskStatus];
          updatedTaskStatus[index] = "complete";
          return updatedTaskStatus;
        });
      }, 10000); // 10 seconds in milliseconds
    }
  };

  const handleComment = (taskId) => {
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

  // `join follow like repost share post`;

  const handleAction = (actionType, task, index) => {
    switch (actionType) {
      case "join":
        handleJoin(task, index);
        break;
      case "like":
        handleLike(task, index);
        break;
      case "repost":
        handleRetweet(task, index);
        break;
      case "follow":
        handleFollow(task, index);
        break;
      case "post":
        handleComment(task, index);
        break;
      // default:
      //   () => {};
      //   break;
    }
  };
  if (!post) {
    return <Loading />;
  }

  const taskCompleted = checkCompletedTask?.length === post?.tasks?.length;

  const taskCompleteProgress = taskCompleted
    ? checkCompletedTask?.length
    : completedTask?.length;

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { tasks: completedTask };

    try {
      if (checkCompletedTask.length < post.tasks.length) {
        const result = await dispatch(participateInTask(campaignId, data));

        const claimPoint = await dispatch(claimPointTask(campaignId));
        toast.success(claimPoint.message);
      } else if (checkCompletedTask.length === post.tasks.length) {
        const claimPoint = await dispatch(claimPointTask(campaignId));
        toast.success(claimPoint.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <VerifyTweeter />

      <Modal onClose={closeIntentModalHandler} open={true}>
        <form onSubmit={submitHandler}>
          <section className="bg-[#060B12] relative pt-[5rem] pb-[1rem] rounded-md max-w-[1300px] px-[1rem]">
            <div className="text-neutral-300 top-[15px] absolute right-2">
              <span
                className="cursor-pointer"
                onClick={closeIntentModalHandler}
              >
                <Cancel />
              </span>
            </div>
            <div className="container">
              <header className="flex justify-between items-center">
                <div className="flex gap-[0rem]">
                  {/* <span>
              <Cadabra style={{ height: "100px", width: "100px" }} />
            </span> */}
                  <div className="flex flex-row  space-x-1 justify-center items-center">
                    <span className="font-Poppins text-[1.45rem] normal-case font-[400] text-[#FFF]">
                      {post.space_title}
                    </span>
                    <span>
                      <svg
                        className="h-6 flex flex-row w-auto "
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.55 16.0499C24.15 15.4499 24.15 14.5499 23.55 13.9499C22.95 13.3499 22.05 13.3499 21.45 13.9499L16.5 18.8999L14.55 16.9499C13.95 16.3499 13.05 16.3499 12.45 16.9499C11.85 17.5499 11.85 18.4499 12.45 19.0499L15.45 22.0499C16.05 22.6499 16.95 22.6499 17.55 22.0499L23.55 16.0499ZM18 1.49991C16.2 1.49991 14.55 2.24991 13.5 3.59991C13.05 4.04991 12.9 4.19991 12.75 4.49991C12.6 4.49991 12.6 4.49991 12.6 4.49991C12.45 4.49991 12.3 4.49991 12 4.49991H10.5C9 4.49991 7.5 5.09991 6.3 6.29991C5.25 7.49991 4.65 8.99991 4.65 10.4999V11.9999C4.65 12.2999 4.65 12.4499 4.65 12.5999C4.65 12.5999 4.5 12.5999 4.5 12.7499C4.2 12.8999 4.05 13.0499 3.6 13.4999C2.25 14.5499 1.5 16.1999 1.5 17.9999C1.5 19.7999 2.25 21.4499 3.6 22.4999C4.05 22.7999 4.2 23.0999 4.5 23.2499L4.65 23.3999C4.65 23.5499 4.65 23.6999 4.65 23.9999V25.4999C4.65 26.9999 5.25 28.4999 6.45 29.6999C7.5 30.7499 9 31.3499 10.5 31.3499H12C12.3 31.3499 12.45 31.3499 12.6 31.3499C12.6 31.3499 12.6 31.4999 12.75 31.4999C12.9 31.6499 13.2 31.9499 13.5 32.3999C14.55 33.7499 16.2 34.4999 18 34.4999C19.8 34.4999 21.45 33.7499 22.5 32.3999C22.8 31.9499 23.1 31.7999 23.25 31.4999L23.4 31.3499C23.55 31.3499 23.7 31.3499 24 31.3499H25.5C27 31.3499 28.5 30.7499 29.7 29.5499C30.9 28.3499 31.5 26.8499 31.5 25.3499V23.8499C31.5 23.5499 31.5 23.3999 31.5 23.2499C31.5 23.2499 31.65 23.2499 31.65 23.0999C31.8 22.9499 32.1 22.6499 32.55 22.3499C33.9 21.2999 34.65 19.6499 34.65 17.8499C34.65 16.0499 33.9 14.3999 32.55 13.3499C32.1 13.0499 31.95 12.7499 31.65 12.5999L31.5 12.4499C31.5 12.2999 31.5 12.1499 31.5 11.8499V10.4999C31.5 8.99991 30.9 7.49991 29.7 6.29991C28.5 5.24991 27 4.64991 25.5 4.64991H24C23.7 4.64991 23.55 4.64991 23.4 4.64991C23.4 4.64991 23.4 4.49991 23.25 4.49991C23.1 4.34991 22.8 4.04991 22.5 3.59991C21.45 2.24991 19.8 1.49991 18 1.49991Z"
                          fill="#1089FF"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  {!isAuthenticated ||
                    (!isMember && (
                      <div
                        onClick={joinSpaceHandler}
                        className="cursor-pointer px-[1rem]  py-[0.5rem] font-Poppins text-[1rem] text-[#060B12] font-[400] bg-[#79C4EC] rounded-sm "
                      >
                        Join space
                      </div>
                    ))}
                  {isAuthenticated && isMember && (
                    <span className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                      Member
                    </span>
                  )}
                  {/* {isAuthenticated && (
                  <div
                    // onClick={joinSpaceHandler}
                    className="cursor-pointer whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                  >
                    Joined
                  </div>
                )} */}
                </div>
              </header>
              <div className="relative">
                <div className="absolute top-[50%] left-[-42px] hidden md:block">
                  <span
                    className="cursor-pointer"
                    onClick={handlePreviousTweet}
                  >
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
                        Campaigns
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
                          <div className="flex flex-row items-center justify-between gap-[0.75rem]  w-full overflow-x-auto">
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
                                  {/* Tasks | {post.tasks}/10 */}
                                  Tasks | {`${taskCompleteProgress}`}/
                                  {`${post?.tasks?.length}`}
                                </span>
                              </button>
                              <button
                                type="button"
                                className={clsx(
                                  "flex items-center gap-1 border-[1px] border-opacity-[50%] px-[9px] py-[6px] font-Poppins text-[0.8rem] font-[300] text-[#C556E1] rounded-[26px] bg-[#C556E1]/5  border-[#C556E1]/25"
                                )}
                              >
                                <span className="whitespace-nowrap flex">
                                  Earn | {post.points} Point
                                  {/* {post.coin.eth
                                ? `${post.coin.eth} ETH`
                                : `${post.coin.bnb} BNB`} */}
                                </span>
                              </button>
                            </div>

                            <span className="text-[#929192] font-[500] text-[0.625rem] whitespace-nowrap">
                              {"12 Days left"}
                            </span>
                          </div>
                        </div>
                        <div className="h-[1px] bg-[#2A3C46] my-[1rem]"></div>
                        <div className="relative pb-[13px] px-[1rem]">
                          <div className="text-neutral-400 flex flex-col gap-[13px]">
                            <div className="flex items-center gap-3 text-gray-200 text-lg">
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

                              <span>{post.title}</span>
                            </div>
                            <div className="flex flex-col gap-[1rem]">
                              <div className="w-[100%] flex flex-col gap-[1rem]">
                                <p className="text-[0.95rem] text-gray-300 text-start">
                                  {post.description}
                                </p>
                              </div>
                              <div>
                                <p className="text-[#A5A5A5] font-Poppins text-[1rem] normal font-normal text-start">
                                  {post.taskParticipantCount} Participants
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
                            <p className="text-[#FFF] font-Poppins normal-case font-normal text-[1.2rem]">
                              {post.title}
                            </p>
                          </div>
                          <div className="px-[1.25rem] py-[0.69rem]">
                            <div className="px-[0.5rem] py-[0.62rem]">
                              <p className="font-Poppins text-[1rem] font-[300] text-[#A5A5A5] leading-[140%] text-start">
                                The next-gen smart platform for multi-chain
                                yield maximization and with deflationary ABRA
                                token. Boost yields, automate manual actions,
                                save gas and your time. The next-gen smart
                                platform for multi-chain yield maximization and
                                with deflationary ABRA token. Boost yields,
                                automate manual actions, save gas and your time.
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
                              <button
                                type="button"
                                className="rounded-md py-[0.5rem] px-[1rem] font-Poppins text-[1.25rem] font-normal text-[#E8E8E8] border-[#314048] border-opacity-[40%] border-[1px]"
                              >
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
                          <p className="text-[#FFF] font-Poppins text-[1.2rem] font-normal">
                            Leaderboard
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

                  <div className="flex flex-col gap-[2rem]  w-[100%] md:w-[19.5rem] lg:w-[25rem] xl:w-[30rem]">
                    <div className="p-[0.5rem] flex justify-between text-center  ">
                      <div className="whitespace-nowrap flex flex-row font-Poppins text-[1rem] lg:text-[1.25rem]  normal-case font-[300] text-[#E8E8E8]">
                        Complete the tasks
                      </div>
                      <span className="font-Poppins text-[1.25rem] font-[300] text-[#E8E8E8]">
                        {taskCompleteProgress}/{post.tasks?.length}
                      </span>
                    </div>
                    <div className="border-[#314048] border-[0.5px] rounded-[20px] px-[0.8rem] py-[2rem] lg:py-[0.7rem] xl:py-[1.16rem]">
                      <div className="flex flex-col gap-[0.5rem]">
                        {post.tasks &&
                          post.tasks.map((task, index) => (
                            <SingleAction
                              key={index}
                              task={task}
                              action={task.action}
                              processing={processingStates}
                              handleAction={handleAction}
                              taskStatus={taskStatus}
                              index={index}
                              selectedIndex={selectedIndex}
                              checkFuntion={checkFuntion}
                              taskCompleted={taskCompleted}
                            >
                              {task.action}
                            </SingleAction>
                          ))}
                      </div>
                    </div>
                  </div>
                </main>
                <div className="flex bg-[#0E161D] items-center justify-between mt-[1rem] py-[0.75rem]  rounded-2xl px-[1rem]">
                  <button
                    type="submit"
                    disabled={taskCompleted}
                    className={`px-[1rem] py-[0.5rem] rounded-md md:w-2/3 flex justify-center items-center gap-[1rem] `}
                  >
                    <span>
                      <Earn />
                    </span>
                    <span className="whitespace-nowrap font-Poppins text-[#E8E8E8] text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] font-[300] text-center">
                      Claim Rewards & Points
                    </span>
                  </button>
                  <div className="flex items-center gap-[0.6rem] md:gap-[1.5rem]">
                    <span className="font-Poppins text-[0.5rem] md:text-[0.9rem] text-[#E1D356] bg-[#1E2321] rounded-[2.638rem] px-[0.8rem] py-[0.3rem] border border-[#E1D356]/75">
                      5 USDT
                    </span>
                    <span className="font-Poppins text-[0.5rem] md:text-[0.9rem] text-[#7ABB81] bg-[#061812] rounded-[2.638rem] px-[0.8rem] py-[0.3rem] border border-[#7ABB81]/75">
                      50 XP
                    </span>
                  </div>
                </div>
                <div className="text-[#FFF] flex mt-[1rem] justify-between md:hidden">
                  <button
                    type="button"
                    onClick={handlePreviousTweet}
                    className="border-[1.5px] border-[#4C5656] bg-[#79C4EC] px-[1rem] py-[0.5rem] rounded-md"
                  >
                    <span className="whitespace-nowrap font-Poppins text-[#000] text-[0.8rem] md:text-[1rem] font-normal text-center">
                      Prev
                    </span>
                  </button>
                  <button
                    type="button"
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
        </form>
      </Modal>
    </>
  );
};

export default ReusasbleCampaignDetails;
