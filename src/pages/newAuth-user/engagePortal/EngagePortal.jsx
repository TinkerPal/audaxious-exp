import { ReactComponent as Friends } from "../../../assets/svg/dashboardSvg/friends.svg";
import { ReactComponent as Activities } from "../../../assets/svg/dashboardSvg/activities.svg";
import { ReactComponent as Hamburger } from "../../../assets/svg/dashboardSvg/hambuger.svg";
import { ReactComponent as Dropdown } from "../../../assets/svg/dashboardSvg/dropdown.svg";
import { useState } from "react";
import clsx from "clsx";
import { ReactComponent as Brick2 } from "../../../assets/svg/brickline2.svg";
import { ReactComponent as Brick1 } from "../../../assets/svg/brick-line.svg";
import { ReactComponent as SeachIcon } from "../../../assets/svg/dashboardSvg/searchIcon.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Campaigns from "./Campaignss";
import TopEarners from "./TopEarners";

const EngagePortals = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <div
      className="ml-[0.5rem] md:ml-[2rem] xl:ml-[1rem] max-w-[1670px]"
      // ref={scrollRef}
    >
      <div>
        <div className="bg-heroCustom bg-no-repeat bg-cover py-[1rem] px-[1rem] rounded-md border-[#314048] flex justify-between border-[0.5px] relative">
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
        </div>

        <section className="">
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
        </section>

        <div className="mt-[1.6rem] bg-[#060B12]">
          <div className="px-[0.8rem] md:px-[1.5rem] gap-[2rem] xl:px-[3.16rem] pt-[0.5rem] border-[#314048] border-[0.5px] flex items-center max-w-[1670px] overflow-x-auto justify-between rounded-t-md">
            <div className="flex gap-2 xl:gap-5 items-center cursor-pointer">
              <span>
                <Hamburger />
              </span>
              <span className="whitespace-nowrap font-Poppins text-[0.875rem] text-neutral-400">
                All posts
              </span>
              <span>
                <Dropdown />
              </span>
            </div>
            <div className="flex items-center py-[0.6rem]">
              <div className="border-[1px] border-r-0 rounded-l-[2.5rem] border-[#2A3C46] border-opacity-[80%] py-[0.69rem] md:py-[0.7rem] px-[1rem] cursor-pointer">
                <SeachIcon />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search spaces.."
                className="rounded-[2.5rem] placeholder:font-Poppins placeholder:font-[300] placeholder:text-[#536169] rounded-l-none w-[11rem] md:w-[11rem] lg:w-[22.6rem] py-[0.5rem] border-[1px] border-[#2A3C46] border-opacity-[80%] bg-transparent outline-none px-[0.5rem]"
              />
            </div>
            {/* <div className="flex gap-6 xl:gap-3 px-6 pt-[0.6rem] md:pt-[1rem]">
              <div
                className={clsx(
                  "flex flex-col items-center pb-[0.6rem] md:pb-[1rem]",
                  toggle === 1 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(1)}
              >
                <span>
                  <X style={{ fill: toggle === 1 ? "#FFF" : "#A5A5A5" }} />
                </span>
                <span
                  className={clsx(
                    "whitespace-nowrap",
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 1 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  twitter (X)
                </span>
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 2 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(2)}
              >
                <span>
                  <Instagram
                    style={{ fill: toggle === 2 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 2 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  instagram
                </span>
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 3 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(3)}
              >
                <span>
                  <Telegram
                    style={{ fill: toggle === 3 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 3 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  Telegram
                </span>
              </div>

              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 4 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(4)}
              >
                <span>
                  <Discord
                    style={{ fill: toggle === 4 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 4 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  Discord
                </span>
              </div>
              <div
                className={clsx(
                  "flex flex-col items-center pb-[1rem]",
                  toggle === 5 ? "border-b-[5px] border-[#FFF]" : ""
                )}
                onClick={() => toggleTabHandler(5)}
              >
                <span>
                  <Facebook
                    style={{ fill: toggle === 5 ? "#FFF" : "#A5A5A5" }}
                  />
                </span>
                <span
                  className={clsx(
                    "font-Poppins text-[0.8rem] font-[300] normal-case",
                    toggle === 5 ? "text-[#FFF]" : "text-neutral-400"
                  )}
                >
                  Facebook
                </span>
              </div>
            </div> */}

            {/* <div>
              <button className="whitespace-nowrap px-[0.5rem] md:px-[1rem] py-[0.3rem] md:py-[0.5rem] bg-[#EBEDED] rounded-sm font-Poppins font-[300] text-[0.6rem] md:text-[0.8rem] text-[#060B12]">
                Promote a post
              </button>
            </div> */}
          </div>

          {/* grid */}
          <div className="">
            {/* twitter post */}
            <div className={clsx(toggle === 1 ? "block" : "hidden")}>
              <div className="">
                <Campaigns />
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
