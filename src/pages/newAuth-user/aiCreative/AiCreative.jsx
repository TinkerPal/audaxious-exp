import { useState } from "react";
import clsx from "clsx";
import EngageBanner from "../engagePortal/EngageBanner";
import SearchSort from "../engagePortal/SearchSort";
import AiCreativTab from "./AiCreativeTab";
import { Outlet, useLocation } from "react-router-dom";
import TwitterPost from "./TwitterPost";
import ChooseCreateMethod from "./ChooseCreateMethod";

const AiCreative = () => {
  const [toggle, setToggle] = useState(0);
  const [search, setSearch] = useState();

  const location = useLocation();

  let path = location.pathname;

  const toggleHandler = (id) => {
    setToggle(id);
  };

  return (
    <>
      <ChooseCreateMethod />
      <div className="max-w-[1670px] bg-black h-screen text-[#FFF]">
        <div>
          <EngageBanner
            title={"Create & Schedule post using AudaXious AI"}
            description={`Utilize the power of our AI to schedule and automate your posts OR simply post manually`}
          />
          <AiCreativTab toggle={toggle} toggleHandler={toggleHandler} />
          <SearchSort onChangeKeyword={setSearch} />
        </div>
        <div>
          <div>
            <Outlet />
          </div>
          <div
            className={clsx(
              path === "/ai-creatives/ai" || path === "/ai-creatives/manual"
                ? "hidden"
                : "block"
            )}
          >
            <div className={clsx(toggle === 0 ? "block" : "hidden")}>
              <TwitterPost />
            </div>
            <div className={clsx(toggle === 1 ? "block" : "hidden")}>
              Instagram
            </div>
            <div className={clsx(toggle === 2 ? "block" : "hidden")}>
              Telegram
            </div>
            <div className={clsx(toggle === 3 ? "block" : "hidden")}>
              Discord
            </div>
            <div className={clsx(toggle === 4 ? "block" : "hidden")}>
              Facebook
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCreative;
