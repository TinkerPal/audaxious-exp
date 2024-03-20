import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Dialog } from "@headlessui/react";
import Authentication from "../authentication/Authentication";
import { useDispatch, useSelector } from "react-redux";
import VerifyTweeterModal from "../../../components/socialmedia/VerifyTweetModal";
import { authAction } from "../../../store/authorizationSlice";

import { useDisconnect } from "wagmi";

const DashboardLayout = () => {
  const openLogout = useSelector((state) => state.authentication.logoutModal);
  const open = useSelector((state) => state.authentication.isOpen);
  const dispatch = useDispatch();
  const { disconnect } = useDisconnect();

  const cancelHandler = () => {
    dispatch(authAction.onclose());
  };

  const closeModalHandler = () => {
    dispatch(authAction.logoutModalMethod(false));
  };

  const openLogoutModal = () => {
    dispatch(authAction.logoutModalMethod(true));
  };

  const logoutHandler = () => {
    disconnect();
    localStorage.removeItem("audaxiousAccessToken");
    dispatch(authAction.logout());
    dispatch(authAction.logoutModalMethod(false));
  };

  return (
    <div className=" ">
      <Header />
      <main className="flex my-[1.25rem] mt-[7rem] ml-[3rem] md:ml-[6rem] lg:ml-[4rem] xl:ml-[15rem]">
        <Sidebar onOpen={openLogoutModal} />
        <div className="container">
          <div className="container">
            <Dialog
              as="div"
              className={`relative z-[5]`}
              open={open}
              onClose={cancelHandler}
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-75 "
                // onClick={cancelHandler}
              />
              <div className="fixed inset-0 z-[6] overflow-y-auto">
                {/* className="flex items-center py-[5rem] md:py-[0rem] justify-center mt-[2rem] text-center sm:items-center sm:p-0" */}
                <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                  <Dialog.Panel className="">
                    <Authentication />
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </div>
          <VerifyTweeterModal onClose={closeModalHandler} open={openLogout}>
            <section className="bg-[#060B12] py-[2.5rem] rounded-md max-w-[1300px] px-[1rem]">
              <div className="container">
                <h2 className="text-[#dfdfdf] font-Poppins font-[600] text-[1.25rem] md:text-[2.5rem]">
                  Logout Confirmation
                </h2>
                <p className="my-[0.5rem] text-[#dfdfdf] font-Poppins font-[300] text-[0.96rem] md:text-[1.3rem]">
                  Are you sure you want to log out?
                </p>
                {/* <p className="text-[#A5A5A5] text-center text-[0.875rem] md:text-[1.2rem] font-Poppins leading-[140%] font-[300]">
                  In order to continue, you need to verify your twitter account
                </p> */}
                <div className="flex flex-col md:flex-row items-center justify-between md:gap-[1.5rem]">
                  <button
                    onClick={logoutHandler}
                    className="bg-[#E8E8E8] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 mt-8 w-[15rem] md:w-[17rem]"
                    // mt-8 mx-auto whitespace-nowrap lg:w-[17rem]
                  >
                    <span className="text-[#060B12] font-Poppins font-[600]">
                      Logout
                    </span>
                  </button>
                  <button
                    onClick={closeModalHandler}
                    className="bg-[#E8E8E8] flex items-center justify-center rounded-[8px] border-[1.5px] border-[#4C5656] border-opacity-[10%] p-3.5 mt-8 w-[15rem] md:w-[17rem]"
                    // mt-8 mx-auto whitespace-nowrap lg:w-[17rem]
                  >
                    <span className="text-[#060B12] font-Poppins font-[600]">
                      Cancel
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </VerifyTweeterModal>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
