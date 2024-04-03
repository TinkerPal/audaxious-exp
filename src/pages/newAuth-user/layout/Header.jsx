import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import AudaxiousLogo from "../../../assets/svg/assets/AudaxiousLogofinal.svg";
import { ReactComponent as EngagePortalIcon } from "../../../assets/svg/dashboardSvg/portal.svg";
import { ReactComponent as Search } from "../../../assets/svg/dashboardSvg/search.svg";
import { ReactComponent as Bell } from "../../../assets/svg/dashboardSvg/bell.svg";
import { ReactComponent as Line } from "../../../assets/svg/dashboardSvg/linebtw.svg";

import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as DashBoardIcon } from "../../../assets/svg/dashboardSvg/dasboardIcon.svg";
import { ReactComponent as CommunityIcon } from "../../../assets/svg/dashboardSvg/community.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/svg/dashboardSvg/settings.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/dashboardSvg/profile.svg";
import { ReactComponent as HelpIcon } from "../../../assets/svg/dashboardSvg/help.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/dashboardSvg/logout.svg";
import { ReactComponent as HamburggerMenu } from "../../../assets/svg/dashboardSvg/menus.svg";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authAction } from "../../../store/authorizationSlice";
import PhoneSidebar from "./PhoneSidebar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

  const username = useSelector((state) => state.authentication.userName);
  const [navOpen, setNavOpen] = useState(false);
  const navOpenHandler = () => {
    setNavOpen(true);
    document.body.classList.add("overflow-hidden", "lg:overflow-auto");
  };

  const navCloseHandler = () => {
    setNavOpen(false);
    document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  };
  let title = "Dashboard";
  let specificIcon = <DashBoardIcon style={{ fill: "#FFF" }} />;
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  const openLogoutModal = () => {
    dispatch(authAction.logoutModalMethod(true));
  };

  // const logoutHandler = () => {
  //   localStorage.removeItem("loggedin");
  //   dispatch(authAction.logout());
  // };

  const openLoginModal = () => {
    dispatch(authAction.onOpen());
  };

  let butons = (
    <button
      onClick={openLoginModal}
      className="whitespace-nowrap lg:inline-block px-[1rem] xl:px-[2rem] py-[0.2rem] xl:py-[0.5rem] rounded-[4px] text-black text-[16px] border-[0.75px] border-[#79C4EC] bg-[#79C4EC]  shadow shadow-[#181E24] opacity-70"
    >
      Log In
    </button>
  );

  if (isAuthenticated) {
    butons = (
      <div onMouseEnter={showMenuHandler}>
        <div className="w-[2rem] h-[2rem] px-[0.4rem] py-[0.4rem] bg-[#EBBEF3] rounded-full flex items-center justify-center">
          <p className="text-[1.25rem] font-Poppins font-[600] text-neutral-950">
            {username ? username.slice(0, 1) : ""}
          </p>
        </div>
        {showMenu && isAuthenticated && (
          <div className="absolute mt-2 right-5 md:right-10 bg-black">
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
    specificIcon = (
      <div className={`${path === "/profile" ? "text-[#79C4EC]" : "none"}`}>
        <CommunityIcon />
      </div>
    );
  } else if (path.startsWith("/profile")) {
    title = "Profile";
    specificIcon = (
      <div className={`${path === "/profile" ? "text-[#79C4EC]" : "none"}`}>
        <ProfileIcon />
      </div>
    );
  }
  return (
    <div
      className="relative max-w-[1618px] bg-black"
      onMouseLeave={hideMenuHandler}
      onMouseEnter={hideMenuHandler}
    >
      <div className="fixed top-0 left-0 right-0 z-[2] bg-black">
        <div className="text-neutral-100 flex items-center justify-between relative py-[1.38rem] px-[1.2rem] md:px-[4.34rem]  border-b bg-black border-b-[#18232C]">
          <button
            type="button"
            className={`lg:hidden transition-opacity ${
              navOpen ? "opacity-0" : "opacity-100"
            }`}
            onClick={navOpenHandler}
          >
            <HamburggerMenu />
          </button>
          <PhoneSidebar
            navOpen={navOpen}
            navCloseHandler={navCloseHandler}
            navOpenHandler={navOpenHandler}
          />
          <div className=" xl:ml-[250px] flex items-center gap-[0.5rem] md:gap-[2rem] xl:gap-[8.6rem]">
            <div
              className="text-[0.8rem] md:text-[1.09rem] font-Poppins font-[300] text-[#cccbcb] flex gap-4 items-center"
              style={{ fontStyle: "normal" }}
            >
              <span className="">{specificIcon}</span>{" "}
              <span className="whitespace-nowrap">{title}</span>
            </div>
          </div>

          <div className="flex items-center gap-[0.3rem] md:gap-[1rem]">
            <div onMouseEnter={hideMenuHandler}>
              <Bell />
            </div>
            <div>
              <Line />
            </div>
            {butons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
