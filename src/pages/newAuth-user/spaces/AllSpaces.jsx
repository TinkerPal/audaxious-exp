import React, { useState } from "react";
// import { SPACES } from "../../../utils/postApi";
// import Query from "./Query";
// import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { joinSpace } from "../../../store/spaceActions";
import { toast } from "react-toastify";
// import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";
import { ReactComponent as NoSpace } from "../../../assets/svg/dashboardSvg/noSpace.svg";
import SpaceCard from "./SpaceCard";

const AllSpaces = ({ onCreateSpace, spaceArray }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

  // const loading = useSelector((state) => state.space.loading);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  // const createSpaceHandler = () => {
  //   if (!isAuthenticated) {
  //     dispatch(authAction.onOpen());
  //     return;
  //   }
  //   onCreateSpace(true);
  //   // console.log("AllSpace");
  // };

  // console.log("Space array", spaceArray);

  const joinSpaceHandler = async (id) => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    // dispatch(spaceActions.setLoading(true));
    try {
      setSelectedId((id) => id);
      // console.log("checking id", id);

      const result = await dispatch(joinSpace(id));
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setIsMember(true));
      toast.success(result.message);
      setSelectedId(null);

      // console.log("JOINSPACE", result);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
      setSelectedId(null);
      dispatch(spaceActions.setIsMember(false));
    }
  };

  if (!spaceArray || spaceArray.length <= 0) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
        <span>
          <NoSpace />
        </span>
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <p className="font-[400] text-[1.2rem]">No spaces to show</p>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            All Spaces will appear here
            <br /> <span className="text-[#FFF]">“Search”</span> for a valid
            space title
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="md:container">
        <div className="py-[1.47rem] flex flex-col ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 md:gap-[2.5rem] gap-[1rem] ">
            {spaceArray &&
              spaceArray.map((space) => (
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
    </>
  );
};

export default AllSpaces;
