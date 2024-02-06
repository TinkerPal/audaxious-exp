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

import { ReactComponent as EdithIcon } from "../../assets/svg/edit-tweet-img.svg";
import { ReactComponent as SaveIcon } from "../../assets/svg/save-tweet-img.svg";
import { ReactComponent as Stars } from "../../assets/svg/startsss.svg";
import { ReactComponent as ManagePeople } from "../../assets/svg/manage-people.svg";
import { ReactComponent as Back } from "../../assets/svg/arrow-back.svg";

import AppHeader from "../../components/AppHeader";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import pathConstant from "../../routes/pathConstant";
import HowToCreateTweetModal from "../../components/HowToCreateTweetModal";
import SelectComponent from "../../components/Select";
import Emoji from "../../components/Emoji";
import Select from "../../components/Select";

import { ReactComponent as PX } from "../../assets/svg/p-x.svg";
import { ReactComponent as PIG } from "../../assets/svg/p-ig.svg";
import { ReactComponent as PTelegram } from "../../assets/svg/p-telegram.svg";
import { ReactComponent as PDiscord } from "../../assets/svg/p-discord.svg";
import { ReactComponent as PFB } from "../../assets/svg/p-fb.svg";

import "react-datepicker/dist/react-datepicker.css";
import NavigationToggle from "../../components/NavigateToggle";
import SharedLayout from "../../components/SharedLayout";
// import DecorativeElement from "./DecorativeElement";

const AI = () => {
  const [generatedTweets, setGeneratedTweets] = useState([]);
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const authUser = useAuthUser();
  const accessToken = authUser?.twitter?.twitterAccess;
  const screenName = authUser?.twitter?.screenName;
  const profileImageUrl = authUser?.twitter?.profileImageUrl;

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

            {/* <form className=""> */}
            <button
              onClick={sendTweets}
              disabled={generatedTweets.length === 0}
              className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
            >
              Schedule Selected Tweet
            </button>
            {/* </form> */}
          </div>
        </div>

        <NavigationToggle />

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
        {/* <div className="flex justify-center items-center my-10">
          <button
          
            className="bg-[#79C4EC] text-[#15151A] rounded-[9px] py-3 px-6 w-32 font-Poppins text-[14px] font-normal"
          >
            Schedule
          </button>
        </div> */}
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
        <div className="flex gap-2 mb-3">
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
          <label
            htmlFor="some_id"
            className="text-white font-Poppins text-[14px] font-normal"
          >
            Select
          </label>
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
          <div className="border-solid relative border-[0.5px] border-[#2A3C46] rounded-[4px] p-10">
            <textarea
              value={tweet.tweet}
              onChange={(e) => onChange("tweet", e.target.value)}
              name=""
              className="w-full outline-none text-[#E8E8E8] text-[14px] tracking-[0.14px] font-Poppins leading-normal font-light bg-transparent resize-none"
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
          <div className="border-dashed border-[0.5px] border-[#2A3C46] rounded-[4px] p-8">
            <p className="text-[#E8E8E8] text-[14px] font-Poppins leading-normal font-light tracking-[0.14px]">
              {tweet.tweet}
            </p>

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
              className="text-[#707171] font-Poppins react-datetime-picker__wrapper"
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
              className="rounded-[4px] border border-[#2A3C46] text-[#E8E8E8] flex items-center justify-center py-3 px-3 w-36 font-Poppins text-[14px] font-normal"
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
