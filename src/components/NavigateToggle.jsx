import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink from React Router
// import { ReactComponent as EdithIcon } from "../assets/svg/edit-tweet-img.svg";
// import { ReactComponent as Star } from "../assets/svg/starsss.svg";

const NavigationToggle = () => {
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      to: "/post-management/create-post-with-ai",
    },
    {
      name: "About",
      to: "/post-management/create-post-manually",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-5">
      {/* Use NavLink instead of Link */}
      {navLinks.map((nav, i) => (
        <NavLink
          to={nav.to}
          style={{
            border:
              location.pathname === "/post-management/create-post-with-ai"
                ? "2px solid green"
                : "",
          }}
        >
          <span className="text-white">{nav.name}</span>
        </NavLink>
      ))}
      {/* <NavLink
        to="/post-management/create-post-with-ai"
        // style={(isActive) => ({ color: isActive ? "green" : "blue" })}
        style={{
          border:
            location.pathname === "/post-management/create-post-with-ai"
              ? "2px solid green"
              : "2px solid blue",
        }}
        className="flex items-center font-Poppins text-[12px] font-light bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent"
      >
        <Star /> Create With AI
      </NavLink>
      <NavLink
        to="/post-management/create-post-manually"
        // className="flex items-center gap-2"
        // style={(isActive) => ({ color: isActive ? "green" : "blue" })}
        style={{
          border:
            location.pathname === "/post-management/create-post-manually"
              ? "2px solid green"
              : "2px solid blue",
        }}
        className="flex gap-2 items-center text-[#E8E8E8] font-Poppins text-[12px] font-light"

        // className="px-4 py-2 rounded bg-gray-200 text-gray-800"
      >
        <EdithIcon /> Create manually
      </NavLink> */}
    </div>
  );
};

export default NavigationToggle;
