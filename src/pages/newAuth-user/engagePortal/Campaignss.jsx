import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CampaignsCard from "./CampaignCard";

const Campaigns = () => {
  const campaigns = useSelector((state) => state.campaign.campaign);

  return (
    <div className="flex flex-col items-center  ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4  gap-x-4 2xl:gap-x-[2.4rem] gap-y-[2.5rem]  pt-[1rem] pl-[0rem] ">
        {campaigns &&
          campaigns.map((post) => (
            <NavLink key={post.uuid} to={`/engage-portal/${post.uuid}`}>
              <CampaignsCard post={post} />
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Campaigns;
