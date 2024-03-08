import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Dialog } from "@headlessui/react";
import CreateSpace from "./CreateSpace";
import Login from "./Login";
import Authentication from "./Authentication";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  // const openLoginModal = () => {
  //   setOpen(true);
  // };
  const cancelHandler = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <Header />
      <main className="flex my-[1.25rem] mt-[7rem] ml-[3rem] md:ml-[6rem] lg:ml-[4rem] xl:ml-[15rem]">
        <Sidebar onOpen={setOpen} />
        <div className="container">
          <div className="container">
            <Dialog
              as="div"
              className={`relative z-[900]`}
              open={open}
              onClose={cancelHandler}
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-75"
                onClick={cancelHandler}
              />
              <div className="fixed inset-0 z-[300] overflow-y-auto">
                <div className="flex items-center py-[5rem] md:py-[0rem] justify-center mt-[2rem] text-center sm:items-center sm:p-0">
                  <Dialog.Panel className="">
                    <Authentication />
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
