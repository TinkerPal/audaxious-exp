import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Homes/Loading";
import ReusasbleCampaignDetails from "./ReusasbleCampaignDetails";

const SpaceCampaignDetails = () => {
  const [post, setPost] = useState({});

  const params = useParams();
  const spaceId = params.spaceId;
  const campaignId = params.campaignId;

  const navigate = useNavigate();
  const closeIntentModalHandler = () => {
    navigate(`/spaces/${spaceId}`);
  };

  if (!post) {
    return <Loading />;
  }

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
