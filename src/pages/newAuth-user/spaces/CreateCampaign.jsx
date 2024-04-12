import { useState } from "react";
import CampaignInformation from "./CampaignInformation";
import CampaignTasks from "./CampaignTasks";

const CreateCampaign = ({ spaceDetail }) => {
  const [showCampaignTask, setShowCampaignTask] = useState(true);
  return (
    <div>
      {!showCampaignTask && (
        <CampaignInformation
          setShowCampaignTask={setShowCampaignTask}
          spaceDetail={spaceDetail}
        />
      )}
      {showCampaignTask && (
        <CampaignTasks
          setShowCampaignTask={setShowCampaignTask}
          spaceDetail={spaceDetail}
        />
      )}
    </div>
  );
};

export default CreateCampaign;
