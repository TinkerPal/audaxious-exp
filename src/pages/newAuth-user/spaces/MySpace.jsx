import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authorizationSlice";
import Loading from "../../Homes/Loading";
import SpaceCard from "./SpaceCard";
import { ReactComponent as NoSpace } from "../../../assets/svg/dashboardSvg/noSpace.svg";

const MySpace = ({ mySpaces }) => {
  const loading = useSelector((state) => state.space.loading);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

  const openLoginModal = () => {
    dispatch(authAction.onOpen());
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <p className="font-[400] text-[1.2rem]">Please login</p>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            Spaces you created will appear here
            <br /> login to see <span className="text-[#FFF]">“My Spaces”</span>
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

  if (!mySpaces || mySpaces.length <= 0) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem]">
        <span>
          <NoSpace />
        </span>
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <p className="font-[400] text-[1.2rem]">No spaces to show</p>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            Spaces created will appear here
            <br /> click <span className="text-[#FFF]">“Create space”</span> to
            to create one
          </p>
        </div>
        <button className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
          Create space
        </button>
      </div>
    );
  }
  return (
    <div>
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
