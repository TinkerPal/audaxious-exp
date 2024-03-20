import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ReactComponent as SeachIcon } from "../../../assets/svg/dashboardSvg/searchIcon.svg";

import Query from "./Query";
import AllSpaces from "./AllSpaces";
import MySpace from "./MySpace";
import JoinedSpace from "./JoinedSpace";
import { Dialog } from "@headlessui/react";
import CreateSpace from "./CreateSpace";
import { useDispatch } from "react-redux";
import { getAllMySpaces } from "../../../store/spaceActions";
import { spaceActions } from "../../../store/spaceSlice";

const Spaces = () => {
  const [toggle, setToggle] = useState(1);
  const [open, setOpen] = useState(false);
  const [createdSpace, setCreatedSpace] = useState([]);
  const toggleHandler = (id) => {
    setToggle(id);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const mySpaces = async () => {
      dispatch(spaceActions.setLoading(true));
      try {
        const result = await dispatch(getAllMySpaces());
        dispatch(spaceActions.setLoading(false));
        setCreatedSpace(result.data);

        // console.log("My SPACES", result.data);
      } catch (error) {
        dispatch(spaceActions.setLoading(false));
        console.log(error);
      }
    };
    if (toggle === 2) {
      mySpaces();
    }
  }, [toggle, dispatch]);

  const cancelHandler = () => {
    setOpen(false);
  };
  return (
    <div className="text-[#FFF] max-w-[1670px] ml-[0.5rem] md:ml-[2rem] xl:ml-[1rem] mt-[-2rem]">
      <div className="">
        <div className="container">
          <Dialog
            as="div"
            className={`relative z-[3]`}
            open={open}
            onClose={cancelHandler}
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-75"
              onClick={cancelHandler}
            />
            <div className="fixed inset-0 z-[4] overflow-y-auto">
              <div className="flex items-center py-[5rem] md:py-[0rem] justify-center mt-[2rem] text-center sm:items-center sm:p-0">
                <Dialog.Panel className="">
                  <CreateSpace />
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        </div>
        <div className="border-[#2A3C46] border-l-0 md:border-l border-opacity-[80%]">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-[0.5rem] md:gap-[0rem] pt-[1rem] md:pt-[0rem] border border-[#19242D] border-r-0">
            <div className="flex justify-between items-center text-[0.7rem] md:text-[1rem] font-Poppins font-[300]">
              <div
                onClick={() => toggleHandler(1)}
                className={clsx(
                  "cursor-pointer py-[1rem] w-[100%] whitespace-nowrap text-center px-[1rem]",
                  toggle === 1
                    ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                    : "text-[#D3D3D3]"
                )}
              >
                <span className="pt-[2rem]">All Spaces</span>
              </div>
              <div
                onClick={() => toggleHandler(2)}
                className={clsx(
                  "cursor-pointer py-[1rem] w-[100%] text-center px-[1rem] whitespace-nowrap",
                  toggle === 2
                    ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                    : "text-[#D3D3D3]"
                )}
              >
                My Space
              </div>
              <div
                onClick={() => toggleHandler(3)}
                className={clsx(
                  "cursor-pointer py-[1rem] w-[100%] whitespace-nowrap text-center px-[1rem]",
                  toggle === 3
                    ? "text-[#79C4EC] bg-[#13161E] border-b-4 border-[#79C4EC]"
                    : "text-[#D3D3D3]"
                )}
              >
                Joined Spaces
              </div>
            </div>
            <div className="flex items-center py-[0.6rem]">
              <div className="border-[1px] border-r-0 rounded-l-[2.5rem] border-[#2A3C46] border-opacity-[80%] py-[0.71rem] md:py-[0.7rem] px-[1rem] cursor-pointer">
                <SeachIcon />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search spaces.."
                className="rounded-[2.5rem] placeholder:font-Poppins placeholder:font-[300] placeholder:text-[#536169] rounded-l-none w-[100%] md:w-[11rem] lg:w-[22.6rem] py-[0.5rem] border-[1px] border-[#2A3C46] border-opacity-[80%] bg-transparent outline-none px-[0.5rem]"
              />
            </div>
          </div>
          <div className={clsx(toggle === 1 ? "block" : "hidden")}>
            <AllSpaces onCreateSpace={setOpen} />
          </div>
          <div className={clsx(toggle === 2 ? "block" : "hidden")}>
            <MySpace onCreateSpace={setOpen} mySpaces={createdSpace} />
          </div>
          <div className={clsx(toggle === 3 ? "block" : "hidden")}>
            <JoinedSpace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
