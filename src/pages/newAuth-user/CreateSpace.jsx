import { ReactComponent as ImageSelector } from "../../assets/svg/dashboardSvg/selectImage.svg";
import { ReactComponent as AddIcon } from "../../assets/svg/dashboardSvg/addIcon.svg";
import { ReactComponent as X } from "../../assets/svg/dashboardSvg/smX.svg";
import { ReactComponent as Discord } from "../../assets/svg/dashboardSvg/smDiscord.svg";
import { ReactComponent as Defi } from "../../assets/svg/dashboardSvg/defi.svg";
import { ReactComponent as Gaming } from "../../assets/svg/dashboardSvg/gaming.svg";
import { ReactComponent as Startups } from "../../assets/svg/dashboardSvg/startups.svg";
import { ReactComponent as Music } from "../../assets/svg/dashboardSvg/music.svg";
import { ReactComponent as Required } from "../../assets/svg/dashboardSvg/required.svg";
const CreateSpace = () => {
  return (
    <div className="text-[#FFF] bg-[#060B12] w-[70rem]">
      <div className="border-[#2A3C46] border border-opacity-[80%] rounded-sm">
        <div>
          <div className="bg-ElipseBg bg-cover">
            <label
              htmlFor="fileInput"
              className="block border-[#2A3C46] border-b border-opacity-[80%] h-[10rem] relative overflow-hidden"
            >
              <div className="absolute top-[30%] left-[50%] flex items-center flex-col gap-[0.5rem]">
                <ImageSelector />
                <p className="text-[1rem] text-[#2A3C46] text-opacity-[80%] font-Poppins font-[300] leading-[150%] normal">
                  Select Banner Image
                </p>
              </div>
              <input
                type="file"
                id="fileInput"
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: "0",
                  cursor: "pointer",
                }}
              />
            </label>
          </div>
          <div className="container">
            <div className="mt-[-3.5rem]">
              <label
                htmlFor="fileInput"
                className="block bg-[#13161E] border-[#2A3C46] border border-opacity-[80%] h-[7rem] w-[7rem] rounded-full relative overflow-hidden z-[10]"
              >
                <div className="absolute top-[28%] left-[33%] flex items-center flex-col gap-[0.5rem]">
                  <AddIcon />
                  <p className="text-[0.6rem] text-[#A5A5A5] font-Poppins font-[400] leading-[150%] normal">
                    Add Icon
                  </p>
                </div>
                <input
                  type="file"
                  id="fileInput"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    cursor: "pointer",
                  }}
                />
              </label>
              <p className="text-[#A5A5A5] text-[1rem] text-start mt-[0.58rem] font-[275] font-Poppins">
                JPG,PNG Max 1mb
              </p>
            </div>
          </div>
          <div className="container mt-[2rem] flex flex-col gap-[3rem]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start gap-[0.6rem]">
                <label
                  htmlFor="name"
                  className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your space name"
                  className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                />
              </div>
              <div className="flex flex-col items-start gap-[0.6rem] w-[25rem]">
                <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                  Link yout account
                </p>
                <div className="flex gap-[1rem] items-center">
                  <button className="px-[1rem] py-[0.5rem] font-Poppins text-[0.75rem] text-[#E8E8E8] font-[300] border-[#2A3C46] border border-opacity-[80%] flex items-center justify-center gap-[0.62rem] rounded-[2.5rem]">
                    <span>Connect Twitter</span>
                    <span>
                      <X />
                    </span>
                  </button>
                  <button className="px-[1rem] py-[0.5rem] font-Poppins text-[0.75rem] text-[#E8E8E8] font-[300] border-[#2A3C46] border border-opacity-[80%] flex items-center justify-center gap-[0.62rem] rounded-[2.5rem]">
                    <span>Connect Discord</span>
                    <span>
                      <Discord />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-start gap-[0.6rem]">
                <div>
                  <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                    Select Category
                  </p>
                </div>
                <div className="w-[25rem] flex flex-wrap items-center gap-[0.5rem]">
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Defi />
                    </span>
                    <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      De-Fi
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Gaming />
                    </span>
                    <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      Gaming
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Startups />
                    </span>
                    <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      Startups
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Music />
                    </span>
                    <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      Music
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Defi />
                    </span>
                    <span className="whitespace-nowrap font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      De-Fi
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Gaming />
                    </span>
                    <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      Gaming
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Startups />
                    </span>
                    <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      Startups
                    </span>
                  </div>
                  <div className="cursor-pointer px-[1rem] py-[0.5rem] flex items-center gap-[0.5rem] border-[#19242D] border-[2px] rounded-[40px]">
                    <span>
                      <Music />
                    </span>
                    <span className="font-Poppins text-[0.87rem] text-[#D3D3D3] font-normal">
                      Music
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[0.6rem] items-start w-[25rem]">
                <label htmlFor="spaceDescription" className="flex gap-[0.4rem]">
                  <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                    Space Description
                  </p>
                  <span>
                    <Required />
                  </span>
                </label>

                <div>
                  <textarea
                    name="spaceDescription"
                    id="spaceDescription"
                    cols="100"
                    rows="7"
                    className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                  ></textarea>
                  <p className="text-end font-Poppins text-[#768898] text-[0.75rem] font-[300] mt-[-0.3rem]">
                    20 words max
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-[-2rem] mb-[2rem]">
              <div className="flex flex-col items-start gap-[0.6rem]">
                <label htmlFor="website" className="flex gap-[0.4rem]">
                  <p className="font-Poppins text-[#E8E8E8] text-[0.75rem] font-[300]">
                    Add website
                  </p>
                  <span>
                    <Required />
                  </span>
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder="https://"
                  className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[24rem] font-[275] border-[#2A3C46] border border-opacity-[80%] rounded-lg px-[1rem] py-[0.5rem] text-[0.75rem] font-Poppins"
                />
              </div>

              <div className="w-[25rem] flex flex-col items-end justify-end">
                <button className="whitespace-nowrap py-[0.5rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#EBEDED]">
                  Create space
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpace;
