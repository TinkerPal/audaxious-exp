import React from "react";
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

const AllSpaces = ({ onCreateSpace }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );

  const spaceArray = useSelector((state) => state.space.space);
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

  const joinSpaceHandler = async (id) => {
    if (!isAuthenticated) {
      dispatch(authAction.onOpen());
      return;
    }
    dispatch(spaceActions.setLoading(true));
    try {
      const result = await dispatch(joinSpace(id));
      dispatch(spaceActions.setLoading(false));
      toast.success(result.message);

      console.log("JOINSPACE", result);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
    }
  };
  return (
    <div>
      <Query onCreateSpace={createSpaceHandler} />
      <div className="md:container">
        <div className="py-[1.47rem] flex flex-col =">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2.5rem]">
            {spaceArray &&
              spaceArray.map((space) => (
                <NavLink to={`/spaces/${space.uuid}`} key={space.uuid}>
                  <div className="px-[0.5rem] md:px-[1.5rem] pt-[0.75rem] min-w-[18rem] max-w-[28rem] pb-[0.75rem] border-[#2A3C46] border border-opacity-[80%] bg-ElipseBg bg-no-repeat bg-cover rounded-[16px] cursor-pointer">
                    <div className="flex flex-col gap-[0.75rem]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[0.5rem]">
                          {!space.src && (
                            <div className="w-[3rem] h-[3rem] rounded-full bg-slate-200 flex items-center justify-center text-[2rem] text-[#2A3C46]">
                              {space.title.slice(0, 1)}
                            </div>
                          )}
                          {space.src && (
                            <img
                              src={space.src}
                              alt={space.title.slice(0, 7)}
                              width="100"
                              height={"100"}
                              className="w-[4rem] h-[4rem] object-cover rounded-full"
                            />
                          )}
                          <span className="text-[1rem] text-[#FFF] font-[400]">
                            {space.title}
                          </span>{" "}
                        </div>
                        {loading && (
                          <div className="">
                            <Loading />
                          </div>
                        )}
                        {!loading && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              if (e.target.tagName.toLowerCase() !== "button") {
                                e.stopPropagation();
                              }
                              joinSpaceHandler(space.uuid);
                              // console.log("E WORK", space.uuid);
                            }}
                            className="border-[#2A3C46] border border-opacity-[80%] py-[0.4rem] px-[1rem] rounded-md font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
                          >
                            Join
                          </button>
                        )}
                      </div>
                      <div className="py-[0.62rem]">
                        <p className="font-Poppins text-[#A5A5A5] text-[0.75rem] font-[400] leading-[140%]">
                          {space.description.length > 40
                            ? space.description.slice(0, 40) + " ..."
                            : space.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[0.3rem] px-[0.5rem] rounded-[40px] py-[0.4rem] border-[#314048] border-opacity-[40%] border-[1px]">
                          <span>
                            <Group />
                          </span>
                          <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
                          <span className="text-[0.6rem] font-Poppins font-normal text-[#79C4EC]">
                            {space.engagement || 0}
                          </span>
                        </div>
                        <div className="flex gap-[0.3rem] items-center">
                          <span>
                            <World />
                          </span>
                          <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
                          <span>
                            <Retweets />
                          </span>
                          <span className="h-[1rem] w-[1px] bg-[#314048]"></span>
                          <span className="">
                            <Discords />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSpaces;
