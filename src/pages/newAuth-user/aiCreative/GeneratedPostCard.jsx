import { useState } from "react";
import { ReactComponent as Chat } from "../../../assets/svg/dashboardSvg/msg.svg";
import { ReactComponent as Gifs } from "../../../assets/svg/dashboardSvg/gifs.svg";
import { ReactComponent as Smilley } from "../../../assets/svg/dashboardSvg/smilley.svg";
import { ReactComponent as Add } from "../../../assets/svg/dashboardSvg/addlabel.svg";
import { ReactComponent as Clock } from "../../../assets/svg/dashboardSvg/timedate.svg";
import { ReactComponent as Dropdowns } from "../../../assets/svg/dashboardSvg/dropdowns.svg";
import { ReactComponent as EdithIcon } from "../../../assets/svg/edit-tweet-img.svg";
import { ReactComponent as SaveIcon } from "../../../assets/svg/save-tweet-img.svg";
import { ReactComponent as Checked } from "../../../assets/svg/dashboardSvg/polchecked.svg";

const GeneratedPostCard = ({ generatedTweet }) => {
  const [isEditing, setIsEditing] = useState(false);
  const generatedTweetArray = Object.values(generatedTweet);
  return generatedTweetArray?.map((tweet, index) => (
    <div
      key={index}
      className="border border-[#2A3C46] border-opacity-25 rounded-md mt-[1rem] max-w-[43rem] px-[0.5rem] md:px-[4rem] pt-[1rem] "
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
            disabled={!isEditing}
            value={tweet}
            // onChange={descriptionOnchange}
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
      <div className="text-[#707171] flex items-center justify-between mt-4 flex-wrap md:nowrap">
        <div className="flex items-center gap-1">
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
        </div>
        <div>
          <button
            className="rounded-[4px] border border-[#2A3C46] text-[#E8E8E8] flex items-center justify-center py-[0.5rem] px-[1rem] w-[7.8rem] font-Poppins text-[0.7rem] font-normal"
            onClick={() => setIsEditing((p) => !p)}
          >
            {isEditing ? (
              <div className="flex items-center gap-2">
                <SaveIcon /> Save Post
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <EdithIcon /> Edit Post
              </div>
            )}{" "}
          </button>
        </div>
      </div>
    </div>
  ));
};

export default GeneratedPostCard;
