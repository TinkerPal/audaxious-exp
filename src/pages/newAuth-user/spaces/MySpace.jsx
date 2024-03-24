import React from "react";
import { SPACES } from "../../../utils/postApi";
import { ReactComponent as Group } from "../../../assets/svg/dashboardSvg/group.svg";
import { ReactComponent as World } from "../../../assets/svg/dashboardSvg/world.svg";
import { ReactComponent as Retweets } from "../../../assets/svg/dashboardSvg/retweets.svg";
import { ReactComponent as Discords } from "../../../assets/svg/dashboardSvg/discords.svg";
import Query from "./Query";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import Loading from "../../Homes/Loading";
import { joinSpace } from "../../../store/spaceActions";
import { toast } from "react-toastify";
import SpaceCard from "./SpaceCard";

const MySpace = ({ onCreateSpace, mySpaces }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const loading = useSelector((state) => state.space.loading);
  const dispatch = useDispatch();

  const createSpaceHandler = () => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    onCreateSpace(true);
    // console.log("AllSpace");
  };

  // console.log("MYSPACEUUID", mySpaces);

  // const joinSpaceHandler = async (id) => {
  //   if (!isAuthenticated) {
  //     dispatch(authAction.onOpen());
  //     return;
  //   }
  //   try {
  //     const result = await dispatch(joinSpace(id));
  //     toast.success(result.message);
  //   } catch (error) {
  //     toast.error(error.response.data.error);
  //   }
  // };

  return (
    <div>
      <Query onCreateSpace={createSpaceHandler} />
      <div className="md:container">
        <div className="py-[1.47rem] flex flex-col ">
          {loading && (
            <div className="">
              <Loading />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[2.5rem]">
            {mySpaces &&
              mySpaces.map((space) => (
                <SpaceCard
                  space={space}
                  joinSpaceHandler={() => {}}
                  selectedId={null}
                  // display="owner"
                  key={space.uuid}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySpace;
