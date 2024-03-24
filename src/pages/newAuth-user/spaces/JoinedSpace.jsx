// import React, { useEffect } from "react";
import { ReactComponent as NoSpace } from "../../../assets/svg/dashboardSvg/noSpace.svg";
// import { useDispatch, useSelector } from "react-redux";

// const JoinedSpace = () => {
//   const isAuthenticated = useSelector(
//     (state) => state.authentication.isLogedIn
//   );
//   const loading = useSelector((state) => state.space.loading);
//   const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
//   const dispatch = useDispatch();
//   // useEffect(() => {
//   //   console.log("JOINED SPACE");
//   // }, []);

import React, { useState } from "react";
// import { SPACES } from "../../../utils/postApi";

import Query from "./Query";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { joinSpace } from "../../../store/spaceActions";
import { toast } from "react-toastify";
import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";
import SpaceCard from "./SpaceCard";

const JoinedSpace = ({ onCreateSpace }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
  const joinedSpaceIds = joinedSpacesArray.map((space) => space.space_uuid);

  const spaceArray = useSelector((state) => state.space.space);
  const loading = useSelector((state) => state.space.loading);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const createSpaceHandler = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    onCreateSpace(true);
    // console.log("AllSpace");
  };

  const joinSpaceHandler = async (id) => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    // dispatch(spaceActions.setLoading(true));
    try {
      setSelectedId(id);
      const result = await dispatch(joinSpace(id));
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setIsMember(true));
      toast.success(result.message);
      setSelectedId(null);

      console.log("JOINSPACE", result);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
      setSelectedId(null);
      dispatch(spaceActions.setIsMember(false));
    }
  };

  if (!joinedSpacesArray || !isAuthenticated) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
        <span>
          <NoSpace />
        </span>
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <p className="font-[400] text-[1.2rem]">No spaces to show</p>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            Spaces you join will appear here
            <br /> click <span className="text-[#FFF]">“Join a space”</span> to
            join one
          </p>
        </div>
        <button className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
          Join a space
        </button>
      </div>
    );
  }

  return (
    <div>
      <Query onCreateSpace={createSpaceHandler} />
      <div className="md:container">
        <div className="py-[1.47rem] flex flex-col ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[2.5rem]">
            {spaceArray &&
              spaceArray
                .filter((space) => joinedSpaceIds.includes(space.uuid))
                .map((space) => (
                  <SpaceCard
                    space={space}
                    joinSpaceHandler={joinSpaceHandler}
                    selectedId={selectedId}
                    key={space.uuid}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedSpace;
