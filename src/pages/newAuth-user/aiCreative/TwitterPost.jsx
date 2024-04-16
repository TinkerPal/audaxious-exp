import { ReactComponent as NoPost } from "../../../assets/svg/dashboardSvg/noPost.svg";
import { useSelector } from "react-redux";
import Pagination from "../../../widget/Pagination";
import AiPost from "./AiPost";

import SearchAI from "./SearchAI";
const TwitterPost = () => {
  const savedPost = useSelector((state) => state.aiCreative.savedPost);

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
          {savedPost.length <= 0 && (
            <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem] text-[#707171]   ">
              <span>
                <NoPost />
              </span>
              <div className="font-Poppins gap-[0.5rem] text-[#707171] flex flex-col items-center">
                <h3 className="font-[400] text-[1.2rem]">
                  Your saved post will appear here{" "}
                </h3>
              </div>
              {/* <Button onClick={openModal} type={"button"}>
                Create post
              </Button> */}
            </div>
          )}
          {savedPost.length > 0 &&
            savedPost.map((post, index) => (
              <div
                key={index}
                className="flex flex-col  justify-between border-white/20 border-[#07111c] bg-[#060e16] hover:border-white/70 p-4 rounded-md   hover:border-[#14435c]  text-white/70 border border-opacity-[80%] cursor-pointer w-[100%]"
              >
                {post}
              </div>
            ))}

          {/* 
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
          </div> */}
        </div>
        {savedPost.length > 4 && <Pagination />}
      </div>
    </div>
  );
};

export default TwitterPost;
