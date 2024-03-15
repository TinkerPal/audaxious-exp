import React, { useState } from "react";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import { ReactComponent as Defi } from "../../../assets/svg/dashboardSvg/defi.svg";
import { ReactComponent as Gaming } from "../../../assets/svg/dashboardSvg/gaming.svg";
import { ReactComponent as Startups } from "../../../assets/svg/dashboardSvg/startups.svg";
import { ReactComponent as Music } from "../../../assets/svg/dashboardSvg/music.svg";
import { ReactComponent as Bnb } from "../../../assets/svg/dashboardSvg/bnb.svg";
import { ReactComponent as Eth } from "../../../assets/svg/dashboardSvg/eth.svg";
import { ReactComponent as Details } from "../../../assets/svg/dashboardSvg/details.svg";
import clsx from "clsx";
import Twitter from "../../../components/socialmedia/Twitter";
import { TOPEARNERS } from "../../../utils/postApi";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";

const SpaceDetail = () => {
  const [toggle, setToggle] = useState(1);
  //   const [selectedPostId, setSelectedPostId] = useState(null);
  const dispatch = useDispatch();
  // const token = getToken();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

  const joinSpaceHandler = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    dispatch(authAction.loggin());
  };
  const toggleHandler = (id) => {
    setToggle(id);
  };
  //   const loadTweetByIdHandler = (id) => {
  //     setOpen(true);
  //     setSelectedPostId(id);
  //     setSingleTweet(id);
  //   };
  return (
    <div className="text-[#FFF] p-[0rem] mt-[-2rem] border-[#2A3C46] md:border-l border-opacity-[80%] ml-[0.7rem] md:ml-[2rem] xl:ml-[0.7rem]">
      <div className="h-[3.5rem] md:h-[8rem] lg:h-[8.5rem] xl:h-[10.5rem] mr-[-1.9rem]">
        <img src="/tweetImages/header.svg" alt="" className="w-[100%]" />
      </div>

      <div className="md:container md:ml-[0rem]">
        <div className="flex flex-wrap md:flex-nowrap gap-[1rem] md:gap-[3rem] lg:gap-[17rem] items-end mt-[-2rem] md:mt-[-3.5rem]">
          <div className="ml-[1rem] md:ml-[0rem]">
            <img
              src="/tweetImages/audaxious.svg"
              width="100"
              height="100"
              alt=""
              className="xl:w-[10rem] w-[5rem] md:w-[9rem] xl:h-[10rem] md:h-[9rem] h-[5rem] object-cover rounded-full border border-[#2A3C46] border-opacity-[80%]"
            />
          </div>
          <div className="flex gap-[1.5rem] md:gap-[3rem] items-center flex-wrap md:flex-nowrap">
            <div className="flex gap-[1rem] items-center">
              <div className="flex items-center gap-[0.63rem] px-[0.63rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                <span>
                  <Group />
                </span>
                <span className="h-[1.5rem] w-[1px] bg-[#314048]"></span>
                <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                  {200}k
                </span>
              </div>
              <div className="flex gap-[0.5rem] items-center">
                <span>
                  <World />
                </span>
                <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                <span>
                  <Retweets />
                </span>
                <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                <span>
                  <Discords />
                </span>
              </div>
            </div>
            <div>
              {!isAuthenticated && (
                <button
                  onClick={joinSpaceHandler}
                  className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                >
                  Join space
                </button>
              )}
              {isAuthenticated && (
                <button
                  // onClick={joinSpaceHandler}
                  className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                >
                  Joined
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="font-Poppins mt-[1rem] flex flex-col gap-[0.6rem]">
          <div className="flex gap-[0.2rem] md:gap-[2rem] items-center flex-wrap md:flex-nowrap">
            <p className="text-[#FFF] text-[1.5rem] md:text-[2rem] font-normal normal-case font-Poppins">
              Audaxious Inc
            </p>
            <p className="text-[#6DE6AE] text-[0.7rem] md:text-[1rem] font-normal font-Poppins">
              20 Active campaigns
            </p>
          </div>
          <div className="w-[100%] md:w-[90%] max-w-[35rem]">
            <p className="text-[#A5A5A5] text-[0.875rem] md:text-[1.25rem] leading-[140%] font-Poppins">
              The next-gen smart platform for multi-chain yield maximization and
              with deflationary ABRA token. Boost yields, automate manual
              actions, save gas and your time.
            </p>
          </div>
          <div className="flex gap-[1rem] flex-wrap">
            <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
              <span>
                <Defi />
              </span>
              <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                De-Fi
              </span>
            </div>
            <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
              <span>
                <Gaming />
              </span>
              <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                Gaming
              </span>
            </div>
            <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
              <span>
                <Startups />
              </span>
              <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                Startups
              </span>
            </div>
            <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
              <span>
                <Music />
              </span>
              <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                Music
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[2rem]">
          <div className="flex text-[1rem] font-Poppins font-[300]">
            <div
              onClick={() => toggleHandler(1)}
              className={clsx(
                "cursor-pointer py-[0.5rem] whitespace-nowrap text-center px-[1rem]",
                toggle === 1
                  ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                  : "text-[#D3D3D3]"
              )}
            >
              <span className="pt-[0.5rem]">Campaigns</span>
            </div>
            <div
              onClick={() => toggleHandler(2)}
              className={clsx(
                "cursor-pointer py-[0.5rem] text-center px-[1rem]",
                toggle === 2
                  ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                  : "text-[#D3D3D3]"
              )}
            >
              Leaderboard
            </div>
          </div>
          <div className="ml-[-1rem] lg:ml-[-2rem] xl:[-2rem] w-[100%] h-[1px] bg-[#19242D]"></div>
          <div className={clsx("mt-[1rem]", toggle === 1 ? "block" : "hidden")}>
            <Twitter
            //   onLoadTweet={loadTweetByIdHandler}
            //   selectedPostId={selectedPostId}
            />
          </div>
          <div className={clsx("mt-[1rem]", toggle === 2 ? "block" : "hidden")}>
            <div className="flex gap-[2rem] xl:gap-[5rem] flex-wrap md:flex-nowrap">
              <div className="border-[#314048] border-[0.5px] rounded-md bg-ElipseBg bg-no-repeat bg-cover w-[46rem]">
                <div className="border-[rgb(49,64,72)] border-b-[0.5px] py-[1rem] px-[1rem] flex gap-[1rem] items-center">
                  <p className="text-[#E8E8E8] font-Poppins text-[1rem] font-normal">
                    All time
                  </p>
                  <span className="w-[1.5px] h-[1rem] bg-[#E8E8E8]"></span>
                  <p className="text-[#E8E8E8] font-Poppins text-[1rem] font-normal">
                    View top ranked
                  </p>
                </div>
                <div className="py-[1rem] flex flex-col px-[1rem] gap-[1rem]">
                  {TOPEARNERS.slice(0, 7).map((earners, index) => (
                    <div className="flex justify-between" key={earners.id}>
                      <div className="flex items-center gap-[0.9rem]">
                        <span className="text-[#FFF] text-[0.96rem] normal font-Poppins font-[300]">
                          {index + 1}
                        </span>
                        <div className="">
                          <img
                            src={earners.src}
                            height={"100"}
                            width={"100"}
                            className="w-[2.3rem] h-[2.3rem] object-cover rounded-full"
                          />
                        </div>
                        <span className="text-[#FFF] text-[0.96rem] normal font-Poppins font-[300]">
                          {earners.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-[1rem]">
                        <span
                          className={clsx(
                            "whitespace-nowrap text-[0.5rem] md:text-[0.96rem]",
                            earners.coin.eth
                              ? "text-[#F04086]"
                              : "text-[#E1D356]"
                          )}
                        >
                          {earners.coin.eth
                            ? `${earners.coin.eth} ETH`
                            : `${earners.coin.btc} BNB`}
                        </span>
                        <span>{earners.coin.eth ? <Eth /> : <Bnb />}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[22rem] md:h-[24rem] lg:h-[22rem] xl:h-[20rem] bg-ElipseBg bg-no-repeat bg-cover border-[#314048] border-[0.5px] rounded-md p-[1rem] flex flex-col gap-[1.5rem] items-center">
                <div className="mt-[1.5rem]">
                  <span>
                    <Details />
                  </span>
                </div>
                <div>
                  <p className="text-[1.125rem] font-[300] font-Poppins leading-[140%] text-[#E8E8E8] text-center">
                    You have no ranking in this community, complete task to
                    become top of the leader-board
                  </p>
                </div>

                <button className="text-[#060B12] whitespace-nowrap font-Poppins font-[400] text-[1rem] w-[100%] lg:w-[90%] px-[1rem] py-[0.5rem] bg-[#EBEDED] rounded-md">
                  Commence tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetail;
