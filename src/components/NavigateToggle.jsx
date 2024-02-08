import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink from React Router
import { ReactComponent as EdithIcon } from "../assets/svg/edit-tweet-img.svg";
import { ReactComponent as Star } from "../assets/svg/starsss.svg";

const NavigationToggle = () => {
  const location = useLocation();

  const navLinks = [
    {
      name: "Create With AI",
      to: "/post-management/create-post-with-ai",
      icon: <Star />,
    },
    {
      name: "Create manually",
      to: "/post-management/create-post-manually",
      icon: <EdithIcon />,
    },
  ];

  return (
    <div className="flex justify-center items-center my-8">
      {navLinks.map((nav, i) => (
        <div
          className={`relative border-[0.5px] border-[#2A3C46] p-3.5 px-6 rounded-sm ${
            location.pathname === nav.to ? "active" : ""
          }`}
          key={i}
        >
          <NavLink
            to={nav.to}
            activeClassName="active-link"
            className="font-Poppins text-[12px] font-light gap-2 flex items-center text-white"
          >
            {nav.icon}
            {nav.name}
          </NavLink>
          {location.pathname === nav.to && (
            <div className="absolute inset-y-0 left-0 w-[4px] bg-[#79C4EC]" />
          )}
        </div>
      ))}
    </div>

    // <div className="flex justify-center items-center my-8">
    //   {navLinks.map((nav, i) => (
    //     <div className="border border-[#2A3C46] p-3.5 px-6 rounded-sm gap-2 flex items-center">
    //       <NavLink
    //         className="font-Poppins text-[12px] font-light "
    //         to={nav.to}
    //         style={{
    //           border: location.pathname === nav.to ? "active" : "",
    //         }}
    //       >
    //         <span>
    //           {nav.icon}
    //           {nav.name}
    //         </span>
    //       </NavLink>
    //     </div>
    //   ))}
    // </div>
  );
};

export default NavigationToggle;
