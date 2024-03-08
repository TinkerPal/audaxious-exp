import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as EngagePortalIcon } from "../../assets/svg/dashboardSvg/portal.svg";
import { ReactComponent as Search } from "../../assets/svg/dashboardSvg/search.svg";
import { ReactComponent as Bell } from "../../assets/svg/dashboardSvg/bell.svg";
import { ReactComponent as Line } from "../../assets/svg/dashboardSvg/linebtw.svg";
import { ReactComponent as LogoMd } from "../../assets/svg/dashboardSvg/audaxiousmd.svg";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as DashBoardIcon } from "../../assets/svg/dashboardSvg/dasboardIcon.svg";
import { ReactComponent as CommunityIcon } from "../../assets/svg/dashboardSvg/community.svg";
import { useSelector } from "react-redux";
const Header = ({ onOpen }) => {
  const token = useSelector((state) => state.isLogedIn);

  let title = "Dashboard";
  let specificIcon = <DashBoardIcon style={{ fill: "#FFF" }} />;
  const location = useLocation();
  const path = location.pathname;

  const openLoginModal = (bool) => {
    onOpen(bool);
  };
  // console.log(token);
  // useEffect(() => {
  //   const newToken = getToken();
  //   console.log("New token:", newToken);
  //   setToken(newToken);
  // }, [token]);

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
    <div className="max-w-[1920px] fixed top-0 left-0 right-0 z-50">
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
          {token && (
            <div>
              <div className="w-[2rem] h-[2rem] px-[0.4rem] py-[0.4rem] bg-[#EBBEF3] rounded-full flex items-center justify-center">
                <p className="text-[1.25rem] font-Poppins font-[600] text-neutral-950">
                  H
                </p>
              </div>
            </div>
          )}
          {!token && (
            <button
              onClick={() => openLoginModal(true)}
              className="whitespace-nowrap lg:inline-block px-[1rem] xl:px-[2rem] py-[0.2rem] xl:py-[0.5rem] rounded-[4px] text-[#FEFEFF] text-[16px] border-[0.75px] border-[#FEFEFF] shadow shadow-[#181E24] opacity-70"
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

<div className="max-w-[1920px]">
  <div className="text-neutral-100 flex items-center justify-between relative py-[1.38rem] px-[4.34rem] bg-[#060B12] border-b border-b-[#18232C]">
    <div className="flex items-center gap-[5.38rem]">
      <div>
        <Logo />
      </div>
      <div
        className="text-[1.09rem] font-Poppins font-[300] text-[#cccbcb] flex gap-4 items-center"
        style={{ fontStyle: "normal" }}
      >
        <span>specificIcon</span> <span>Engage portal</span>
      </div>
    </div>
    <div className="">
      <div>
        <Search />
      </div>
      <div>
        <Bell />
      </div>
      <div>
        <div className="px-[0.19rem] py-[0.7rem] w-[2.5rem] h-[2.5rem] bg-[#EBBEF3] rounded-full">
          <p className="text-">H</p>
        </div>
      </div>
    </div>
  </div>
</div>;
