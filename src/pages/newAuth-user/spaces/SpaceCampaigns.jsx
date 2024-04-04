import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as NoSpace } from "../../../assets/svg/dashboardSvg/noSpace.svg";
import CampaignsCard from "../engagePortal/CampaignCard";

const SpaceCampaigns = ({ spaceId }) => {
  const campaigns = useSelector((state) => state.space.spaceCampaigns);
  if (!campaigns || campaigns.length <= 0) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
        <span>
          <NoSpace />
        </span>
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <p className="font-[400] text-[1.2rem]">No campaigns to show</p>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            All Campaigns will appear here
            <br /> <span className="text-[#FFF]">“Search”</span> for a valid
            campaign title
          </p>
        </div>
      </div>
    );
  }

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
