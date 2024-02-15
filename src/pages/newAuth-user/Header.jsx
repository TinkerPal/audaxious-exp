import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as EngagePortal } from "../../assets/svg/dashboardSvg/engageportal.svg";
import { ReactComponent as Search } from "../../assets/svg/dashboardSvg/search.svg";
import { ReactComponent as Bell } from "../../assets/svg/dashboardSvg/bell.svg";
import { ReactComponent as Line } from "../../assets/svg/dashboardSvg/linebtw.svg";
import { ReactComponent as LogoMd } from "../../assets/svg/dashboardSvg/audaxiousmd.svg";
const Header = () => {
  return (
    <div className="max-w-[1920px] fixed top-0 left-0 right-0 z-50">
      <div className="text-neutral-100 flex items-center justify-between relative py-[1.38rem] px-[4.34rem] bg-[#060B12] border-b border-b-[#18232C]">
        <div className="flex items-center gap-[2rem] xl:gap-[8.6rem]">
          <div className="hidden xl:block">
            <Logo />
          </div>
          <div className="block xl:hidden">
            <LogoMd />
          </div>
          <div
            className="text-[1.09rem] font-Poppins font-[300] text-[#cccbcb] flex gap-4 items-center"
            style={{ fontStyle: "normal" }}
          >
            <span>
              <EngagePortal />
            </span>{" "}
            <span>Engage portal</span>
          </div>
        </div>

        <div className="flex items-center gap-[1rem]">
          <div>
            <Search />
          </div>
          <div>
            <Bell />
          </div>
          <div>
            <Line />
          </div>
          <div>
            <div className="w-[2rem] h-[2rem] px-[0.4rem] py-[0.4rem] bg-[#EBBEF3] rounded-full flex items-center justify-center">
              <p className="text-[1.25rem] font-Poppins font-[600] text-neutral-950">
                H
              </p>
            </div>
          </div>
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
        <span>
          <EngagePortal />
        </span>{" "}
        <span>Engage portal</span>
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
