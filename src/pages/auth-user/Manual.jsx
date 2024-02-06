import React, { useEffect, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import DateTimePicker from "react-datetime-picker";
import clsx from "clsx";

import { TweetApi } from "../../config/StoreQueryConfig";
import useAuthUser from "../../hooks/useAuthUser";

import clock from "../../assets/svg/clock.svg";
import down from "../../assets/svg/down-time.svg";
import addimg from "../../assets/svg/add-img.svg";
import AppHeader from "../../components/AppHeader";

import { ReactComponent as Back } from "../../assets/svg/arrow-back.svg";
import { ReactComponent as PX } from "../../assets/svg/p-x.svg";
import { ReactComponent as PIG } from "../../assets/svg/p-ig.svg";
import { ReactComponent as PTelegram } from "../../assets/svg/p-telegram.svg";
import { ReactComponent as PDiscord } from "../../assets/svg/p-discord.svg";
import { ReactComponent as PFB } from "../../assets/svg/p-fb.svg";
import { ReactComponent as ManagePeople } from "../../assets/svg/manage-people.svg";
import NavigationToggle from "../../components/NavigateToggle";
import SharedLayout from "../../components/SharedLayout";
import pathConstant from "../../routes/pathConstant";

const Manual = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [tweetScheduledTimes, setTweetScheduledTimes] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [fileName, setFileName] = useState("");
  const [isGeneratingTweet, setIsGeneratingTweet] = useState(false);
  const [tab, setTab] = useState(0);

  const authUser = useAuthUser();
  const accessToken = authUser?.twitter?.twitterAccess;
  const screenName = authUser?.twitter?.screenName;
  const profileImageUrl = authUser?.twitter?.profileImageUrl;

  const [scheduleTweetMutation, scheduleTweetMutationResult] =
    TweetApi.useScheduleTweetMutation();

  useEffect(() => {
    const currentDate = new Date();
    setTweetScheduledTimes(currentDate);
  }, []);

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : "");
  };

  const handleDateChange = (date) => {
    setTweetScheduledTimes(date);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      tweet: "",
      media: "",
      tweet_at: new Date(),
    },
    validationSchema: Yup.object().shape({
      tweet: Yup.string().required("Tweet is required"),
      tweet_at: Yup.date().required("Date is required"),
    }),
    onSubmit: async (values) => {
      try {
        setIsGeneratingTweet(true);

        const formData = new FormData();

        formData.append("tweet", values.tweet);
        formData.append("media", selectedFile);
        formData.append("tweet_at", values.tweet_at.toISOString());

        const data = await scheduleTweetMutation({
          data: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }).unwrap();

        // setGeneratedTweets(data);
        console.log(data);
        setIsGeneratingTweet(false);
        // navigate(pathConstant.POSTMANAGEMENT);
      } catch (error) {
        toast.error("Error while processing the request");
        console.log(error);
        setIsGeneratingTweet(false);
      }
    },
  });

  const addEmoji = (emoji) => {
    setSelectedEmoji(emoji.native);
    setFieldValue("tweet", values.tweet + emoji.native);
  };

  return (
    <>
      <div className="border-[0.5px] border-[#24343D] rounded-[8px] min-h-screen relative">
        <AppHeader />
        <div className="border-[0.5px] border-[#24343D] rounded-[8px] md:m-5 mt-4 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="md:flex md:items-center gap-2"
            >
              <Back />
              <p className="text-white">Back</p>
            </button>

            <div>
              <div className="flex justify-center gap-4 flex-wrap">
                {[
                  // { label: "twitter (X)", SvgIcon: PX },
                  {
                    label: authUser.twitter ? (
                      <a
                        href={`https://twitter.com/${screenName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent"
                      >
                        @{screenName}
                      </a>
                    ) : (
                      "twitter (X)"
                    ),
                    SvgIcon: PX,
                  },
                  { label: "Instagram", SvgIcon: PIG },
                  { label: "Telegram", SvgIcon: PTelegram },
                  { label: "Discord", SvgIcon: PDiscord },
                  { label: "Facebook", SvgIcon: PFB },
                ].map(({ label, SvgIcon }, index) => {
                  return (
                    <div key={index} className="relative">
                      <button
                        className={clsx(
                          "flex items-center flex-col gap-2 font-Poppins text-[10px] md:text-[12px] leading-[16px]",
                          tab === index ? "text-[#E8E8E8]" : "text-[#A5A5A5]"
                        )}
                        onClick={() => setTab(index)}
                      >
                        <SvgIcon
                          style={{
                            fill: tab === index ? "#79c4ec" : "#909292",
                          }}
                        />
                        {label}
                      </button>
                      {tab === index && (
                        <div className="absolute -bottom-4 w-full h-[4px] transform -translate-x-1/2 bg-[#0C74F1] left-1/2" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="">
              <div className="mt-3 flex -space-x-2 overflow-hidden">
                {authUser?.twitter && (
                  <img
                    src={profileImageUrl}
                    alt="profile-img"
                    className="rounded-full"
                  />
                )}{" "}
                <button className="border border-[#2A3C46] flex items-center gap-1 p-2.5 bg-[#060B12] rounded-[34px]">
                  <p className="text-white font-Poppins text-[14px] font-light">
                    Manage People
                  </p>
                  <ManagePeople />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                onClick={scheduleTweetMutationResult.isLoading}
                disabled={isGeneratingTweet}
                className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
              >
                {isGeneratingTweet ? "Scheduling Tweet" : "Schedule Tweet"}
              </button>
            </form>
          </div>
        </div>
        <NavigationToggle />
        <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36 mt-4">
          <form>
            <div className="border-[0.5px] border-[#436C82] rounded-[4px] md:px-6 px-5 py-4 md:mx-16">
              <div className="w-full rounded-sm relative">
                <textarea
                  value={values.tweet}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="tweet"
                  placeholder="Type Something"
                  className="w-full outline-none text-white text-sm bg-transparent resize-none"
                  cols="30"
                  rows="6"
                ></textarea>
                {errors.tweet && touched.tweet && (
                  <div className="pt-1 mb-4 text-[#EB5757] text-[12px] font-Poppins">
                    {errors.tweet}
                  </div>
                )}

                <div className="flex items-center gap-x-4">
                  <span
                    onClick={() => setShowEmoji(!showEmoji)}
                    className="cursor-pointer hover:text-slate-300 text-[#6EB2D7]"
                  >
                    <BsEmojiSmile />
                  </span>

                  <label htmlFor="file-upload">
                    <img
                      src={addimg}
                      alt="file icon"
                      className="cursor-pointer"
                    />
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    name="media"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  {fileName && <span className="text-white">{fileName}</span>}

                  <div className="absolute top-[100%] left-0">
                    {showEmoji && (
                      <Picker
                        data={data}
                        emojiSize={20}
                        emojiButtonSize={28}
                        onEmojiSelect={addEmoji}
                        maxFrequentRows={0}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="container pt-3 flex justify-between items-center px-16">
              <div className="flex justify-center gap-1 cursor-pointer">
                <img src={clock} alt="clock" />
                <DateTimePicker
                  onChange={handleDateChange}
                  value={tweetScheduledTimes}
                  className="text-[#707171] font-Poppins2 react-datetime-picker__wrapper cursor-pointer"
                  calendarClassName="backgrounds"
                  calendarIcon={null}
                  clearIcon={null}
                  disableClock
                  minDate={new Date()}
                  required
                  style={{ outline: "none", boxShadow: "none" }}
                  amPmAriaLabel={null}
                />
              </div>
              {errors.tweet_at && touched.tweet_at && (
                <div className="pt-1 mb-4 text-[#EB5757] text-[12px] font-Poppins">
                  {errors.tweet_at}
                </div>
              )}
            </div>
          </form>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Manual;
