import { Dialog } from "@headlessui/react";
import AiPost from "../aiCreative/AiPost";
import { ReactComponent as Line } from "../../../assets/svg/dashboardSvg/lines.svg";
import PostTextarea from "../../../widget/PostTextarea";
import { CommentIntent, PostNewIntent } from "../engagePortal/TweeterIntent";
import axios from "axios";
import Loading from "../../Homes/Loading";
import SentimentDropdown from "../aiCreative/SentimentDropdown";
import { useEffect, useState } from "react";
import { Image, Happyemoji, Hashtag, Add } from "iconsax-react";
import { aiCreatieActions } from "../../../store/aiCreativeSlice";
import { useDispatch } from "react-redux";

const GenerateTweet = ({
  open,
  cancelHandler,
  completedTask,
  setSelectedIndex,
  isTaskUuidInArray,
  setProcessingStates,
  extractHandle,
  post,
  setPost,
  setCompletedTask,
  setTaskStatus,
  taskIndex,
}) => {
  //   const cancelHandler = () => {};

  const [loading, setLoading] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const [tweetContent, setTweetContent] = useState("");

  const [generatedTweet, setGeneratedTweets] = useState([]);

  const GENERATE_URL =
    "https://audaxious-130e2398fbd3.herokuapp.com/generate_tweet/";

  async function handleGenerate() {
    if (tweetContent === "") return;
    setGeneratedTweets([]);
    setLoading(true);
    try {
      const response = await axios.post(GENERATE_URL, {
        number_of_texts: "1",
        keywords: tweetContent,
        sentiment: "Positive",
      });
      setLoading(false);

      setGeneratedTweets(response.data);
      setTweetContent(response.data.text1);
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const handlePost = () => {
    const { task, index } = taskIndex;
    console.log(task, index);
    setSelectedIndex((prevSelectedIndex) => [...prevSelectedIndex, index]);

    //   const isTaskUuidInArray = (taskUuid, array) => {
    //   return array.some(item => item.uuid === taskUuid);
    // };
    if (!isTaskUuidInArray(task.uuid, completedTask)) {
      setProcessingStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
      const newTask = { uuid: task.uuid };

      const tweetId = extractHandle(task.url);
      // LikeIntent(tweetId);
      if (tweetContent.length <= 0) {
        return;
      }
      CommentIntent(tweetId, tweetContent);
      const updatedPost = { ...post, like: true };
      setTimeout(() => {
        setCompletedTask((prev) => [...prev, newTask]);
        setProcessingStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = false;
          return updatedStates;
        });
        setPost(updatedPost);
        setTaskStatus((prevTaskStatus) => {
          const updatedTaskStatus = [...prevTaskStatus];
          updatedTaskStatus[index] = "complete";
          return updatedTaskStatus;
        });
      }, 10000); // 60 seconds in milliseconds
    }
  };

  // `join follow like repost share post`;

  //   function handlePost() {
  //     if (tweetContent.length <= 0) {
  //       return;
  //     }
  //     PostNewIntent(tweetContent, "");
  //   }

  return (
    <div className="container">
      <Dialog
        as="div"
        className={`relative z-[5]`}
        open={open}
        onClose={cancelHandler}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-75"
          onClick={cancelHandler}
        />
        <div className="fixed inset-0 z-[6] overflow-y-auto">
          <div className="flex items-center py-[5rem] md:py-[0rem] justify-center my-[2rem] text-center sm:items-center sm:p-0">
            <Dialog.Panel className=" bg-slate-900">
              {/* <CreateSpace cancelHandler={cancelHandler} /> */}
              <div className="flex justify-center flex-col items-center pt-[2.68rem]">
                {/* <VerifyTweeter /> */}
                <main className="border border-[#2A3C46] border-opacity-25 rounded-md max-w-[43rem]">
                  {/* <TogglePost /> */}
                  <div className="px-[0.4rem] md:px-[2rem] xl:px-[4rem] pb-[2rem]">
                    <div className="mt-2 mb-6">
                      <div className="bg-[#641da1] py-2 rounded-tl-3xl rounded-br-3xl  px-2 flex items-center justify-center text-center ">
                        <div className="text-white font-medium">
                          Type in your ideas and generate compelling content
                          using AI creative.
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[0.62rem]">
                      <div className="">
                        <div className="w-[100%] md:w-auto relative">
                          <textarea
                            required
                            name="spaceDescription"
                            id="spaceDescription"
                            cols="100"
                            rows="7"
                            placeholder="Type something..."
                            value={tweetContent}
                            // defaultValue={"oo"}
                            onChange={(e) => setTweetContent(e.target.value)}
                            className=" text-white outline-none placeholder:text-[#A5A5A5] w-[100%] font-[275] border-[#FF6192] bg-[#161616] bg-opacity-25 border-2 border-opacity-80 rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                          ></textarea>
                          <div className="absolute bottom-4 left-4">
                            <div className="flex items-center gap-2 md:gap-5">
                              <span className=" cursor-pointer">
                                <Image size="22" color="#A9F453" />
                              </span>
                              <span className=" cursor-pointer">
                                <Hashtag size="22" color="#F5BA22" />
                              </span>
                              <span className=" cursor-pointer">
                                <Happyemoji size="22" color="#FF6192" />
                              </span>
                              <div className="flex gap-1 items-center cursor-pointer">
                                <span>
                                  <Add size="22" color="#FF8A65" />
                                </span>
                                <p className="font-[300] text-[0.8rem] font-Poppins text-[#FF8A65]">
                                  Label
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end gap-[1rem] opacity-80 relative mt-3">
                          <div>
                            {!loading && (
                              <button
                                disabled={isDisabled}
                                className="py-1 px-1 w-[100%] disabled:bg-[#969696] disabled:cursor-not-allowed whitespace-nowrap text-[0.8rem] text-black bg-[#3644BE] rounded-md h-[35px]"
                                onClick={handleGenerate}
                              >
                                Use AI to generate new comment
                              </button>
                            )}
                            {loading && (
                              <div className="w-[100px]">
                                <Loading />
                              </div>
                            )}
                          </div>

                          <button
                            className="py-1 w-[7.6rem] text-[0.8rem] text-black bg-[#fff] rounded-md h-[35px]"
                            onClick={handlePost}
                          >
                            post comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default GenerateTweet;
