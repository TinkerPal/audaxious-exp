import React, { useEffect, useState } from "react";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import { ReactComponent as Defi } from "../../../assets/svg/dashboardSvg/defi.svg";
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
        setSpaceDetail(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSpaces();
  }, [dispatch, spaceId]);

  // console.log(spaceDetail.uuid);

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const result = await dispatch(getAllCampaignsBySpace(spaceDetail.uuid));

        // setCampaigns(result.data);
        dispatch(spaceActions.replaceSpaceCampaigns(result.data));
      } catch (error) {
        console.log(error);
      }
    };
    if (spaceDetail.uuid && toggle === 1) {
      getCampaigns();
    }
  }, [dispatch, toggle, spaceDetail]);

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
  return (
    <>
      <Modal open={openCampaignModal} onClose={closeCreateCampaignModal}>
        <CreateCampaign spaceDetail={spaceDetail} />
      </Modal>
      <div className="text-[#FFF] p-[0rem] mt-[-2rem] border-[#2A3C46] md:border-l border-opacity-[80%] ml-[0.7rem] md:ml-[2rem] xl:ml-[0.7rem]">
        <div className="h-[3.5rem] md:h-[8rem] lg:h-[8.5rem] xl:max-h-[10.5rem] mr-[-0.8rem] lg:mr-[-1.9rem]">
          <img
            src="/tweetImages/header.svg"
            alt=""
            className="w-[100%] h-[100%] object-cover"
          />
        </div>

        <div className="md:container md:ml-[0rem]">
          <div className="flex flex-wrap md:flex-nowrap gap-[1rem] md:gap-[3rem] lg:gap-[17rem] items-end mt-[-2rem] md:mt-[-3.5rem]">
            <div className="ml-[1rem] md:ml-[0rem]">
              {!spaceDetail.src && (
                <div className="flex bg-slate-300 text-[3rem] font-[500] items-center justify-center xl:w-[10rem] w-[5rem] md:w-[9rem] xl:h-[10rem] md:h-[9rem] h-[5rem] rounded-full border text-[#2A3C46] border-[#2A3C46] border-opacity-[80%]">
                  {spaceDetail.title && spaceDetail.title.slice(0, 1)}
                </div>
              )}
              {spaceDetail.src && (
                <img
                  src="/tweetImages/audaxious.svg"
                  width="100"
                  height="100"
                  alt=""
                  className="xl:w-[10rem] w-[5rem] md:w-[9rem] xl:h-[10rem] md:h-[9rem] h-[5rem] object-cover rounded-full border border-[#2A3C46] border-opacity-[80%]"
                />
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

          <div className="font-Poppins mt-[1rem] flex flex-col gap-[0.6rem]">
            <div className="flex gap-[0.2rem] md:gap-[2rem] items-center flex-wrap md:flex-nowrap">
              <div className="flex flex-row space-x-2 items-center">
                <p className="text-[#FFF] text-[1.5rem] md:text-[2rem] font-normal normal-case font-Poppins">
                  {spaceDetail.title}
                </p>

                <span>
                  <svg
                    className="h-7 flex flex-row w-auto "
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.55 16.0499C24.15 15.4499 24.15 14.5499 23.55 13.9499C22.95 13.3499 22.05 13.3499 21.45 13.9499L16.5 18.8999L14.55 16.9499C13.95 16.3499 13.05 16.3499 12.45 16.9499C11.85 17.5499 11.85 18.4499 12.45 19.0499L15.45 22.0499C16.05 22.6499 16.95 22.6499 17.55 22.0499L23.55 16.0499ZM18 1.49991C16.2 1.49991 14.55 2.24991 13.5 3.59991C13.05 4.04991 12.9 4.19991 12.75 4.49991C12.6 4.49991 12.6 4.49991 12.6 4.49991C12.45 4.49991 12.3 4.49991 12 4.49991H10.5C9 4.49991 7.5 5.09991 6.3 6.29991C5.25 7.49991 4.65 8.99991 4.65 10.4999V11.9999C4.65 12.2999 4.65 12.4499 4.65 12.5999C4.65 12.5999 4.5 12.5999 4.5 12.7499C4.2 12.8999 4.05 13.0499 3.6 13.4999C2.25 14.5499 1.5 16.1999 1.5 17.9999C1.5 19.7999 2.25 21.4499 3.6 22.4999C4.05 22.7999 4.2 23.0999 4.5 23.2499L4.65 23.3999C4.65 23.5499 4.65 23.6999 4.65 23.9999V25.4999C4.65 26.9999 5.25 28.4999 6.45 29.6999C7.5 30.7499 9 31.3499 10.5 31.3499H12C12.3 31.3499 12.45 31.3499 12.6 31.3499C12.6 31.3499 12.6 31.4999 12.75 31.4999C12.9 31.6499 13.2 31.9499 13.5 32.3999C14.55 33.7499 16.2 34.4999 18 34.4999C19.8 34.4999 21.45 33.7499 22.5 32.3999C22.8 31.9499 23.1 31.7999 23.25 31.4999L23.4 31.3499C23.55 31.3499 23.7 31.3499 24 31.3499H25.5C27 31.3499 28.5 30.7499 29.7 29.5499C30.9 28.3499 31.5 26.8499 31.5 25.3499V23.8499C31.5 23.5499 31.5 23.3999 31.5 23.2499C31.5 23.2499 31.65 23.2499 31.65 23.0999C31.8 22.9499 32.1 22.6499 32.55 22.3499C33.9 21.2999 34.65 19.6499 34.65 17.8499C34.65 16.0499 33.9 14.3999 32.55 13.3499C32.1 13.0499 31.95 12.7499 31.65 12.5999L31.5 12.4499C31.5 12.2999 31.5 12.1499 31.5 11.8499V10.4999C31.5 8.99991 30.9 7.49991 29.7 6.29991C28.5 5.24991 27 4.64991 25.5 4.64991H24C23.7 4.64991 23.55 4.64991 23.4 4.64991C23.4 4.64991 23.4 4.49991 23.25 4.49991C23.1 4.34991 22.8 4.04991 22.5 3.59991C21.45 2.24991 19.8 1.49991 18 1.49991Z"
                      fill="#1089FF"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[#6DE6AE] text-[0.7rem] md:text-[1rem] font-normal font-Poppins">
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
                    className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]"
                  >
                    <span>
                      <Defi />
                    </span>
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
