import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className="flex my-[1.25rem]">
        <Sidebar />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
