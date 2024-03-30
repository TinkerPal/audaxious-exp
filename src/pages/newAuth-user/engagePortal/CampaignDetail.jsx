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
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Modal from "../../../components/socialmedia/Modal";
// import { Dialog } from "@headlessui/react";
import { authAction } from "../../../store/authorizationSlice";
import VerifyTweeter from "../authentication/VerifyTweeter";
import {
  getAllCampaigns,
  getCampaignById,
} from "../../../store/campaignActions";
import Loading from "../../Homes/Loading";
import SingleAction from "./SingleAction";
import ReusasbleCampaignDetails from "../spaces/ReusasbleCampaignDetails";
import { campaignActions } from "../../../store/campaignSlice";

const SingleTweetById = () => {
  const checkTweetId = useParams();
  const tweet = getTweetById(checkTweetId.postId);
  // const [post, setPost] = useState(tweet);
  // const [count, setCount] = useState(0);
  // const [toggle, setToggle] = useState(1);
  const [post, setPost] = useState({});
  // const [processing, setProcessing] = useState(false);
  const urlPath = useLocation().pathname;

  const POST = useSelector((state) => state.campaign.campaign);

  // console.log("second", POST);

  const params = useParams();
  const campaignId = params.postId;
  const dispatch = useDispatch();

  // let nextIndex;
  // const handleNextTweet = () => {
  //   const currentIndex = POST.findIndex((item) => item.uuid === post.uuid);
  //   nextIndex = (currentIndex + 1) % POST.length;
  //   const nextTweet = POST[nextIndex];
  //   setPost(nextTweet);

  //   navigate(`/engage-portal/${nextTweet.uuid}`);
  // };
  // const handlePreviousTweet = () => {
  //   const currentIndex = POST.findIndex((item) => item.uuid === post.uuid);
  //   nextIndex = (currentIndex - 1) % POST.length;
  //   if (nextIndex < 0) {
  //     nextIndex = POST.length - 1;
  //   }

  //   const nextTweet = POST[nextIndex];
  //   setPost(nextTweet);

  //   navigate(`/engage-portal/${nextTweet.uuid}`);
  // };

  const navigate = useNavigate();
  const closeIntentModalHandler = () => {
    if (urlPath.slice(1, 7) === "engage") {
      navigate(`/engage-portal`);
    } else if (urlPath.slice(1, 7) === "spaces") {
      navigate(`/spaces`);
    }
  };

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        // const result = await dispatch(getCampaignById(campaignId));
        const result = await dispatch(getAllCampaigns());

        // campaignActions
        dispatch(campaignActions.replaceSpaceCampaigns(result.data));

        // setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampaigns();
  }, [dispatch]);

  if (!post) {
    return <Loading />;
  }

  return (
    <ReusasbleCampaignDetails
      closeIntentModalHandler={closeIntentModalHandler}
      post={post}
      setPost={setPost}
      campaignId={campaignId}
    />
  );
};

export default SingleTweetById;
