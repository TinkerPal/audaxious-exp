import { useState } from "react";
import CampaignInformation from "./CampaignInformation";
import CampaignTasks from "./CampaignTasks";

const CreateCampaign = () => {
  const [showCampaignTask, setShowCampaignTask] = useState(false);
  return (
    <div>
      {!showCampaignTask && (
        <CampaignInformation setShowCampaignTask={setShowCampaignTask} />
      )}
      {showCampaignTask && <CampaignTasks />}
    </div>
  );
};

export default CreateCampaign;
