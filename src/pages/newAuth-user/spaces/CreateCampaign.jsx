import React from "react";
import { ReactComponent as Information } from "../../../assets/svg/dashboardSvg/info.svg";
import { ReactComponent as AddIcon } from "../../../assets/svg/dashboardSvg/addIcon.svg";
import { ReactComponent as Arrow } from "../../../assets/svg/dashboardSvg/arrow.svg";
import { ReactComponent as Calender } from "../../../assets/svg/dashboardSvg/calender.svg";
import { useImage } from "../../../hooks/useInput";
import Input from "../../../widget/Input";

const CreateCampaign = () => {
  const { image: profilePicture, onChangeHandler: onChangeProfilePicture } =
    useImage();
  return (
    <div className="bg-[#060B12] relative py-[2rem] rounded-md w-[100%] min-w-[15rem] md:w-[43rem] px-[1rem] md:px-[3rem] text-[#E8E8E8]">
      <div className="flex flex-col gap-[1.5rem] md:gap-[3rem]">
        <div className="flex items-center gap-[0.75rem]">
          <span title="Create Campaign">
            <Information />
          </span>
          <p className="text-[#EBEDED] font-Poppins text-[1.125rem] font-[600] normal">
            Campaign Information
          </p>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex gap-3 md:gap-5">
            <div className="">
              <label
                htmlFor="profilePicture"
                className="block bg-[#13161E] border-[#2A3C46] border border-opacity-[80%] h-[5rem] w-[5rem] md:h-[7rem] md:w-[7rem] rounded-full relative overflow-hidden z-[10]"
              >
                <img
                  src={
                    profilePicture ? URL.createObjectURL(profilePicture) : ""
                  }
                  alt=""
                  className="w-[100%]"
                />
                <div className="absolute top-[15%] md:top-[28%] left-[25%] md:left-[33%] flex items-center flex-col gap-[0.5rem]">
                  <AddIcon />
                  <p className="text-[0.6rem] text-[#A5A5A5] font-Poppins font-[400] leading-[150%] normal">
                    Add Icon
                  </p>
                </div>
                <input
                  // required
                  type="file"
                  name="profilePicture"
                  id="profilePicture"
                  onChange={onChangeProfilePicture}
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: "0",
                    cursor: "pointer",
                  }}
                />
              </label>
              <p className="text-[#A5A5A5] text-[0.5rem] text-start mt-[0.58rem] font-[275] font-Poppins">
                JPG,PNG Max 5mb
              </p>
            </div>
            <div className="flex flex-col items-start gap-[0.6rem] w-[100%]">
              <label
                htmlFor="title"
                className="font-Poppins text-[#E8E8E8] text-[1rem] font-[300]"
              >
                Title
              </label>
              <div className="relative w-[100%]">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  //   value={title}
                  //   onChange={titleOnchange}
                  //   onBlur={titleOnBlur}
                  placeholder="Enter your campaign title"
                  className="bg-transparent outline-none pr-[2rem] md:pr-[3rem] placeholder:text-[#A5A5A5] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md pl-[0.3rem] md:pl-[0.62rem] py-[0.62rem] text-[0.75rem] font-Poppins"
                />
                <span className="absolute right-1 top-3 md:top-2 text-[0.7rem] md:text-[0.875rem] font-Poppins font-[300] text-[#79C4EC]">
                  0/40
                </span>
              </div>
              {/* {titleInvalid && (
                      <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                        campaign must not be empty
                      </p>
                    )} */}
            </div>{" "}
          </div>
          <div className="flex flex-col gap-[0.6rem] items-start w-[100%]">
            <label htmlFor="campaignDescription">
              <p className="font-Poppins text-[#E8E8E8] text-[1rem] font-[300]">
                Description and instruction
              </p>
            </label>

            <div>
              <textarea
                required
                name="campaignDescription"
                id="campaignDescription"
                cols="150"
                rows="8"
                // value={description}
                // onChange={descriptionOnchange}
                // onBlur={descriptionOnBlur}
                className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md px-[0.62rem] py-[0.62rem] text-[0.75rem] font-Poppins"
              ></textarea>
              {/* {!descriptionInvalid && (
                <p className="text-end font-Poppins text-[#768898] text-[0.75rem] font-[300] mt-[-0.3rem]">
                  20 words max
                </p>
              )}
              {descriptionInvalid && (
                <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                  Description must not be empty
                </p>
              )} */}
            </div>
          </div>

          <div className="flex items-center gap-[0.62rem] justify-between">
            <div className="flex flex-col items-start gap-[0.6rem] w-[100%]">
              <label
                htmlFor="title"
                className="font-Poppins text-[#E8E8E8] text-[0.875rem] font-[300]"
              >
                {"Campaign Period"}
              </label>
              <div className="relative w-[100%]">
                <input
                  required
                  type="text"
                  name="startDate"
                  id="startDate"
                  placeholder=""
                  className="bg-transparent outline-none placeholder:text-[#A5A5A5] px-[0.62rem] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md py-[0.62rem] text-[0.75rem] font-Poppins"
                />
                <span className="absolute left-3 top-1 cursor-pointer">
                  <Calender />
                </span>
              </div>
            </div>
            <span className="hidden md:block mt-[1.8rem]">
              <Arrow />
            </span>
            <div className="flex flex-col items-end gap-[0.6rem] w-[100%]">
              <label
                htmlFor="title"
                className="font-Poppins text-[#EBEDED] text-[0.875rem] font-[300]"
              >
                {"Never Ends"}
              </label>
              <div className="relative w-[100%]">
                <input
                  required
                  type="text"
                  name="endsDate"
                  id="endsDate"
                  placeholder=""
                  className="bg-transparent outline-none placeholder:text-[#A5A5A5] px-[0.62rem] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md py-[0.62rem] text-[0.75rem] font-Poppins"
                />
                <span className="absolute left-3 top-1 cursor-pointer">
                  <Calender />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-center md:items-end md:justify-end">
          <button
            type="submit"
            className="whitespace-nowrap py-[0.5rem] w-[11rem] px-[1rem] font-Poppins text-[#060B12] text-[1rem] font-normal rounded-md bg-[#EBEDED]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
