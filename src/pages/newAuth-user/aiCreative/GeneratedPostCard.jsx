import { useState, useEffect } from "react";
import { ReactComponent as Chat } from "../../../assets/svg/dashboardSvg/msg.svg";
import { ReactComponent as Gifs } from "../../../assets/svg/dashboardSvg/gifs.svg";
import { ReactComponent as Smilley } from "../../../assets/svg/dashboardSvg/smilley.svg";
import { ReactComponent as Add } from "../../../assets/svg/dashboardSvg/addlabel.svg";
import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/timedate.svg";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
import { ReactComponent as EdithIcon } from "../../../assets/svg/edit-tweet-img.svg";
import { ReactComponent as SaveIcon } from "../../../assets/svg/save-tweet-img.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/polchecked.svg";
import { PostNewIntent } from "../engagePortal/TweeterIntent";

const GeneratedPostCard = ({ generatedTweet }) => {
  const [editGeneratedTweet, setEditGeneratedTweet] = useState([]);
  const [isEditing, setIsEditing] = useState(
    Array(generatedTweet.length).fill(false)
  );
  const generatedTweetArray = Object.values(generatedTweet);
  function handlePost(params) {
    PostNewIntent(params, "");
  }
  const handleInputChange = (index, value) => {
    const updatedGeneratedTweets = [...editGeneratedTweet];
    updatedGeneratedTweets[index] = value;
    setEditGeneratedTweet(updatedGeneratedTweets);
  };
  console.log("editGeneratedTweet", editGeneratedTweet);

  return generatedTweetArray?.map((tweet, index) => {
    {
      console.log("single", tweet);
    }
    return (
      <div
        key={index}
        className="border border-[#2A3C46] border-opacity-25 rounded-md mt-[1rem] max-w-[43rem] px-[0.5rem] md:px-[4rem] py-[1rem] "
      >
        <div>
          <div className="w-[100%] md:w-auto relative">
            <textarea
              required
              name="spaceDescription"
              id="spaceDescription"
              cols="100"
              rows="7"
              placeholder="Type something..."
              disabled={!isEditing[index]}
              // value={tweet}
              defaultValue={
                editGeneratedTweet[index] ? editGeneratedTweet[index] : tweet
              }
              onChange={(e) => handleInputChange(index, e.target.value)}
              // onBlur={descriptionOnBlur}
              className=" disabled:cursor-not-allowed bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%]  font-[275] border-[#A9F453] bg-[#161616] bg-opacity-25 border-2 border-dashed border-opacity-80 rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
            ></textarea>
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 md:gap-5">
                <span className=" cursor-pointer">
                  <Chat />
                </span>
                <span className=" cursor-pointer">
                  <Gifs />
                </span>
                <span className=" cursor-pointer">
                  <Smilley />
                </span>
                <div className="flex gap-1 items-center cursor-pointer">
                  <span>
                    <Add />
                  </span>
                  <p className="font-[300] text-[0.8rem] font-Poppins text-[#79C4EC]">
                    Label
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#707171] flex items-center justify-end mt-4 flex-wrap md:nowrap">
          {/* <div className="flex items-center gap-1">
          <span>
            <Clock />
          </span>
          <p className=" font-Poppins text-[#707171] text-[0.8rem]">
            Select date & time
          </p>
          <span>
            <Dropdowns />
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="some_id"
            // checked={tweet.selected}
            // onChange={(e) => onChange("selected", e.target.checked)}
            className="relative peer shrink-0 appearance-none w-4 h-4 border-[1px] border-[#94D0F0] rounded-sm mt-1 cursor-pointer"
          />
          <label
            htmlFor="some_id"
            className="text-[#707171] font-Poppins text-[0.8rem] font-[300]"
          >
            Share on Engage Portal
          </label>
          <Checked />
        </div> */}
          <div>
            <div className="flex justify-end gap-[0.45rem] opacity-80">
              <button className="py-1 w-[115px] border text-[#A9F453] border-[#A9F453] hover:bg-[#A9F453] hover:text-black rounded-md">
                Save
              </button>
              <button
                className="py-1 w-[100px] text-[#A9F453] border border-[#A9F453] hover:bg-[#A9F453] hover:text-black rounded-md"
                onClick={() =>
                  handlePost(
                    editGeneratedTweet[index]
                      ? editGeneratedTweet[index]
                      : tweet
                  )
                }
              >
                Post
              </button>
              <button
                className="rounded-md text-[#A9F453] border border-[#A9F453] hover:bg-[#A9F453] hover:text-black flex items-center justify-center py-[0.5rem] px-[1rem] w-[7.8rem] font-Poppins text-[0.7rem] font-normal"
                onClick={() => {
                  const updatedEditing = [...isEditing];
                  updatedEditing[index] = !updatedEditing[index];
                  setIsEditing(updatedEditing);
                }}
              >
                <div className="flex items-center gap-2">
                  <EdithIcon /> Edit Post
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default GeneratedPostCard;
