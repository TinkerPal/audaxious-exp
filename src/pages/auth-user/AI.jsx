import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import PathConstant from "../../routes/pathConstant";
import DateTimePicker from "react-datetime-picker";
import useAuthUser from "../../hooks/useAuthUser";
import GenerateTweet from "../../components/GenerateTweet";
import { TweetApi } from "../../config/StoreQueryConfig";

import pro from "../../assets/svg/start.svg";
import user from "../../assets/svg/avatar3.svg";
import down from "../../assets/svg/down-time.svg";
import clock from "../../assets/svg/clock.svg";
import addimg from "../../assets/svg/add-img.svg";

import { ReactComponent as EdithIcon } from "../../assets/svg/edit-post.svg";
import { ReactComponent as SaveIcon } from "../../assets/svg/save-post.svg";
import { ReactComponent as Stars } from "../../assets/svg/startsss.svg";
import { Try } from "@mui/icons-material";

const AI = () => {
  const [generatedTweets, setGeneratedTweets] = useState([]);

  const authUser = useAuthUser();
  const accessToken = authUser.twitter.twitterAccess;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const [generateTweetMutation, generateTweetMutationResult] =
    TweetApi.useGenerateTweetMutation();

  const [scheduleTweetMutation, scheduleTweetMutationResult] =
    TweetApi.useScheduleTweetMutation();

  function handleGenerateTweet(data) {
    setGeneratedTweets((p) => [
      ...p,
      ...Object.values(data).map((title) => ({
        tweet: title,
        tweet_at: new Date(),
        selected: false,
        media: null,
      })),
    ]);
  }

  function handleChanges(index) {
    return (key, value) => {
      setGeneratedTweets((p) => {
        const newGeneratedTweets = [...p];
        newGeneratedTweets[index][key] = value;
        return newGeneratedTweets;
      });
    };
  }

  console.log(generatedTweets);

  async function sendTweets() {
    try {
      const selectedTweets = generatedTweets.filter((t) => t.selected);

      const scheduleHeader = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      };

      for (const tweet of selectedTweets) {
        const formData = new FormData();

        Object.keys(tweet).forEach((key) => {
          if (tweet[key] !== null) {
            formData.append(key, tweet[key]);
          }
        });

        const responseData = await scheduleTweetMutation({
          headers: scheduleHeader,
          data: formData,
        }).unwrap();

        console.log(responseData);
      }
    } catch (error) {
      toast.error("Error while scheduling tweets");
      console.log(error);
    }
  }

  // const addEmojiToTweet = (index, emoji) => {
  //   const updatedTweets = [...generatedTweets];
  //   updatedTweets[index].tweet += emoji.native;
  //   setGeneratedTweets(updatedTweets);
  // };

  return (
    <>
      <div className="App">
        <GenerateTweet onGenerated={handleGenerateTweet} />

        <div className="flex justify-center gap-3 mb-3 items-center">
          <Stars />
          <p className="font-Poppins text-[16px] font-normal leading-[15px] bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
            {generatedTweets.length} posts generated, view results below
          </p>
        </div>

        <div>
          {generatedTweets.map((tweet, index) => (
            <GeneratedTweet
              key={index}
              {...{
                tweet,
                index,
                onChange: handleChanges(index),
              }}
            />
          ))}
        </div>
        <div className="flex justify-center items-center my-10">
          <button
            onClick={sendTweets}
            disabled={generatedTweets.length === 0}
            className="bg-[#79C4EC] text-[#15151A] rounded-[9px] py-3 px-6 w-32 font-Poppins text-[14px] font-normal"
          >
            Schedule
          </button>
        </div>
      </div>
    </>
  );
};

export default AI;

function GeneratedTweet({ tweet, onChange, index, addEmojiToTweet }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  // const [showEmoji, setShowEmoji] = useState(false);
  // const [selectedEmoji, setSelectedEmoji] = useState("");

  // console.log(tweet);

  // const handleInputChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   const inputValue = type === "file" ? files[0] : value;

  //   onChange(name, inputValue);
  // };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const inputValue = type === "file" ? files[0] : value;

    if (type === "file") {
      setSelectedFileName(files[0].name);
    }

    onChange(name, inputValue);
  };

  const handleDateTimeChange = (date) => {
    const isoDate = date.toISOString();
    onChange("tweet_at", isoDate);
  };

  // const addEmoji = (emoji) => {
  //   setSelectedEmoji(emoji.native);
  //   addEmojiToTweet(index, emoji);
  // };

  return (
    <div className="container grid grid-cols-1 justify-center items-center max-w-3xl gap-8 pt-4">
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] p-10">
        {/* <div className=""> */}
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="some_id"
            checked={tweet.selected}
            onChange={(e) => onChange("selected", e.target.checked)}
            className="
    relative peer shrink-0
    appearance-none w-4 h-4 border-[1px] border-[#94D0F0] rounded-sm
    mt-1 cursor-pointer"
          />
          <label htmlFor="some_id">label</label>
          <svg
            className="
    absolute 
    w-4 h-4 mt-1
    hidden peer-checked:block
    pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94D0F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        {isEditing ? (
          <div className="border-dashed relative border-[0.5px] border-[#2A3C46] rounded-[4px] p-10">
            <textarea
              value={tweet.tweet}
              onChange={(e) => onChange("tweet", e.target.value)}
              name=""
              className="w-full outline-none text-white text-sm bg-transparent resize-none"
              cols="30"
              rows="6"
            ></textarea>

            {/* <span
                onClick={() => setShowEmoji(!showEmoji)}
                className="cursor-pointer hover:text-slate-300 text-[#6EB2D7]"
              >
                <BsEmojiSmile />
              </span>

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
              </div> */}
          </div>
        ) : (
          <div className="border-solid border-[0.5px] border-[#2A3C46] rounded-[4px] p-8">
            <p className="text-white font-Poppins">{tweet.tweet}</p>

            <div className="mt-4 text-white">
              <input
                type="file"
                id="media"
                name="media"
                onChange={handleInputChange}
                className="mr-2"
              />
              {/* <label htmlFor="file-upload">
                <img src={addimg} alt="file icon" className="cursor-pointer" />
              </label>
              <input
                id="file-upload"
                type="file"
                name="media"
                onChange={handleInputChange}
                style={{ display: "none" }}
              />
              {selectedFileName && (
                <span className="text-white">{selectedFileName}</span>
              )} */}
            </div>
          </div>
        )}
        {/* </div> */}

        <div className="text-white flex items-center justify-between mt-4">
          <div className="flex justify-center items-center gap-1 mt-3">
            <img src={clock} alt="clock" />

            <DateTimePicker
              onChange={handleDateTimeChange}
              value={tweet.tweet_at}
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
          <div>
            <button
              className="bg-[#79C4EC] text-[#15151A] rounded-[9px] flex items-center justify-center py-3 px-3 w-36 font-Poppins text-[14px] font-normal"
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
    </div>
  );
}
