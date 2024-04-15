import { ReactComponent as NoPost } from "../../../assets/svg/dashboardSvg/noPost.svg";
import Button from "../../../../src/widget/Button";
import { useDispatch } from "react-redux";
import { aiCreatieActions } from "../../../store/aiCreativeSlice";
import { TWITTERPOST } from "../../../utils/postApi";
import TwitterPostCard from "./TwitterPostCard";
import Pagination from "../../../widget/Pagination";
import AiPost from "./AiPost";

import SearchAI from "./SearchAI";
const TwitterPost = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(aiCreatieActions.setCreatePostModal(true));
  };
  if (TWITTERPOST.length <= 0) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem] text-[#707171]   ">
        <span>
          <NoPost />
        </span>
        <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
          <h3 className="font-[400] text-[1.2rem]">Nothing to see here!</h3>
          <p className="text-center font-[300] text-[0.8rem] leading-normal">
            Your post will appear here{" "}
          </p>
        </div>
        <Button onClick={openModal} type={"button"}>
          Create post
        </Button>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start pb-5 ">
      <AiPost />

      <div className="flex flex-col h-full justify-between">
        <div className=" flex flex-col  col-span-1 items-center gap-5 py-[2.25rem] mx-2  max-w-[700px] ">
          <SearchAI onChangeKeyword={() => {}} />
          {/* {TWITTERPOST &&
          TWITTERPOST.filter((post, index) => index < 5).map((post, index) => {
            return <TwitterPostCard post={post} key={index} />;
          })} */}
          <div className="flex flex-col  justify-between border-white/20 border-[#07111c] bg-[#060e16] hover:border-white/70 p-4 rounded-md   hover:border-[#14435c]  text-white/70 border border-opacity-[80%]   cursor-pointer  ">
            🚀 AudaXious Engage-to-Earn platform is going live and we will be
            rewarding early members and adopters of our platform with ADX token.
            To participate, please complete the listed tasks.
          </div>

          <div className="flex flex-col  justify-between border-white/20 border-[#07111c] bg-[#060e16] hover:border-white/70 p-4 rounded-md   hover:border-[#14435c]  border border-opacity-[80%]  text-white/70  cursor-pointer ">
            🚀 AudaXious Engage-to-Earn platform is going live and we will be
            rewarding early members and adopters of our platform with ADX token.
            To participate, please complete the listed tasks. AudaXious
            Engage-to-Earn platform is going live and we will be rewarding early
            members and adopters of our platform with ADX token. To participate,
            please complete the listed tasks.
          </div>

          <div className="flex flex-col  justify-between border-white/20 border-[#07111c] bg-[#060e16] hover:border-white/70 p-4 rounded-md   hover:border-[#14435c]  border border-opacity-[80%] text-white/70   cursor-pointer ">
            🚀 AudaXious Engage-to-Earn platform is going live and we will be
            rewarding early members and adopters of our platform with ADX token.
            To participate, please complete the listed tasks. AudaXious
            Engage-to-Earn platform is going live and we will be rewarding early
            members and
          </div>

          <div className="flex flex-col  justify-between border-white/20 border-[#07111c] text-white/70  bg-[#060e16] hover:border-white/70 p-4 rounded-md   hover:border-[#14435c]  border border-opacity-[80%]   cursor-pointer ">
            🚀 AudaXious Engage-to-Earn platform is going live and we will be
            rewarding early members and adopters of our platform with ADX token.
            To participate, please complete the listed tasks. AudaXious
            Engage-to-Earn platform is going live and we will be rewarding early
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default TwitterPost;
