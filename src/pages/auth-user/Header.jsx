import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import useToggle from "../../hooks/useToggle";

import { ReactComponent as HamburgerMenu } from "../../assets/svg/Hamburger.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import useAuthUser from "../../hooks/useAuthUser";
// import { ReactComponent as DotSvg } from '../../assets/svg/dotline.svg';

const Header = ({
  ismd,
  islg,
  headerLinks,
  toggleSidebar,
  isFullSidebarWidth,
  isSidebar,
}) => {
  const [isDropdown, toggleDropdown] = useToggle();

  const authUser = useAuthUser();
  const profileImageUrl = authUser?.twitter?.profileImageUrl;

  return (
    <div
      className={clsx(
        "sticky container top-0 z-20 max-w-screen-2xl mx-auto bg-[#060b12] mb-6"
      )}
    >
      {ismd ? (
        <div className={clsx("flex items-center justify-end")}>
          <div className="flex items-center justify-center gap-6 py-4 text-white">
            {authUser?.twitter ? (
              <img
                src={profileImageUrl}
                alt="profile-img"
                className="rounded-full"
              />
            ) : (
              "Profile"
            )}
            {/* <button className="p-2 px-10 font-Poppins text-white border-[1px] border-[#24343D] rounded-[52px]">
              Profile
            </button> */}
          </div>
        </div>
      ) : (
        <div
          className={clsx("flex items-center justify-between relative py-3.5")}
        >
          <Logo />
          <HamburgerMenu className="cursor-pointer" onClick={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Header;
