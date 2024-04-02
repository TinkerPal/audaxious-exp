import { useEffect, useState } from "react";

// import { getToken } from "../../utils/accesstoken";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { getCampaignById } from "../../../store/campaignActions";
import Loading from "../../Homes/Loading";

import ReusasbleCampaignDetails from "../spaces/ReusasbleCampaignDetails";

const SingleTweetById = () => {
  const [post, setPost] = useState({});
  // const [processing, setProcessing] = useState(false);
  const urlPath = useLocation().pathname;

  // const POST = useSelector((state) => state.campaign.campaign);

  // console.log("second", POST);

  const params = useParams();
  const campaignId = params.postId;
  const dispatch = useDispatch();

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
        const result = await dispatch(getCampaignById(campaignId));
        // console.log(result);
        // console.log("result of campaign", result);

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
