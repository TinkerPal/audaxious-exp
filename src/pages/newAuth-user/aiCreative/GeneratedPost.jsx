import { ReactComponent as Stars } from "../../../assets/svg/startsss.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/polchecked.svg";
import GeneratedPostCard from "./GeneratedPostCard";

const GeneratedPost = ({ generatedTweet }) => {
  return (
    <div className="">
      <div className="flex justify-center gap-3  items-center">
        <Stars />
        <p className="font-Poppins text-[16px] font-normal  bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
          View generated contents below
        </p>
      </div>
      <div>
        <GeneratedPostCard generatedTweet={generatedTweet} />
      </div>
    </div>
  );
};

export default GeneratedPost;
