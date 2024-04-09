import { ReactComponent as Chat } from "../../../assets/svg/dashboardSvg/msg.svg";
import { ReactComponent as Gifs } from "../../../assets/svg/dashboardSvg/gifs.svg";
import { ReactComponent as Smilley } from "../../../assets/svg/dashboardSvg/smilley.svg";
import { ReactComponent as Add } from "../../../assets/svg/dashboardSvg/addlabel.svg";
import SentimentDropdown from "./SentimentDropdown";
import GenerateDropdown from "./GenerateDropdown";
import GeneratedPost from "./GeneratedPost";
import { ReactComponent as Line } from "../../../assets/svg/dashboardSvg/lines.svg";
import TogglePost from "./TogglePost";

const AiPost = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <main className="border border-[#2A3C46] rounded-md mt-[2.68rem] max-w-[43rem]">
        <TogglePost />
        <div className="px-[0.4rem] md:px-[2rem] xl:px-[4rem] pb-[3rem]">
          <div className="flex gap-[0.62rem]">
            <div className="w-[2.5rem] h-[2.5rem] border-[#436C82] border rounded-full"></div>
            <div>
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
                  className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] lg:w-[30rem] font-[275] border-[#436C82] bg-[#081017] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
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
              <div className="flex justify-end gap-[0.8rem]">
                <SentimentDropdown />
                <GenerateDropdown />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="my-[1.8rem] flex flex-col gap-[2rem]">
        <span className="">
          <Line />
        </span>
      </div>
      <GeneratedPost />
    </div>
  );
};

export default AiPost;
