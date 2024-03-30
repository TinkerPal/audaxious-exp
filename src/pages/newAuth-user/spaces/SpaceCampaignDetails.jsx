import { useEffect, useState } from "react";

// import { getToken } from "../../utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllCampaignsBySpace,
  getCampaignById,
} from "../../../store/campaignActions";
import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";
import ReusasbleCampaignDetails from "./ReusasbleCampaignDetails";

const SpaceCampaignDetails = () => {
  const [post, setPost] = useState({});
  const POST = useSelector((state) => state.space.spaceCampaigns);

  const params = useParams();
  const spaceId = params.spaceId;
  const campaignId = params.campaignId;

  const dispatch = useDispatch();

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const result = await dispatch(getAllCampaignsBySpace(post.space_uuid));

        // setCampaigns(result.data);
        dispatch(spaceActions.replaceSpaceCampaigns(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    // if (spaceDetail.uuid && toggle === 1) {
    //   getCampaigns();
    // }
    getCampaigns();
  }, [dispatch, post.space_uuid]);

  // const handleNextTweet = () => {
  //   const currentIndex = POST.findIndex((item) => item.uuid === post.uuid);
  //   const nextIndex = (currentIndex + 1) % POST.length;
  //   const nextTweet = POST[nextIndex];
  //   setPost(nextTweet);

  //   navigate(`/spaces/${spaceId}/${nextTweet.uuid}`);
  // };
  // const handlePreviousTweet = () => {
  //   const currentIndex = POST.findIndex((item) => item.uuid === post.uuid);
  //   let nextIndex = (currentIndex - 1) % POST.length;
  //   if (nextIndex < 0) {
  //     nextIndex = POST.length - 1;
  //   }

  //   const nextTweet = POST[nextIndex];
  //   setPost(nextTweet);

  //   navigate(`/spaces/${spaceId}/${nextTweet.uuid}`);
  // };

  const navigate = useNavigate();
  const closeIntentModalHandler = () => {
    navigate(`/spaces/${spaceId}`);
  };

  if (!post) {
    return <Loading />;
  }

  //   console.log(campaignId);
  // console.log("TASKS", post.tasks?.length);
  // console.log("the states are", taskStatus);

  return (
    <>
      <ReusasbleCampaignDetails
        closeIntentModalHandler={closeIntentModalHandler}
        post={post}
        setPost={setPost}
        campaignId={campaignId}
      />
    </>
  );
};

export default SpaceCampaignDetails;
