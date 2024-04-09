import React, { useState } from "react";
import { ReactComponent as Cancel } from "../../../assets/svg/dashboardSvg/cancel.svg";
import { Transition } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as LogoMd } from "../../../assets/svg/dashboardSvg/audaxiousmd.svg";
import Audaxious from "../../../assets/svg/assets/AudaxiousLogofinal.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/svg/dashboardSvg/logout.svg";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { ReactComponent as DashBoardIcon } from "../../../assets/svg/dashboardSvg/dasboardIcon.svg";
import { ReactComponent as EngagePortalIcon } from "../../../assets/svg/dashboardSvg/portal.svg";
import { ReactComponent as CommunityIcon } from "../../../assets/svg/dashboardSvg/community.svg";
import { ReactComponent as PostIcon } from "../../../assets/svg/dashboardSvg/post.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/svg/dashboardSvg/profile.svg";
import clsx from "clsx";
const PhoneSidebar = ({ navOpen, navCloseHandler }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const onOpenHandler = () => {
    dispatch(authAction.logoutModalMethod(true));
    navCloseHandler();
  };

  const openLoginModal = () => {
    dispatch(authAction.onOpen());
    navCloseHandler();
  };
  return (
    <div
      className={`fixed top-0 left-0 transition-transform duration-500 z-30 bg-[#060B12]`}
    >
      <div className="">
        <Transition
          show={navOpen}
          enter="transition-transform duration-200"
          enterFrom="-translate-x-[calc(100%+40px)]"
          enterTo="translate-x-0"
          leave="transition-transform duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-[calc(100%+40px)]"
          className="absolute top-0 left-0 z-10 h-screen duration-150 bg-[#000] bg-opacity-75 w-screen lg:hidden pb-11"
        >
          <section
            // onClick={(e) => {
            //   e.preventDefault();
            //   if (e.target.tagName.toLowerCase() !== "section") {
            //     e.stopPropagation();
            //   }
            //   navOpenHandler();
            // }}
            className="absolute top-0 left-0 z-10 h-screen p-4 bg-[#060B12] w-80 lg:hidden pb-11"
          >
            <div className="flex flex-col h-full mt-4">
              <NavLink to="/" onClick={navCloseHandler} className="px-[1rem]">
                <img className="w-auto h-5 z-10" src={Audaxious} alt="" />
              </NavLink>

              <div className="flex flex-col flex-1 gap-2 mt-8">
                <NavLink
                  to={"/discover"}
                  onClick={navCloseHandler}
                  className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
                    path === "/dashboard" && "bg-[#79C4EC]/10"
                  }`}
                >
                  <div
                    className={`${
                      path === "/discover" ? "text-[#79C4EC]" : "none"
                    }`}
                  >
                    <DashBoardIcon />
                  </div>
                  <div
                    className={clsx(
                      path === "/discover" ? "text-[#79C4EC]" : "text-[#818282]"
                    )}
                  >
                    Discover
                  </div>
                </NavLink>
                <NavLink
                  to={"/engage-portal"}
                  onClick={navCloseHandler}
                  className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10  items-center    ${
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
                      path === "/engage-portal"
                        ? "text-[#79C4EC]"
                        : "text-[#818282]"
                    )}
                  >
                    Engage Portal
                  </span>
                </NavLink>
                <NavLink
                  className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
                    path === "/spaces" && "bg-[#79C4EC]/10"
                  }`}
                  to={"/spaces"}
                  onClick={navCloseHandler}
                >
                  <div
                    className={`${
                      path === "/spaces" ? "text-[#79C4EC]" : "none"
                    }`}
                  >
                    <CommunityIcon />
                  </div>
                  <span
                    className={clsx(
                      path === "/spaces" ? "text-[#79C4EC]" : "text-[#818282]"
                    )}
                  >
                    Spaces
                  </span>
                </NavLink>
                <NavLink
                  className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
                    path === "" && "bg-[#79C4EC]/10"
                  }`}
                  to={"/ai-creatives"}
                  onClick={navCloseHandler}
                >
                  <div
                    className={`${
                      path === "/spaces" ? "text-[#79C4EC]" : "none"
                    }`}
                  >
                    <PostIcon />
                  </div>
                  <span
                    className={clsx(
                      path === "/ai-creatives"
                        ? "text-[#79C4EC]"
                        : "text-[#818282] "
                    )}
                  >
                    AI Creatives
                  </span>
                </NavLink>
                <NavLink
                  className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
                    path === "" && "bg-[#79C4EC]/10"
                  }`}
                  to={"/profile"}
                  onClick={navCloseHandler}
                >
                  <div
                    className={`${
                      path === "/profile" ? "text-[#79C4EC]" : "none"
                    }`}
                  >
                    <ProfileIcon />
                  </div>
                  <span
                    className={clsx(
                      path === "/profile" ? "text-[#79C4EC]" : "text-[#818282] "
                    )}
                  >
                    Profile
                  </span>
                </NavLink>
                {isAuthenticated && (
                  <button
                    onClick={onOpenHandler}
                    className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
                      path === "" && "bg-[#79C4EC]/10"
                    }`}
                  >
                    <span>
                      <LogoutIcon />
                    </span>
                    <span className="">Logout</span>
                  </button>
                )}
                {!isAuthenticated && (
                  <button
                    onClick={openLoginModal}
                    className={`font-Poppins text-[1rem] font-[300] text-[#818282] flex mt-5 py-[0.4rem] px-[1rem] gap-[1rem] rounded-md  hover:bg-[#79C4EC]/10   items-center   ${
                      path === "" && "bg-[#79C4EC]/10"
                    }`}
                  >
                    <span>
                      <LogoutIcon />
                    </span>
                    <span className="">Login</span>
                  </button>
                )}
              </div>

              <div className="p-2 mt-6 font-medium">
                <div className="cursor-pointer pl-[2rem] p-[0.5rem] flex gap-10 items-center mt-36 bg-[#323333] rounded-md w-64">
                  <span>
                    <LogoMd fill={"#818282"} />
                  </span>
                  <span className="font-Poppins text-[#818282] text-[0.8rem] normal-case font-[400] leading-[150%]">
                    AudaXious Platform
                  </span>
                  {/* <span className="block xl:hidden font-Poppins text-[#818282] text-[0.8rem] normal-case font-[400] leading-[150%]">
                V 1.1.0
              </span> */}
                </div>
              </div>
            </div>

            <button
              className="absolute top-4 -right-20 w-20"
              // onClick={navCloseHandler}
              onClick={(e) => {
                e.preventDefault();
                if (e.target.tagName.toLowerCase() !== "button") {
                  e.stopPropagation();
                }
                navCloseHandler();
                // console.log("E WORK", uuid);
              }}
            >
              <div className="h-screen">
                {" "}
                <Cancel />
              </div>
            </button>
          </section>
        </Transition>
      </div>
    </div>
  );
};

export default PhoneSidebar;
