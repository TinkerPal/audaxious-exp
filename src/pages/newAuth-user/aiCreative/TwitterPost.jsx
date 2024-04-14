import { ReactComponent as NoPost } from "../../../assets/svg/dashboardSvg/noPost.svg";
import Button from "../../../../src/widget/Button";
import { useDispatch } from "react-redux";
import { aiCreatieActions } from "../../../store/aiCreativeSlice";
import { TWITTERPOST } from "../../../utils/postApi";
import TwitterPostCard from "./TwitterPostCard";
import Pagination from "../../../widget/Pagination";
import AiPost from "./AiPost";
const TwitterPost = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(aiCreatieActions.setCreatePostModal(true));
  };
  if (TWITTERPOST.length <= 0) {
    return (
      <div className="flex flex-col justify-center mt-[5rem] items-center gap-[1rem] text-[#707171] ">
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
    <div className="grid grid-cols-2 items-start">
      <AiPost />

      <div className=" flex flex-col  col-span-1 items-center gap-6 py-[2.25rem]">
        {TWITTERPOST &&
          TWITTERPOST.map((post, index) => {
            return <TwitterPostCard post={post} key={index} />;
          })}
        {/* <div>
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center gap-2 font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] rounded-md hover:bg-[#D5EDF91A] cursor-pointer">
        <span>{"<<"}</span>
        <p className="">Previous</p>
      </div>
      <div className="flex items-center">
        <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
          <p className="">1</p>
        </div>
        <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
          <p className="">2</p>
        </div>
        <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
          <p className="">3</p>
        </div>
        <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
          <p className="">...</p>
        </div>
        <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
          <p className="">9</p>
        </div>
        <div className="font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] hover:bg-[#D5EDF91A] cursor-pointer">
          <p className="">10</p>
        </div>
      </div>
      <div className="flex items-center gap-2 font-Poppins text-[0.75rem] font-[400] text-[#E8E8E8] py-[0.5rem] px-[1rem] border border-[#2A3C4680] rounded-md hover:bg-[#D5EDF91A] cursor-pointer">
        <span>{">>"}</span>
        <p className="">Next</p>
      </div>
    </div>
  </div> */}
        <Pagination />
      </div>
    </div>
  );
};

export default TwitterPost;
