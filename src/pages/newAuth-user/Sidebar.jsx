import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ReactComponent as DashBoardIcon } from "../../assets/svg/dashboardSvg/dasboardIcon.svg";
import { ReactComponent as MultiSenderIcon } from "../../assets/svg/dashboardSvg/multisender.svg";
import { ReactComponent as EngagePortalIcon } from "../../assets/svg/dashboardSvg/portal.svg";
import { ReactComponent as CommunityIcon } from "../../assets/svg/dashboardSvg/community.svg";
import { ReactComponent as PostIcon } from "../../assets/svg/dashboardSvg/post.svg";
import { ReactComponent as Lines } from "../../assets/svg/dashboardSvg/line.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/dashboardSvg/profile.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/dashboardSvg/settings.svg";
import { ReactComponent as HelpIcon } from "../../assets/svg/dashboardSvg/help.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg/dashboardSvg/logout.svg";
import { ReactComponent as MdLineIcon } from "../../assets/svg/dashboardSvg/mdLines.svg";
import { ReactComponent as LogoMd } from "../../assets/svg/dashboardSvg/logo.svg";

const Sidebar = () => {
  const location = useLocation();

  const path = location.pathname;
  // console.log(path);

  return (
    <div className="flex flex-col gap-3 pl-[3.74rem]">
      <NavLink
        to={"/dashboard"}
        className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]"
      >
        <div>
          <DashBoardIcon
            style={{
              fill: path === "/dashboard" ? "#FFF" : "#818282",
            }}
          />
        </div>
        <div
          className={clsx(
            "hidden xl:block",
            path === "/dashboard" ? "text-[#FFF]" : "text-[#818282]"
          )}
        >
          Dashboard
        </div>
      </NavLink>
      <div className="hidden xl:block">
        <Lines />
      </div>
      <div className="block xl:hidden">
        <MdLineIcon />
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
          <span>
            <MultiSenderIcon />
          </span>
          <span className="hidden xl:block">Multisender</span>
        </NavLink>
        <NavLink
          to={"/dashboard/engage-portal"}
          className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]"
        >
          <span>
            <EngagePortalIcon
              style={{
                fill: path === "/dashboard/engage-portal" ? "#FFF" : "#818282",
              }}
            />
          </span>
          <span
            className={clsx(
              "hidden xl:block",
              path === "/dashboard/engage-portal"
                ? "text-[#FFF]"
                : "text-[#818282]"
            )}
          >
            Engage Portal
          </span>
        </NavLink>
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
          <span>
            <CommunityIcon />
          </span>
          <span className="hidden xl:block">Community</span>
        </NavLink>
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42] whitespace-nowrap">
          <span>
            <PostIcon />
          </span>
          <span className="hidden xl:block">Post Mangagement</span>
        </NavLink>
      </div>

      <div className="hidden xl:block">
        <Lines />
      </div>
      <div className="block xl:hidden">
        <MdLineIcon />
      </div>

      <div className="flex flex-col gap-[0.5rem]">
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
          <span>
            <ProfileIcon />
          </span>
          <span className="hidden xl:block">Profile</span>
        </NavLink>
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
          <span>
            <SettingsIcon />
          </span>
          <span className="hidden xl:block">Settings</span>
        </NavLink>
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
          <span>
            <HelpIcon />
          </span>
          <span className="hidden xl:block">Help</span>
        </NavLink>
        <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42] whitespace-nowrap">
          <span>
            <LogoutIcon />
          </span>
          <span className="hidden xl:block">Logout</span>
        </NavLink>
      </div>

      <div className="p-[0.5rem] flex flex-col xl:flex-row gap-3 items-center mt-36 bg-[#323333] rounded-md">
        <span>
          <LogoMd fill={"#818282"} />
        </span>
        <span className="hidden xl:block font-Poppins text-[#818282] text-[0.8rem] normal-case font-[400] leading-[150%]">
          audaXious version 1.1.0
        </span>
        <span className="block xl:hidden font-Poppins text-[#818282] text-[0.8rem] normal-case font-[400] leading-[150%]">
          V 1.1.0
        </span>
      </div>
    </div>
  );
};
export default Sidebar;
