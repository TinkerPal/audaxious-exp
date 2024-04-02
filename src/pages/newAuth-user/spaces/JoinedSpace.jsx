import { ReactComponent as NoSpace } from "../../../assets/svg/dashboardSvg/noSpace.svg";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { joinSpace } from "../../../store/spaceActions";
import { toast } from "react-toastify";
import { spaceActions } from "../../../store/spaceSlice";
import SpaceCard from "./SpaceCard";

const JoinedSpace = () => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const joinedSpacesArray = useSelector((state) => state.space.joinedSpace);
  const joinedSpaceIds = joinedSpacesArray.map((space) => space.space_uuid);

  const spaceArray = useSelector((state) => state.space.space);

  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(authAction.onOpen());
  };

  const joinSpaceHandler = async (id) => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    try {
      setSelectedId(id);
      const result = await dispatch(joinSpace(id));
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setIsMember(true));
      toast.success(result.message);
      setSelectedId(null);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
      setSelectedId(null);
      dispatch(spaceActions.setIsMember(false));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <p className="font-[400] text-[1.2rem]">Please login</p>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            Spaces you join will appear here
            <br /> login to see{" "}
            <span className="text-[#FFF]">“Joined spaces”</span>
          </p>
        </div>
        <button
          onClick={openLoginModal}
          className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
        >
          Login
        </button>
      </div>
    );
  }

  if (!joinedSpacesArray || joinedSpacesArray.length <= 0) {
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
