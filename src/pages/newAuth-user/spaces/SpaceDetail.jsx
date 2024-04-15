import React, { useEffect, useState } from "react";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Telegram } from "../../../assets/svg/dashboardSvg/telegramspace.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import { ReactComponent as Defi } from "../../../assets/svg/dashboardSvg/defi.svg";
import { Verify } from "iconsax-react";
// import { ReactComponent as Gaming } from "../../../assets/svg/dashboardSvg/gaming.svg";
// import { ReactComponent as Startups } from "../../../assets/svg/dashboardSvg/startups.svg";
// import { ReactComponent as Music } from "../../../assets/svg/dashboardSvg/music.svg";
// import { ReactComponent as Bnb } from "../../../assets/svg/dashboardSvg/bnb.svg";
// import { ReactComponent as Eth } from "../../../assets/svg/dashboardSvg/eth.svg";
// import { ReactComponent as Details } from "../../../assets/svg/dashboardSvg/details.svg";
import clsx from "clsx";
// import Twitter from "../../../components/socialmedia/Twitter";
// import { TOPEARNERS } from "../../../utils/postApi";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { useParams } from "react-router-dom";
import {
  getAllJoinedSpaces,
  getSpaceById,
  joinSpace,
} from "../../../store/spaceActions";
import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";
import { toast } from "react-toastify";
import Layout from "../../../layout/Layout";
import { getAllCampaignsBySpace } from "../../../store/campaignActions";
import SpaceCampaigns from "./SpaceCampaigns";
import LeadershipBoard from "./LeadershipBoard";
import Modal from "../../../components/socialmedia/Modal";
import CreateCampaign from "./CreateCampaign";

