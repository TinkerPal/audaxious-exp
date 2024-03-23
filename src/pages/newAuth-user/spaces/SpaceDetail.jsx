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
import { getSpaceById, joinSpace } from "../../../store/spaceActions";
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
  const [openCampaignModal, setOpenCampaignModal] = useState(false);
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

  let showJoinButton = false;
  if (userId === spaceDetail.creator_uuid) {
    showJoinButton = true;
  }

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
      const result = await dispatch(joinSpace(spaceId));
      dispatch(spaceActions.setLoading(false));
      toast.success(result.message);

      console.log("JOINSPACE", result);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
    }
  };
  const toggleHandler = (id) => {
    setToggle(id);
  };
  //   const loadTweetByIdHandler = (id) => {
  //     setOpen(true);
  //     setSelectedPostId(id);
  //     setSingleTweet(id);
  //   };
  const closeCreateCampaignModal = () => {
    setOpenCampaignModal(false);
  };
  const openCreateCampaignModal = () => {
    setOpenCampaignModal(true);
  };

  if (!spaceDetail) {
    return <Layout />;
  }
  return (
    <>
      <Modal open={openCampaignModal} onClose={closeCreateCampaignModal}>
        <CreateCampaign />
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
                  {!loading && (
                    <button
                      onClick={joinSpaceHandler}
                      className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
                    >
                      Join space
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="font-Poppins mt-[1rem] flex flex-col gap-[0.6rem]">
            <div className="flex gap-[0.2rem] md:gap-[2rem] items-center flex-wrap md:flex-nowrap">
              <p className="text-[#FFF] text-[1.5rem] md:text-[2rem] font-normal normal-case font-Poppins">
                {spaceDetail.title}
              </p>
              <p className="text-[#6DE6AE] text-[0.7rem] md:text-[1rem] font-normal font-Poppins">
                20 Active campaigns
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
          {showJoinButton && (
            <div className="mt-[1rem]">
              <button
                onClick={openCreateCampaignModal}
                className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#79C4EC]"
              >
                Create campaign
              </button>
            </div>
          )}
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
