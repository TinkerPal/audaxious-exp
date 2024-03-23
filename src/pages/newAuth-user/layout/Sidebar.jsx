import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ReactComponent as DashBoardIcon } from "../../../assets/svg/dashboardSvg/dasboardIcon.svg";
import { ReactComponent as MultiSenderIcon } from "../../../assets/svg/dashboardSvg/multisender.svg";
import { ReactComponent as EngagePortalIcon } from "../../../assets/svg/dashboardSvg/portal.svg";
import { ReactComponent as CommunityIcon } from "../../../assets/svg/dashboardSvg/community.svg";
import { ReactComponent as PostIcon } from "../../../assets/svg/dashboardSvg/post.svg";
import { ReactComponent as Lines } from "../../../assets/svg/dashboardSvg/line.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/dashboardSvg/profile.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/svg/dashboardSvg/settings.svg";
import { ReactComponent as HelpIcon } from "../../../assets/svg/dashboardSvg/help.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/dashboardSvg/logout.svg";
import { ReactComponent as MdLineIcon } from "../../../assets/svg/dashboardSvg/mdLines.svg";
import { ReactComponent as LogoMd } from "../../../assets/svg/dashboardSvg/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";

const Sidebar = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const dispatch = useDispatch();

  const onOpenHandler = () => {
    dispatch(authAction.logoutModalMethod(true));
  };

  const path = location.pathname;
  // console.log(path);

  const openLoginModal = () => {
    // onOpen(bool);
    dispatch(authAction.onOpen());
  };

  // const logoutHandler = () => {
  //   localStorage.removeItem("audaxiousAccessToken");
  //   dispatch(authAction.logout());
  // };

  return (
    <div className="flex flex-col gap-3 pl-[1rem] md:pl-[2rem] h-screen fixed top-[82px] left-0 bottom-0 z-[1] bg-[#060B12]">
      <NavLink
        to={"/dashboard"}
        className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
          path === "/dashboard" && "bg-[#79C4EC]/10"
        }`}
      >
        {/* from-[#4D5CDD] to-[#79C4EC] */}
        <div className={`${path === "/dashboard" ? "text-[#79C4EC]" : "none"}`}>
          <DashBoardIcon />
        </div>
        <div
          className={clsx(
            "hidden xl:block",
            path === "/dashboard" ? "text-[#79C4EC]" : "text-[#818282]"
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
      <div className="flex flex-col gap-[0.2rem]">
        <NavLink
          to={"/engage-portal"}
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10  items-center    ${
            path === "/engage-portal" && "bg-[#79C4EC]/10"
          }`}
        >
          <div
            className={`${
              path === "/engage-portal" ? "text-[#79C4EC]" : "none"
            }`}
          >
            <EngagePortalIcon />
          </div>
          <span
            className={clsx(
              "hidden xl:block",
              path === "/engage-portal" ? "text-[#79C4EC]" : "text-[#818282]"
            )}
          >
            Engage Portal
          </span>
        </NavLink>
        <NavLink
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
            path === "/spaces" && "bg-[#79C4EC]/10"
          }`}
          to={"/spaces"}
        >
          <div className={`${path === "/spaces" ? "text-[#79C4EC]" : "none"}`}>
            <CommunityIcon />
          </div>
          <span
            className={clsx(
              "hidden xl:block",
              path === "/spaces" ? "text-[#79C4EC]" : "text-[#818282]"
            )}
          >
            Spaces
          </span>
        </NavLink>
        <NavLink
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
            path === "" && "bg-[#79C4EC]/10"
          }`}
        >
          <span>
            <PostIcon />
          </span>
          <span className="hidden xl:block">AI Creatives</span>
        </NavLink>

        <NavLink
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
            path === "" && "bg-[#79C4EC]/10"
          }`}
        >
          <span>
            <MultiSenderIcon />
          </span>
          <span className="hidden xl:block">Multisender</span>
        </NavLink>
      </div>

      <div className="hidden xl:block">
        <Lines />
      </div>
      <div className="block xl:hidden">
        <MdLineIcon />
      </div>

      <div className="flex flex-col gap-[0.5rem]">
        <NavLink
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
            path === "" && "bg-[#79C4EC]/10"
          }`}
        >
          <span>
            <ProfileIcon />
          </span>
          <span className="hidden xl:block">Profile</span>
        </NavLink>
        <NavLink
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
            path === "" && "bg-[#79C4EC]/10"
          }`}
        >
          <span>
            <SettingsIcon />
          </span>
          <span className="hidden xl:block">Settings</span>
        </NavLink>
        <NavLink
          className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
            path === "" && "bg-[#79C4EC]/10"
          }`}
        >
          <span>
            <HelpIcon />
          </span>
          <span className="hidden xl:block">Help</span>
        </NavLink>
        {isAuthenticated && (
          <button
            onClick={onOpenHandler}
            className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
              path === "" && "bg-[#79C4EC]/10"
            }`}
          >
            <span>
              <LogoutIcon />
            </span>
            <span className="hidden xl:block">Logout</span>
          </button>
        )}
        {!isAuthenticated && (
          <button
            onClick={openLoginModal}
            className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.48rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
              path === "" && "bg-[#79C4EC]/10"
            }`}
          >
            <span>
              <LogoutIcon />
            </span>
            <span className="hidden xl:block">Login</span>
          </button>
        )}
      </div>
      <div className="items-baseline fixed bottom-5 z-[-1]">
        <div className="cursor-pointer p-[0.5rem] flex flex-col xl:flex-row gap-3 items-center mt-36 bg-[#323333] rounded-md">
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
    </div>
  );
};
export default Sidebar;
