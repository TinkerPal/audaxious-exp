import { ReactComponent as Chat } from "../assets/svg/dashboardSvg/msg.svg";
import { ReactComponent as Gifs } from "../assets/svg/dashboardSvg/gifs.svg";
import { ReactComponent as Smilley } from "../assets/svg/dashboardSvg/smilley.svg";
import { ReactComponent as Add } from "../assets/svg/dashboardSvg/addlabel.svg";

const PostTextarea = () => {
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
        // onChange={descriptionOnchange}
        // onBlur={descriptionOnBlur}
        className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] lg:w-[30rem] font-[275] border-[#436C82] bg-[#161616] bg-opacity-25 border-2 border-opacity-25 rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
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
  );
};

export default PostTextarea;