const SpaceDetail = () => {
  const [toggle, setToggle] = useState(1);
  const [spaceDetail, setSpaceDetail] = useState({});
  // const [openCampaignModal, setOpenCampaignModal] = useState(false);
  const campaigns = useSelector((state) => state.space.spaceCampaigns);
  const openCampaignModal = useSelector(
    (state) => state.space.openCampaignModal
  );
  //   const [selectedPostId, setSelectedPostId] = useState(null);
  const dispatch = useDispatch();
  // const token = getToken();
  const params = useParams();
  const spaceId = params.spaceId;
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

  const loading = useSelector((state) => state.space.loading);
  const userId = useSelector((state) => state.authentication.userId);
  const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
  const memberState = useSelector((state) => state.space.isMember);
  const joinedSpaceIds = joinedSpacesArray.map((space) => space.space_uuid);
  const campaignCreated = useSelector((state) => state.space.campaignCreated);

  // console.log(joinedSpacesArray);

  let showJoinButton = false;
  if (userId === spaceDetail.creator_uuid) {
    showJoinButton = true;
  }

  useEffect(() => {
    const joinedSpaces = async () => {
      // dispatch(spaceActions.setLoading(true));
      try {
        const result = await dispatch(getAllJoinedSpaces());
        // dispatch(spaceActions.setLoading(false));
        dispatch(spaceActions.replaceJoinSpace(result.data));
        // console.log(result.data);

        // console.log("My SPACES", result.data);
      } catch (error) {
        // dispatch(spaceActions.setLoading(false));
        console.log(error);
      }
    };
    joinedSpaces();
  }, [dispatch]);

  useEffect(() => {
    const getSpaces = async () => {
      try {
        const result = await dispatch(getSpaceById(spaceId));
        // console.log(result.data);
        setSpaceDetail(() => result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSpaces();
  }, [dispatch, spaceId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const getCampaigns = async () => {
        try {
          const result = await dispatch(
            getAllCampaignsBySpace(spaceDetail.uuid)
          );
          dispatch(spaceActions.replaceSpaceCampaigns(result.data));
        } catch (error) {
          console.log(error);
        }
      };
      getCampaigns();
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, spaceDetail, campaignCreated]);

  const joinSpaceHandler = async () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    dispatch(spaceActions.setLoading(true));
    try {
      // console.log("hello id space", spaceId);

      const result = await dispatch(joinSpace(spaceDetail.uuid));
      dispatch(spaceActions.setLoading(false));
      toast.success(result.message);

      console.log("JOINSPACE", result);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
    }
  };

  let isMember = joinedSpaceIds.includes(spaceDetail.uuid) || memberState;

  const toggleHandler = (id) => {
    setToggle(id);
  };
  //   const loadTweetByIdHandler = (id) => {
  //     setOpen(true);
  //     setSelectedPostId(id);
  //     setSingleTweet(id);
  //   };
  const closeCreateCampaignModal = () => {
    // setOpenCampaignModal(false);
    // dispatch(spaceActions.setOpenCampaignModal(false));
  };
  const openCreateCampaignModal = () => {
    // setOpenCampaignModal(true);
    dispatch(spaceActions.setOpenCampaignModal(true));
  };

  if (!spaceDetail) {
    return <Layout />;
  }

  console.log("spaceDetail", spaceDetail);
  return (
    <>
      <Modal open={openCampaignModal} onClose={closeCreateCampaignModal}>
        <CreateCampaign spaceDetail={spaceDetail} />
      </Modal>
      <div className="text-[#FFF] p-[0rem] mt-[-2rem] border-[#2A3C46] md:border-l border-opacity-[80%] ml-[0.7rem] md:ml-[2rem] xl:ml-[0.7rem] gap-5">
        <div className="flex flex-col mb-10">
          <div className="h-[3.5rem] md:h-[8rem] lg:h-[12.5rem] xl:max-h-[15rem] mr-[-0.8rem] lg:mr-[-1.9rem]">
            {/* <img
              src={
                spaceDetail.bannerUrl
                  ? spaceDetail.bannerUrl
                  : "/tweetImages/AudaXiousBannerDefault.png"
              }
              alt=""
              className="w-[100%] h-auto object-cover max-h-full"
            /> */}
            <img
              src={"/tweetImages/AudaXiousBannerDefault.png"}
              alt=""
              className="w-[100%] h-auto object-cover max-h-full"
            />
          </div>

          {/* Second div placed right after the image */}
          <div className="flex flex-wrap  md:flex-nowrap  gap-[1rem] md:gap-[3rem] lg:gap-[17rem] items-center mt-[-2rem] md:mt-[-3.5rem]">
            <div className="ml-[1rem] md:ml-[0rem]">
              {!spaceDetail.iconUrl && (
                <div className="flex bg-slate-300 text-[3rem] font-[500] items-center justify-center xl:w-[10rem] w-[5rem] md:w-[9rem] xl:h-[10rem] md:h-[9rem] h-[5rem] rounded-full border text-[#2A3C46] border-[#2A3C46] border-opacity-[80%]">
                  {spaceDetail.title && spaceDetail.title.slice(0, 1)}
                </div>
              )}
              {spaceDetail.iconUrl && (
                <div className="">
                  {" "}
                  <img
                    src={spaceDetail.iconUrl}
                    width="100"
                    height="100"
                    alt=""
                    className="xl:w-[10rem] w-[5rem] md:w-[9rem] xl:h-[10rem] md:h-[9rem] h-[5rem]  rounded-full border border-[#2A3C46] border-opacity-[80%]"
                  />
                </div>
              )}
            </div>
            <div className="flex gap-[1.5rem] md:gap-[3rem] items-center flex-wrap md:flex-nowrap">
              <div className="flex gap-[1rem] items-center">
                <div className="flex items-center gap-[0.63rem] px-[0.63rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                  <span>
                    <Group />
                  </span>
                  <span className="h-[1.5rem] w-[1px] bg-[#314048]"></span>
                  <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                    {spaceDetail.spaceMembersCount}
                  </span>
                </div>
                <div className="flex gap-[0.5rem] items-center">
                  {spaceDetail.links?.map((link, index) => {
                    const svgFiles = {
                      website: <World />,
                      twitter: <Retweets />,
                      telegram: <Telegram />,
                    };
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        title={link.type}
                        className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full bg-black  "
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <span>{svgFiles[link.type]}</span>
                      </a>
                    );
                  })}
                  {/* <a
                    href="https://audaxious.com"
                    target="_blank"
                    title="twitter"
                    className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full bg-black  "
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <span>
                      <World />
                    </span>
                  </a>

                  <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>

                  <a
                    href="https://twitter.com/audaxious3"
                    target="_blank"
                    title="twitter"
                    className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full bg-black  "
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <span>
                      <Retweets />
                    </span>
                  </a>
                  <span className="h-[2.4rem] w-[1px] bg-[#314048]"></span>
                  <a
                    href="https://t.me/audaxious"
                    target="_blank"
                    title="telegram"
                    className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full bg-black  "
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className=" text-[#0088cc]  h-[20px] "
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_25_160)">
                        <path
                          d="M15.2927 3.07658L13.1802 13.0391C13.0209 13.7422 12.6052 13.9172 12.0146 13.586L8.79585 11.2141L7.24273 12.7078C7.07085 12.8797 6.9271 13.0235 6.59585 13.0235L6.8271 9.74533L12.7927 4.35471C13.0521 4.12346 12.7365 3.99533 12.3896 4.22658L5.0146 8.87033L1.8396 7.87658C1.14898 7.66096 1.13648 7.18596 1.98335 6.85471L14.4021 2.07033C14.9771 1.85471 15.4802 2.19846 15.2927 3.07658Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_25_160">
                          <rect
                            width="14"
                            height="16"
                            fill="currentColor"
                            transform="translate(1.33337)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a> */}
                </div>
              </div>
              {!showJoinButton && (
                <div>
                  {loading && (
                    <div className="">
                      <Loading />
                    </div>
                  )}
                  {!loading && !isMember && (
                    <button
                      onClick={joinSpaceHandler}
                      className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                    >
                      Join space
                    </button>
                  )}
                  {isMember && (
                    <span className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                      Member
                    </span>
                  )}
                </div>
              )}
              {showJoinButton && (
                <button
                  onClick={openCreateCampaignModal}
                  className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                >
                  Create campaign
                </button>
              )}
            </div>
          </div>

          {/* Remaining content */}
        </div>
        <div className="md:container ">
          <div className="font-Poppins mt-[1rem] flex flex-col gap-[0.6rem]">
            <div className="flex gap-[1.5rem] md:gap-[2rem] items-center flex-wrap md:flex-nowrap">
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-[#FFF] text-[1.5rem] md:text-[2rem] font-normal normal-case font-Poppins">
                  {spaceDetail.title}
                </p>

                {spaceDetail.isVerified && (
                  <Verify size={28} color="#1089FF" variant="Bold" />
                )}
              </div>
              <p className="text-[#6DE6AE] text-[0.7rem] md:text-[1rem]  font-normal font-Poppins">
                {campaigns.length} Active campaigns
              </p>
            </div>
            <div className="w-[100%] md:w-[90%]">
              <p
                className="text-[#A5A5A5] text-[0.875rem] md:text-[1.25rem] leading-[140%] font-Poppins"
                style={{ wordBreak: "break-all" }}
              >
                {spaceDetail.description}
              </p>
            </div>
            <div className="flex gap-[1rem] flex-wrap">
              {spaceDetail.tags &&
                spaceDetail.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-[1rem] py-[0.3rem] flex items-center border-[#19242D] border-[2px] "
                  >
                    {/* <span>
                      <Defi />
                    </span> */}
                    <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      {tag}
                    </span>
                  </div>
                ))}
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
            <div
              className={clsx("mt-[1rem]", toggle === 1 ? "block" : "hidden")}
            >
              <SpaceCampaigns spaceId={spaceId} />
            </div>
            <div
              className={clsx("mt-[1rem]", toggle === 2 ? "block" : "hidden")}
            >
              <LeadershipBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceDetail;
