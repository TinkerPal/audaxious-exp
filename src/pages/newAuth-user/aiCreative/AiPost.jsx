import SentimentDropdown from "./SentimentDropdown";
import GenerateDropdown from "./GenerateDropdown";
import GeneratedPost from "./GeneratedPost";
import { ReactComponent as Line } from "../../../assets/svg/dashboardSvg/lines.svg";
import TogglePost from "./TogglePost";
import PostTextarea from "../../../widget/PostTextarea";
import { useSelector } from "react-redux";

const AiPost = () => {
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
              <div className="flex justify-end gap-[0.8rem]">
                <SentimentDropdown />
                <GenerateDropdown />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="my-[1.8rem] flex flex-col gap-[2rem]">
        <span className="hidden md:flex">
          <Line />
        </span>
      </div>
      <div>
        <GeneratedPost />
      </div>
    </div>
  );
};

export default AiPost;
