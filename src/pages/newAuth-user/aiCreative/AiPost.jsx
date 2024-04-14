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
    <div className="flex justify-center flex-col items-center py-[2.68rem]">
      <main className="border border-[#2A3C46] border-opacity-25 rounded-md max-w-[43rem]">
        {/* <TogglePost /> */}
        <div className="px-[0.4rem] md:px-[2rem] xl:px-[4rem] pb-[3rem]">
          <div className="flex gap-[0.62rem]">
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
