import React, { useEffect, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import DateTimePicker from "react-datetime-picker";

import SelectCreateTweetType from "../../components/SelectCreateTweetType";
import PathConstant from "../../routes/pathConstant";
import { TweetApi } from "../../config/StoreQueryConfig";
import useAuthUser from "../../hooks/useAuthUser";

import clock from "../../assets/svg/clock.svg";
import down from "../../assets/svg/down-time.svg";
import addimg from "../../assets/svg/add-img.svg";

const Manual = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [tweetScheduledTimes, setTweetScheduledTimes] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [fileName, setFileName] = useState("");
  const [isGeneratingTweet, setIsGeneratingTweet] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    setTweetScheduledTimes(currentDate);
  }, []);

  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleImageChange = (event) => {
    // setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : "");
  };

  const handleDateChange = (date) => {
    setTweetScheduledTimes(date);
  };

  const authUser = useAuthUser();
  const accessToken = authUser.twitter.twitterAccess;

  const [scheduleTweetMutation, scheduleTweetMutationResult] =
    TweetApi.useScheduleTweetMutation();

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
      } catch (error) {
        toast.error("Error while processing the request");
        console.log(error);
        setIsGeneratingTweet(false);
      }
    },
  });

  const addEmoji = (emoji) => {
    setSelectedEmoji(emoji.native);
    // setShowEmoji(false);
    setFieldValue("tweet", values.tweet + emoji.native);
  };

  return (
    <>
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36 mt-4">
        <form className="" onSubmit={handleSubmit}>
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
            <div className="flex justify-center gap-1">
              <img src={clock} alt="clock" />
              <DateTimePicker
                onChange={handleDateChange}
                value={tweetScheduledTimes}
                className="text-[#707171] font-Poppins2 react-datetime-picker__wrapper"
                calendarClassName="backgrounds"
                calendarIcon={<img src={down} alt="" />}
                clearIcon={null}
                disableClock
                minDate={new Date()}
                required
                style={{ outline: "none", boxShadow: "none" }}
                // amPmAriaLabel="Select AM/PM"
              />
            </div>
            {errors.tweet_at && touched.tweet_at && (
              <div className="pt-1 mb-4 text-[#EB5757] text-[12px] font-Poppins">
                {errors.tweet_at}
              </div>
            )}
            <button
              type="submit"
              onClick={scheduleTweetMutationResult.isLoading}
              disabled={isGeneratingTweet}
              className="bg-[#79C4EC] text-[#15151A] rounded-[9px] w-30 py-3 px-6 font-Poppins text-[14px] font-normal"
            >
              {isGeneratingTweet ? "Scheduling" : "Schedule Tweet"}
            </button>
          </div>
        </form>
      </div>{" "}
    </>
  );
};

export default Manual;
