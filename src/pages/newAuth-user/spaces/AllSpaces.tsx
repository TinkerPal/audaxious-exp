import React, { useState } from "react";
// import { SPACES } from "../../../utils/postApi";
import { SPACES } from "../../../utils/postApi";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import Query from "./Query";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import { joinSpace } from "../../../store/spaceActions";
import { toast } from "react-toastify";
import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";
import SpaceCard from "./SpaceCard";

const AllSpaces = ({ onCreateSpace }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

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
      toast.success(result.message);
      setSelectedId(null);

      console.log("JOINSPACE", result);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
      setSelectedId(null);
    }
  };
  return (
    <div>
      <Query onCreateSpace={createSpaceHandler} />
      <div className="md:container">
        <div className="py-[1.47rem] flex flex-col =">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[2.5rem]">
            {spaceArray &&
              spaceArray.map((space) => (
                <SpaceCard
                  space={space}
                  joinSpaceHandler={joinSpaceHandler}
                  selectedId={selectedId}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSpaces;
