import PostTextarea from "../../../widget/PostTextarea";
import TogglePost from "./TogglePost";
import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/timedate.svg";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/polchecked.svg";
import ScheduleDropdown from "./ScheduleDropdown";
import { useSelector } from "react-redux";

const ManualPost = () => {
  const username = useSelector((state) => state.authentication.userName);
  return (
    <div className="flex justify-center flex-col items-center">
      <main className="border border-[#2A3C46] border-opacity-25 rounded-md mt-[2.68rem] max-w-[43rem]">
        <TogglePost />
        <div className="px-[0.4rem] md:px-[2rem] xl:px-[4rem] pb-[3rem]">
          <div className="flex gap-[0.62rem]">
            <div className="w-[2rem] h-[2rem] px-[0.4rem] py-[0.4rem] bg-[#EBBEF3] rounded-full flex items-center justify-center">
              <p className="text-[1.25rem] font-Poppins font-[600] text-neutral-950">
                {username ? username.slice(0, 1) : ""}
              </p>
            </div>
            <div>
              <PostTextarea />
              <div className="text-[#707171] flex items-center justify-between mt-4 flex-wrap md:nowrap gap-4 md:gap-4">
                <div className="flex items-center gap-1">
                  <span>
                    <Clock />
                  </span>
                  <p className=" font-Poppins text-[#707171] text-[0.6rem] md:text-[0.8rem]">
                    Select date & time
                  </p>
                  <span>
                    <Dropdowns />
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="some_id"
                    // checked={tweet.selected}
                    // onChange={(e) => onChange("selected", e.target.checked)}
                    className="relative peer shrink-0 appearance-none w-4 h-4 border-[1px] border-[#94D0F0] rounded-sm mt-1 cursor-pointer"
                  />
                  <label
                    htmlFor="some_id"
                    className="text-[#707171] font-Poppins text-[0.6rem] md:text-[0.8rem] font-[300]"
                  >
                    Share on Engage Portal
                  </label>
                  <Checked />
                </div>
                <ScheduleDropdown />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManualPost;
