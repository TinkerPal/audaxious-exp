import React, { useState } from "react";
import { ReactComponent as Information } from "../../../assets/svg/dashboardSvg/info.svg";
import { ReactComponent as AddIcon } from "../../../assets/svg/dashboardSvg/addIcon.svg";
import { ReactComponent as Arrow } from "../../../assets/svg/dashboardSvg/arrow.svg";
import { ReactComponent as Calender } from "../../../assets/svg/dashboardSvg/calender.svg";
import { ReactComponent as Required } from "../../../assets/svg/dashboardSvg/required.svg";
import useInput, { useImage } from "../../../hooks/useInput";
import Input from "../../../widget/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "../../../widget/DateInput";
import Button from "../../../widget/Button";
import ImageInput from "../../../widget/ImageInput";
import { useDispatch, useSelector } from "react-redux";
import { createCampaign } from "../../../store/spaceActions";
import { toast } from "react-toastify";
import Loading from "../../Homes/Loading";
import { spaceActions } from "../../../store/spaceSlice";

const checkTitleValidity = (name) => name.trim() !== "";
const checkDescriptionValidity = (description) => description.trim() !== "";

const CampaignInformation = ({ setShowCampaignTask, spaceDetail }) => {
  const { image: profilePicture, onChangeHandler: onChangeProfilePicture } =
    useImage();
  const {
    onChangeValueHandler: titleOnchange,
    reset: resetTitle,
    value: title,
    onBlurHandler: titleOnBlur,
    valueIsInvalid: titleInvalid,
  } = useInput(checkTitleValidity);
  const {
    onChangeValueHandler: descriptionOnchange,
    value: description,
    reset: descriptionReset,
    onBlurHandler: descriptionOnBlur,
    valueIsInvalid: descriptionInvalid,
  } = useInput(checkDescriptionValidity);
  const [originalStartDate, setOriginalStartDate] = useState(null);
  const [originalEndDate, setOriginalEndDate] = useState(null);
  const [startDateError, setStartDateError] = useState(null);
  const [endDateError, setEndDateError] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.space.loading);

  const convertEndDateToString = new Date(originalEndDate);
  convertEndDateToString.setHours(23, 59, 59, 999);
  const endDate = convertEndDateToString.toISOString();
  const convertStartDateToString = new Date(originalStartDate);
  convertStartDateToString.setHours(23, 59, 59, 999);
  const startDate = convertStartDateToString.toISOString();

  const startDateOnchange = (e) => {
    setOriginalStartDate(e);
  };
  const endDateOnchange = (e) => {
    setOriginalEndDate(e);
  };

  const closeCreateCampaignModal = () => {
    // setOpenCampaignModal(false);
    dispatch(spaceActions.setOpenCampaignModal(false));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!originalEndDate) {
      setEndDateError(true);
      return;
    }
    if (!originalStartDate) {
      setStartDateError(true);
      return;
    }
    dispatch(spaceActions.setLoading(true));

    const data = { title, description, endDate, startDate };

    try {
      const result = await dispatch(createCampaign(spaceDetail.uuid, data));
      console.log(result);
      toast.success(result.message);
      dispatch(spaceActions.setLoading(false));
      dispatch(spaceActions.setCampaignId(result.data.uuid));
      setShowCampaignTask(true);
    } catch (error) {
      dispatch(spaceActions.setLoading(false));
      toast.error(error.response.data.error);
      setShowCampaignTask(false);
    }

    // console.log(data);
  };
  return (
    <div className="bg-[#060B12] relative py-[2rem] rounded-md w-[100%] min-w-[15rem] md:w-[43rem] xl:w-[55rem] px-[1rem] lg:px-[3rem] text-[#E8E8E8]">
      {loading && (
        <div className="">
          <Loading />
        </div>
      )}
      <div className="flex flex-col gap-[1.5rem] md:gap-[3rem]">
        <div className="flex items-center gap-[0.75rem]">
          <span title="Create Campaign">
            <Information />
          </span>
          <p className="text-[#E8E8E8] font-Poppins text-[1.25rem] font-[275] normal">
            Campaign Information
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center md:gap-[2rem]">
            <div className="flex flex-col gap-[1.5rem] max-w-[30rem]">
              <div className="flex flex-col items-start gap-[0.6rem] w-[100%]">
                <label
                  htmlFor="title"
                  className="font-Poppins text-[#E8E8E8] text-[0.875rem] font-[275] flex gap-[0.4rem]"
                >
                  <p>Title</p>
                  <span>
                    <Required />
                  </span>
                </label>
                <div className="relative w-[100%]">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    value={title}
                    onChange={titleOnchange}
                    onBlur={titleOnBlur}
                    placeholder="Enter your campaign title"
                    className="bg-transparent outline-none pr-[2rem] md:pr-[3rem] placeholder:text-[#A5A5A5] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md pl-[0.3rem] md:pl-[0.62rem] py-[0.62rem] text-[0.75rem] font-Poppins"
                  />
                  {/* <span className="absolute right-1 top-3 md:top-2 text-[0.7rem] md:text-[0.875rem] font-Poppins font-[300] text-[#79C4EC]">
                  0/40
                </span> */}
                </div>
                {titleInvalid && (
                  <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                    campaign must not be empty
                  </p>
                )}
              </div>{" "}
              <div className="flex items-center gap-[0.62rem] justify-between">
                <div className="flex flex-col items-start gap-[0.6rem] w-[100%]">
                  <label
                    htmlFor="startDate"
                    className="font-Poppins text-[#E8E8E8] text-[0.875rem] font-[275] flex gap-[0.4rem]"
                  >
                    <p>{"Start date"}</p>
                    <span>
                      <Required />
                    </span>
                  </label>

                  <label className="">
                    <DatePicker
                      onChange={startDateOnchange}
                      placeholderText="Select start date"
                      // value={startDate.toISOString()}
                      // value={originalStartDate}
                      selected={originalStartDate}
                      customInput={
                        <DateInput
                          isInvalid={startDateError}
                          errorMsg={"Select start date"}
                        />
                      }
                      showYearDropdown
                      scrollableYearDropdown
                    />
                  </label>
                </div>

                <span className="hidden md:block mt-[1.8rem]">
                  <Arrow />
                </span>
                <div className="flex flex-col gap-[0.6rem] w-[100%]">
                  <label
                    htmlFor="title"
                    className="font-Poppins text-[#EBEDED] text-[0.875rem] font-[275] flex gap-[0.4rem]"
                  >
                    <p>{"End date"}</p>
                    <span>
                      <Required />
                    </span>
                  </label>
                  <label className="">
                    <DatePicker
                      onChange={endDateOnchange}
                      // value={startDate.toISOString()}
                      placeholderText="Select end date"
                      selected={originalEndDate}
                      customInput={
                        <DateInput
                          isInvalid={endDateError}
                          errorMsg={"Select end date"}
                        />
                      }
                      showYearDropdown
                      scrollableYearDropdown
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-[0.6rem] items-start w-[100%]">
                <label
                  htmlFor="campaignDescription"
                  className="flex gap-[0.4rem]"
                >
                  <p className="font-Poppins text-[#E8E8E8] text-[0.875rem] font-[275]">
                    Campaign description
                  </p>
                  <span>
                    <Required />
                  </span>
                </label>

                <div>
                  <textarea
                    required
                    name="campaignDescription"
                    id="campaignDescription"
                    cols="150"
                    rows="8"
                    placeholder="What is your campaign about?"
                    value={description}
                    onChange={descriptionOnchange}
                    onBlur={descriptionOnBlur}
                    className="bg-transparent outline-none placeholder:text-[#A5A5A5] w-[100%] font-[275] bg-[#081017] border-[#436C82] border-[0.75px] border-opacity-[80%] rounded-md px-[0.62rem] py-[0.62rem] text-[0.75rem] font-Poppins"
                  ></textarea>
                  {/* {!descriptionInvalid && (
                <p className="text-end font-Poppins text-[#768898] text-[0.75rem] font-[300] mt-[-0.3rem]">
                  20 words max
                </p>
              )} */}
                  {descriptionInvalid && (
                    <p className="text-[#b40e0e] text-[0.75rem] font-[600] font-Poppins">
                      Description must not be empty
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-[2rem] md:mb-0">
              <ImageInput
                val={profilePicture}
                name="profilePicture"
                onChange={(e) => {
                  e.preventDefault();
                  onChangeProfilePicture(e);
                }}
              />
              <p className="text-[#A5A5A5] text-start md:text-center text-[1rem] xl:text-[1.24rem] mt-[0.58rem] font-[275] font-Poppins">
                JPG,PNG Max 1mb
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center md:items-end md:justify-end gap-4">
            <Button type={"button"} onClick={closeCreateCampaignModal}>
              Cancel
            </Button>
            <Button type={"submit"}>Next</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignInformation;
