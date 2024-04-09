const TWITTERPOST = [];
import { ReactComponent as NoPost } from "../../../assets/svg/dashboardSvg/noPost.svg";
import Button from "../../../../src/widget/Button";
import { useDispatch } from "react-redux";
import { aiCreatieActions } from "../../../store/aiCreativeSlice";
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
  return <div></div>;
};

export default TwitterPost;
