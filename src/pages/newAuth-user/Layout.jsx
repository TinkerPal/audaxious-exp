import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="flex my-[1.25rem] mt-[7rem] ml-[3rem] md:ml-[6rem] lg:ml-[4rem] xl:ml-[15rem]">
        <Sidebar />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
