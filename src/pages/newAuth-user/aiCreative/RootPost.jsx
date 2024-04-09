import { Outlet } from "react-router-dom";
import TogglePost from "./TogglePost";

const RootPost = () => {
  return (
    <div className=" border border-[#2A3C46] rounded-md mt-[2.68rem]">
      <TogglePost />
      <main className="flex justify-center my-[1.5rem]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootPost;
