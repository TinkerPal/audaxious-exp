import { ReactComponent as Chat } from "../assets/svg/dashboardSvg/msg.svg";
import { ReactComponent as Gifs } from "../assets/svg/dashboardSvg/gifs.svg";
import { ReactComponent as Smilley } from "../assets/svg/dashboardSvg/smilley.svg";
// import { ReactComponent as Add } from "../assets/svg/dashboardSvg/addlabel.svg";
import { Image, Happyemoji, Hashtag, Add } from "iconsax-react";

const PostTextarea = ({ onTextChange }) => {
  return (
    <div className="w-[100%] md:w-auto relative">
      <textarea
        required
        name="spaceDescription"
        id="spaceDescription"
        cols="100"
        rows="7"
        placeholder="Type something..."
        // value={description}
        onChange={(e) => onTextChange(e.target.value)}
        // onBlur={descriptionOnBlur}
        className=" outline-none placeholder:text-[#A5A5A5] w-[100%] font-[275] border-[#FF6192] bg-[#161616] bg-opacity-25 border-2 border-opacity-80 rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
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
  );
};

export default PostTextarea;
