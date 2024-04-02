import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CampaignsCard from "../engagePortal/CampaignCard";

const SpaceCampaigns = ({ spaceId }) => {
  const campaigns = useSelector((state) => state.space.spaceCampaigns);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4  gap-x-4 2xl:gap-x-[2.4rem] gap-y-[2.5rem]  pt-[1rem] pl-[0rem] ">
        {campaigns &&
          campaigns.map((post) => (
            <NavLink key={post.uuid} to={`/spaces/${spaceId}/${post.uuid}`}>
              <CampaignsCard post={post} />
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default SpaceCampaigns;
