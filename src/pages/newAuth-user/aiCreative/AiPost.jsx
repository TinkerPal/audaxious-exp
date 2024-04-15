import SentimentDropdown from "./SentimentDropdown";
import GenerateDropdown from "./GenerateDropdown";
import GeneratedPost from "./GeneratedPost";
import { ReactComponent as Line } from "../../../assets/svg/dashboardSvg/lines.svg";
import TogglePost from "./TogglePost";
import PostTextarea from "../../../widget/PostTextarea";
import { useSelector } from "react-redux";
import { useState } from "react";
import { PostNewIntent } from "../engagePortal/TweeterIntent";
import axios from "axios";

const AiPost = () => {
  const username = useSelector((state) => state.authentication.userName);

  const [useAI, setUseAI] = useState(false);
  const [tweetContent, setTweetContent] = useState(
    "#AudaXious is Awesome $ADX #NFT #DeSo #P2E #SocialFi"
  );

  const [sentiment, setSentiment] = useState("");
  const [generatedTweet, setGeneratedTweets] = useState([]);

  const GENERATE_URL =
    "https://audaxious-130e2398fbd3.herokuapp.com/generate_tweet/";

  async function handleGenerate() {
    setGeneratedTweets([]);
    const response = await axios.post(GENERATE_URL, {
      number_of_texts: "2",
      keywords: tweetContent,
      sentiment: sentiment,
    });

    console.log("generated tweets", response);
    setGeneratedTweets(response.data);
  }

  function handlePost() {
    PostNewIntent(tweetContent, "");
  }
  function handleRadioClick() {
    setUseAI((useAI) => !useAI);
  }

  return (
    <div className="flex justify-center flex-col items-center pt-[2.68rem]   ">
      <main className="border border-[#2A3C46] border-opacity-25 rounded-md max-w-[43rem]">
        {/* <TogglePost /> */}
        <div className="px-[0.4rem] md:px-[2rem] xl:px-[4rem] pb-[2rem]">
          <div className="mt-2 mb-6">
            <div className="bg-[#641da1] py-2 rounded-tl-3xl rounded-br-3xl text-lg px-2 flex items-center justify-center text-center opacity-75">
              <div className="text-white font-bold">
                Type in your ideas and generate compelling content using AI
                creative.
              </div>
            </div>
          </div>

          {/* <div className="text-white w-full">
            Create compeling contents leveraging AI Creative
          </div> */}
          <div className="flex gap-[0.62rem]">
            <div className="">
              <PostTextarea onTextChange={setTweetContent} />
              <div className="flex flex-row items-start justify-between mt-3">
                <div className="flex flex-row  gap-[0.8rem] my-2 items-center text-center opacity-80">
                  <input
                    type="checkbox"
                    checked={useAI}
                    onChange={handleRadioClick}
                  />{" "}
                  <div className="text-center ">Use AI</div>
                </div>
                {useAI ? (
                  // <div className="flex justify-end gap-[0.8rem] opacity-90">
                  //   {/* <SentimentDropdown /> */}
                  //   {/* <GenerateDropdown /> */}

                  // </div>
                  <div className="flex  gap-[26px] opacity-80 relative">
                    {/* <button className="py-1 px-5 border border-[#79C4EC] rounded-md">
                      Save
                    </button> */}
                    <SentimentDropdown
                      sentiment={sentiment}
                      setSentiment={setSentiment}
                    />
                    <button
                      className="py-1 w-[100px] text-black bg-[#A9F453] rounded-md h-[35px]"
                      onClick={handleGenerate}
                    >
                      Generate
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-end gap-[0.45rem] opacity-80">
                    <button className="py-1 w-[115px] border border-[#F5BA22] rounded-md">
                      Save
                    </button>
                    <button
                      className="py-1 w-[100px] text-black bg-[#F5BA22] rounded-md"
                      onClick={handlePost}
                    >
                      Post
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="my-[1rem] flex flex-col gap-[2rem]">
        <span className="hidden md:flex">
          <Line />
        </span>
      </div>
      <div>{useAI && <GeneratedPost generatedTweet={generatedTweet} />}</div>
    </div>
  );
};

export default AiPost;
