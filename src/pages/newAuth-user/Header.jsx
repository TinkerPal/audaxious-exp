import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as EngagePortalIcon } from "../../assets/svg/dashboardSvg/portal.svg";
import { ReactComponent as Search } from "../../assets/svg/dashboardSvg/search.svg";
import { ReactComponent as Bell } from "../../assets/svg/dashboardSvg/bell.svg";
import { ReactComponent as Line } from "../../assets/svg/dashboardSvg/linebtw.svg";
import { ReactComponent as LogoMd } from "../../assets/svg/dashboardSvg/audaxiousmd.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as DashBoardIcon } from "../../assets/svg/dashboardSvg/dasboardIcon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/svg/dashboardSvg/community.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/dashboardSvg/settings.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/dashboardSvg/profile.svg";
import { ReactComponent as HelpIcon } from "../../assets/svg/dashboardSvg/help.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg/dashboardSvg/logout.svg";

import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/store";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.isLogedIn);

  let title = "Dashboard";
  let specificIcon = <DashBoardIcon style={{ fill: "#FFF" }} />;
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const openLogoutModal = () => {
    dispatch(authAction.logoutModalMethod(true));
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedin");
    dispatch(authAction.logout());
  };

  const openLoginModal = () => {
    dispatch(authAction.onOpen());
  };

  let butons = (
    <button
      onClick={openLoginModal}
      className="whitespace-nowrap lg:inline-block px-[1rem] xl:px-[2rem] py-[0.2rem] xl:py-[0.5rem] rounded-[4px] text-[#FEFEFF] text-[16px] border-[0.75px] border-[#FEFEFF] shadow shadow-[#181E24] opacity-70"
    >
      Log In
    </button>
  );

  if (isAuthenticated) {
    butons = (
      <div onClick={toggleMenuHandler}>
        <div className="w-[2rem] h-[2rem] px-[0.4rem] py-[0.4rem] bg-[#EBBEF3] rounded-full flex items-center justify-center">
          <p className="text-[1.25rem] font-Poppins font-[600] text-neutral-950">
            H
          </p>
        </div>
      </div>
    );
  }

  if (path === "/engage-portal") {
    title = "Engage portal";
    specificIcon = (
      <EngagePortalIcon
        style={{
          fill: path === "/engage-portal" ? "#FFF" : "#818282",
        }}
      />
    );
  } else if (path.startsWith("/spaces")) {
    title = "Spaces";
    specificIcon = <CommunityIcon style={{ fill: "#FFF" }} />;
  }
  return (
    <div className="relative max-w-[1920px]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="text-neutral-100 flex items-center justify-between relative py-[1.38rem] px-[1.2rem] md:px-[4.34rem] bg-[#060B12] border-b border-b-[#18232C]">
          <div className="flex items-center gap-[0.5rem] md:gap-[2rem] xl:gap-[8.6rem]">
            <div className="hidden xl:block">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="block xl:hidden">
              <Link to={"/"}>
                <LogoMd />
              </Link>
            </div>
            <div
              className="text-[0.8rem] md:text-[1.09rem] font-Poppins font-[300] text-[#cccbcb] flex gap-4 items-center"
              style={{ fontStyle: "normal" }}
            >
              <span className="">{specificIcon}</span>{" "}
              <span className="whitespace-nowrap">{title}</span>
            </div>
          </div>

          <div className="flex items-center gap-[0.3rem] md:gap-[1rem]">
            <div>
              <Bell />
            </div>
            <div>
              <Line />
            </div>
            {butons}
          </div>
        </div>
        {showMenu && isAuthenticated && (
          <div className="absolute mt-2 right-5 md:right-10 bg-[#060B12]">
            <div
              className="text-[#fff] w-[10rem] border-[#2A3C46] border border-opacity-[80%] bg-ElipseBg bg-no-repeat bg-cover rounded-md"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.7)",
              }}
            >
              <div className="flex flex-col gap-[0.5rem]">
                <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
                  <span>
                    <ProfileIcon />
                  </span>
                  <span>Profile</span>
                </NavLink>
                <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
                  <span>
                    <SettingsIcon />
                  </span>
                  <span>Settings</span>
                </NavLink>
                <NavLink className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42]">
                  <span>
                    <HelpIcon />
                  </span>
                  <span>Help</span>
                </NavLink>
                {isAuthenticated && (
                  <button
                    onClick={openLogoutModal}
                    className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42] whitespace-nowrap"
                  >
                    <span>
                      <LogoutIcon />
                    </span>
                    <span>Logout</span>
                  </button>
                )}
                {!isAuthenticated && (
                  <button
                    onClick={openLoginModal}
                    className="font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.48rem] px-[1rem] gap-[1rem] rounded-md hover:bg-[#2C2D30] hover:border-t-[1.5px] hover:border-[#383B42] whitespace-nowrap"
                  >
                    <span>
                      <LogoutIcon />
                    </span>
                    <span>Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
