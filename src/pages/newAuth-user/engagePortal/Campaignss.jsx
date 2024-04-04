import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CampaignsCard from "./CampaignCard";
import { ReactComponent as NoSpace } from "../../../assets/svg/dashboardSvg/noSpace.svg";

const Campaigns = ({ search }) => {
  const campaigns = useSelector((state) => state.campaign.campaign);
  let filterCampaign =
    campaigns &&
    campaigns.filter((campaign) => {
      return campaign.title.toLowerCase().startsWith(search.toLowerCase());
    });

  if (!filterCampaign || filterCampaign.length <= 0) {
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
    <div className="flex flex-col items-center  bg-black h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4  gap-x-4 2xl:gap-x-[2.4rem] gap-y-[2.5rem]  pt-[0rem] pl-[0rem] ">
        {filterCampaign.map((post) => (
          <NavLink key={post.uuid} to={`/engage-portal/${post.uuid}`}>
            <CampaignsCard post={post} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
