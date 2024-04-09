import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as EdithIcon } from "../../../assets/svg/edit-tweet-img.svg";
import { ReactComponent as Star } from "../../../assets/svg/starsss.svg";
import clsx from "clsx";

const TogglePost = () => {
  const location = useLocation();

  const navLinks = [
    {
      name: "Create With AI",
      to: "/ai-creatives/ai",
      icon: <Star />,
    },
    {
      name: "Create manually",
      to: "/ai-creatives/manual",
      icon: <EdithIcon />,
    },
  ];

  return (
    <div className="flex justify-center items-center my-8">
      {navLinks.map((nav, i) => (
        <NavLink
          to={nav.to}
          //   activeclassname="active"
          //   className={clsx(
          //     "relative border-[0.5px] border-[#2A3C46] p-3.5 px-6 rounded-sm",
          //     location.pathname === nav.to ? "bg-white" : "bg-transparent"
          //   )}
          className={({ isActive }) =>
            isActive
              ? "relative border-[0.5px] border-[#2A3C46] p-3.5 px-6 rounded-sm text-[#79C4EC] bg-[#08090c]"
              : "relative border-[0.5px] border-[#2A3C46] p-3.5 px-6 rounded-sm text-white"
          }
          end
          key={i}
        >
          <div className="font-Poppins text-[12px] font-light gap-2 flex items-center">
            {nav.icon}
            {nav.name}
          </div>
          {location.pathname === nav.to && (
            <div className="absolute inset-y-0 left-0 w-[4px] bg-[#79C4EC]" />
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default TogglePost;
