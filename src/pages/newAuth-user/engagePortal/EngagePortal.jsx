// import { ReactComponent as Friends } from "../../../assets/svg/dashboardSvg/friends.svg";
// import { ReactComponent as Activities } from "../../../assets/svg/dashboardSvg/activities.svg";
// import { ReactComponent as Hamburger } from "../../../assets/svg/dashboardSvg/hambuger.svg";
// import { ReactComponent as Dropdown } from "../../../assets/svg/dashboardSvg/dropdown.svg";
import { useState } from "react";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Campaigns from "./Campaignss";
// import TopEarners from "./TopEarners";
import EngageBanner from "./EngageBanner";
import SearchSort from "./SearchSort";

const EngagePortals = () => {
  const [toggle, setToggle] = useState(1);
  const [search, setSearch] = useState("");

  return (
    <div
      className="max-w-[1670px] bg-black h-screen"
      // ref={scrollRef}
    >
      <div>
        <EngageBanner
          title={"ADX Engage to Earn Portal"}
          description={`Where members engage with their favorite web3 projects and earn
          rewards are airdrops for their engagements.`}
        />
        <SearchSort onChangeKeyword={setSearch} />
        {/* <div className="bg-heroCustom bg-no-repeat bg-cover py-[1rem] px-[1rem] rounded-md border-[#314048] flex justify-between border-[0.5px] relative">
          <div className="absolute top-0 left-0 z-1 hidden md:block">
            <Brick1 />
          </div>
          <div className="flex items-center gap-[1rem] relative">
            <div className="hidden md:block z-1">
              <Friends />
            </div>
            <div className="font-Poppins font-normal">
              <p className="text-[0.9rem] md:text-[1.1rem] xl:[1.5rem] text-neutral-300 font-[400] font-Poppins">
                Promote & Engage with Posts
              </p>
              <p className="text-[0.5rem] lg:text-[0.7rem] xl:text-[1rem] font-[275] text-neutral-400 font-Poppins">
                Create, Like , comment, share contents and earn exciting rewards
              </p>
            </div>
          </div>

          <div className="hidden md:block z-1">
            <Activities />
          </div>
          <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
            <Brick2 />
          </div>
        </div> */}

        {/* <section className="">
          <div className="mt-[1rem] border-[#314048] border-[1px]">
            <div className="flex">
              <div className="px-[0.5rem] md:px-[1.62rem] py-[0.6rem] border-[#314048] border-r-[1px] flex items-center">
                <p className="whitespace-nowrap font-Poppins text-[0.87rem] font-[400] text-[#E8E8E8]">
                  Top Earners
                </p>
              </div>
              <TopEarners />
            </div>
          </div>
        </section> */}

        <div className="mt-[1.6rem] bg-black">
          {/* grid */}
          <div className="">
            {/* twitter post */}
            <div className={clsx(toggle === 1 ? "block" : "hidden")}>
              <div className="">
                <Campaigns search={search} />
              </div>
            </div>

            {/* <div className={clsx(toggle === 2 ? "block" : "hidden")}>
              <p className="text-white">Instagram tab</p>
            </div>
            <div className={clsx(toggle === 3 ? "block" : "hidden")}>
              <p className="text-white">Telegram tab</p>
            </div>
            <div className={clsx(toggle === 4 ? "block" : "hidden")}>
              <p className="text-white">Discord tab</p>
            </div>
            <div className={clsx(toggle === 5 ? "block" : "hidden")}>
              <p className="text-white">Facebook tab</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagePortals;
