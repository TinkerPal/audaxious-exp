import { ReactComponent as Stars } from "../../../assets/svg/startsss.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/polchecked.svg";
import GeneratedPostCard from "./GeneratedPostCard";

const GeneratedPost = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-3 mb-3 items-center">
        <Stars />
        <p className="font-Poppins text-[16px] font-normal leading-[15px] bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
          View generated contents below
        </p>
      </div>
      <div>
        <div className="flex gap-2 mb-3 items-center">
          <input
            type="checkbox"
            id="some_id"
            // checked={tweet.selected}
            // onChange={(e) => onChange("selected", e.target.checked)}
            className="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-[#2A3C46] border-opacity-45 rounded-sm mt-1 cursor-pointer"
          />
          <label
            htmlFor="some_id"
            className="text-[#EBEDED] font-Poppins text-[0.8rem] md:text-[1rem] font-[300]"
          >
            Select all post
          </label>
          <Checked />
        </div>
        <GeneratedPostCard />
      </div>
    </div>
  );
};

export default GeneratedPost;
