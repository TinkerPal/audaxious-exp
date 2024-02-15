import { ReactComponent as Friends } from "../../assets/svg/dashboardSvg/friends.svg";
import { ReactComponent as Activities } from "../../assets/svg/dashboardSvg/activities.svg";
import { ReactComponent as Hamburger } from "../../assets/svg/dashboardSvg/hambuger.svg";
import { ReactComponent as Dropdown } from "../../assets/svg/dashboardSvg/dropdown.svg";
import { ReactComponent as X } from "../../assets/svg/dashboardSvg/x.svg";
import { ReactComponent as Instagram } from "../../assets/svg/dashboardSvg/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/svg/dashboardSvg/telegram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/dashboardSvg/facebook.svg";
import { ReactComponent as Discord } from "../../assets/svg/dashboardSvg/discord.svg";
import Twitter from "../../components/socialmedia/Twitter";
import { useState, useCallback } from "react";
import clsx from "clsx";

const EngagePortals = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTabHandler = useCallback((id) => {
    setToggle(id);
  }, []);

  return (
    <div className="container overflow-y-auto">
      <div className="bg-heroCustom bg-no-repeat bg-cover py-[1rem] px-[1rem] rounded-md flex justify-between border-[#314048] border-[0.5px]">
        <div className="flex items-center gap-[1rem]">
          <div>
            <Friends />
          </div>
          <div className="font-Poppins font-normal">
            <p className="text-[1.1rem] xl:[1.5rem] text-neutral-300 font-[400] font-Poppins">
              Promote & Engage with Posts
            </p>
            <p className="text-[0.7rem] xl:text-[1rem] font-[275] text-neutral-400 font-Poppins">
              Create, Like , comment, share contents and earn exciting rewards
            </p>
          </div>
        </div>

        <div>
          <Activities />
        </div>
      </div>

      <div className="mt-[1.75rem]">
        <div className="px-[3.16rem] pt-[1.5rem] border-[#314048] border-[0.5px] flex items-center max-w-[1920px] container overflow-x-auto justify-between rounded-t-md">
          <div className="flex gap-5 items-center cursor-pointer">
            <span>
              <Hamburger />
            </span>
            <span className="font-Poppins text-[0.875rem] text-neutral-400">
              All posts
            </span>
            <span>
              <Dropdown />
            </span>
          </div>

          <div className="flex gap-3">
            <div
              className={clsx(
                "flex flex-col items-center pb-[1rem]",
                toggle === 1 ? "border-b-[5px] border-[#FFF]" : ""
              )}
              onClick={() => toggleTabHandler(1)}
            >
              <span>
                <X style={{ fill: toggle === 1 ? "#FFF" : "#A5A5A5" }} />
              </span>
              <span
                className={clsx(
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
                <Telegram style={{ fill: toggle === 3 ? "#FFF" : "#A5A5A5" }} />
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
                <Discord style={{ fill: toggle === 4 ? "#FFF" : "#A5A5A5" }} />
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
                <Facebook style={{ fill: toggle === 5 ? "#FFF" : "#A5A5A5" }} />
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
          </div>

          <div>
            <button className="px-[1rem] py-[0.5rem] bg-[#EBEDED] rounded-sm font-Poppins font-[300] text-[0.8rem] text-[#060B12]">
              Promote a post
            </button>
          </div>
        </div>

        {/* grid */}
        <div className="border-[#314048] bg-[#080E15]">
          {/* twitter post */}
          <div className={clsx(toggle === 1 ? "block" : "hidden")}>
            <Twitter />
          </div>

          <div className={clsx(toggle === 2 ? "block" : "hidden")}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagePortals;
