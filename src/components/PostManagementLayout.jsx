import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
// import DatePicker from "react-date-picker";
import DatePicker from "react-datepicker";

import pathConstant from "../routes/pathConstant";
import HowToCreateTweetModal from "../components/HowToCreateTweetModal";
import SelectComponent from "../components/Select";
import Emoji from "../components/Emoji";
import Select from "../components/Select";

import { ReactComponent as Robot } from "../assets/svg/robot.svg";
import { ReactComponent as PX } from "../assets/svg/p-x.svg";
import { ReactComponent as PIG } from "../assets/svg/p-ig.svg";
import { ReactComponent as PTelegram } from "../assets/svg/p-telegram.svg";
import { ReactComponent as PDiscord } from "../assets/svg/p-discord.svg";
import { ReactComponent as PFB } from "../assets/svg/p-fb.svg";
import { ReactComponent as Brick1 } from "../assets/svg/brick-line.svg";
import { ReactComponent as Brick2 } from "../assets/svg/brickline2.svg";
import avatar from "../assets/svg/avatar.svg";
import avatar1 from "../assets/svg/avatar1.svg";
import avatar2 from "../assets/svg/avatar2.svg";

import "react-datepicker/dist/react-datepicker.css";
import DecorativeElement from "./DecorativeElement";
import useAuthUser from "../hooks/useAuthUser";

const PostManagementLayout = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);

  const authUser = useAuthUser();
  const screenName = authUser.twitter.screenName;

  const handleSelect = (option) => {
    setSelected(option);
  };

  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsDateSelected(true);
    setSelectedDate(selectedDate);
  };

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const MyOptions = [
    "Share via Whatsapp",
    "Send Email",
    "Download",
    "Save as PDF",
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  let people = [
    {
      avatarUrl:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      avatarUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    {
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      avatarUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const twitterTab = (
    <>
      {/* <div className="flex flex-col justify-center items-center mt-44">
        <p className="text-white">Logo</p>
        <p className="font-Poppins text-[16px] text-center font-light text-[#585C60] my-4">
          You are yet to connect your twitter <br /> account to audaxious
        </p>
        <button className="border-[1px] border-[#2A3C46] rounded-[4px] py-3 px-6 text-[#E8E8E8] text-[15px] font-Poppins font-normal">
          Connect twitter (X)
        </button>
      </div> */}

      {/* <div className="grid md:grid-cols-2 gap-8 container mt-10">
        <div className="border-[0.5px] border-[#2A3C46] rounded-[4px]">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="border-[1px] border-[#25D986] opacity-50 bg-[#51E19E] bg-opacity-10 text-[#25D986] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  engage to earn
                </button>
                <button className="border-[1px] border-[#B525D9] opacity-50 bg-[#E0A2EF] bg-opacity-10 text-[#B525D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  Airdrops
                </button>
                <button className="border-[1px] border-[#25D9D9] opacity-50 bg-[#51E1E1] bg-opacity-10 text-[#25D9D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  Play to earn
                </button>
              </div>

              <div>
                <IconButton
                  aria-label="more"
                  onClick={handleClick}
                  aria-haspopup="true"
                  aria-controls="long-menu"
                >
                  <MoreVertIcon className="text-white" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  onClose={handleClose}
                  open={open}
                >
                  {MyOptions.map((option) => (
                    <MenuItem key={option} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#2A3C46]" />

          <div className="p-4">
            <div className="flex items-center gap-4">
              <p className="text-white">Logo</p>
              <h3 className="font-Poppins font-normal text-[18px] text-[#E8E8E8]">
                @justmylife_222
              </h3>
              <p className="text-[#929192] text-[14px] font-light">
                Dec 13, 7:44 PM
              </p>
            </div>

            <p className="font-Poppins font-light text-[#E8E8E8] text-[14px]">
              Hello Everyone, I am a fourth-year student of archi at the Federal
              University of Technology Owerri. For this semester, we are tasked
              with a mass housing project with eco-friendliness objectives.
              Please, if anyone has any resources that might be helpful... Read
              more
            </p>
            <p className="text-white">Logo</p>
          </div>
        </div>

        <div className="border-[0.5px] border-[#2A3C46] rounded-[4px]">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="border-[1px] border-[#25D986] opacity-50 bg-[#51E19E] bg-opacity-10 text-[#25D986] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  engage to earn
                </button>
                <button className="border-[1px] border-[#B525D9] opacity-50 bg-[#E0A2EF] bg-opacity-10 text-[#B525D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  Airdrops
                </button>
                <button className="border-[1px] border-[#25D9D9] opacity-50 bg-[#51E1E1] bg-opacity-10 text-[#25D9D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  Play to earn
                </button>
              </div>

              <div>
                <IconButton
                  aria-label="more"
                  onClick={handleClick}
                  aria-haspopup="true"
                  aria-controls="long-menu"
                >
                  <MoreVertIcon className="text-white" />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  onClose={handleClose}
                  open={open}
                >
                  {MyOptions.map((option) => (
                    <MenuItem key={option} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-[#2A3C46]" />

          <div className="p-4">
            <div className="flex items-center gap-4">
              <p className="text-white">Logo</p>
              <h3 className="font-Poppins font-normal text-[18px] text-[#E8E8E8]">
                @justmylife_222
              </h3>
              <p className="text-[#929192] text-[14px] font-light">
                Dec 13, 7:44 PM
              </p>
            </div>

            <p className="font-Poppins font-light text-[#E8E8E8] text-[14px]">
              Hello Everyone, I am a fourth-year student of archi at the Federal
              University of Technology Owerri. For this semester, we are tasked
              with a mass housing project with eco-friendliness objectives.
              Please, if anyone has any resources that might be helpful... Read
              more
            </p>
            <p className="text-white">Logo</p>
          </div>
        </div>
      </div> */}
    </>
  );

  const IGTab = (
    <>
      {/* <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] p-8 md:mx-20">
        <div className="border-[0.5px] border-[#436C82] rounded-[4px] px-10 py-4 mx-14">
          <form className="">
            <div className="w-full rounded-sm relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Something"
                className="w-full outline-none bg-transparent resize-none text-sm text-white"
                cols="30"
                rows="6"
              ></textarea>

              <div className="flex items-center gap-4">
                <span className="text-[#6EB2D7] text-lg cursor-pointer">
                  GIF
                </span>
                <span
                  onClick={() => setShowEmoji(!showEmoji)}
                  className="cursor-pointer hover:text-slate-300 text-[#6EB2D7]"
                >
                  <BsEmojiSmile />
                </span>

                <span className="text-[#6EB2D7] text-lg cursor-pointer">
                  + Labels
                </span>
              </div>

              {showEmoji && (
                <div className="absolute top-[100%] left-0">
                  <Picker
                    data={data}
                    emojiSize={20}
                    emojiButtonSize={28}
                    onEmojiSelect={addEmoji}
                    maxFrequentRows={0}
                  />
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-white">Date</p>
          <div className="bg-[#EBEDED] bg-opacity-10 px-10 p-2 rounded-sm">
            <p className="text-[#E8E8E8] text-xs">Sentiment</p>
          </div>
          <div>
            <Select value={selected} onChange={handleSelect} />
          </div>
        </div>
      </div> */}
    </>
  );

  return (
    <>
      <Helmet>
        <title>Post Management | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.POSTMANAGEMENT} />
      </Helmet>

      <div className="container">
        <div className="border-[0.5px] border-[#24343D] rounded-[8px] min-h-screen relative">
          <div className="border-[0.5px] border-solid border-[#314048] rounded-[8px] bg-rgba-blue-alpha-04 backdrop-blur-9 md:m-5 relative z-10">
            <div className="flex items-center justify-between md:p-4 p-2 py-4 relative">
              <div className="flex items-start md:gap-5 gap-2 relative">
                <div className="absolute -left-4 -top-4">
                  <Brick1 />
                </div>
                <Robot />
                <div>
                  <h3 className="text-[#EBEDED] font-Bricolage_Grotesque font-normal text-[14px] md:text-[24px] md:leading-[32px]">
                    Create & Schedule post using{" "}
                    <span className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                      AudaXious AI
                    </span>
                  </h3>
                  <p className="font-Poppins text-[#A5A5A5] text-[12px] md:text-[15px] md:leading-[24px] font-light mt-2">
                    Utilize the power of our AI to schedule and automate your
                    <br className="hidden md:block" />
                    posts OR simply post manually
                  </p>
                </div>
              </div>

              <div className="border border-[#314048] hidden md:block z-20 relative rounded-[13px] p-4 mx-4 bg-[#18242B] shadow-customShadow">
                <div className="text-white absolute -left-7 z-10 -top-3">
                  <img src={avatar1} alt="" />
                </div>
                <div className="flex items-center gap-4">
                  <img src={avatar2} alt="" />
                  <div>
                    <p className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                      Janet C
                    </p>
                    <p className="text-[#D3D3D3]">2.3k Likes</p>
                  </div>
                </div>
                <div className="text-white absolute -right-7 -bottom-3">
                  <img src={avatar} alt="" />
                </div>{" "}
              </div>
              <div className="absolute right-0 -bottom-0 z-10 hidden md:block">
                <Brick2 />
              </div>
            </div>
          </div>

          {/* <div className="md:hidden block">
            <div className="flex justify-between items-center p-3 mt-3">
              <div className="">
                <p className="text-white">Recent Post</p>
              </div>

              <div className="">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
                >
                  Create Post
                </button>
                <HowToCreateTweetModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  setIsOpen={setIsOpen}
                />
              </div>
            </div>
          </div> */}

          <div className="border-[0.5px] border-[#24343D] rounded-[8px] md:m-5 mt-4 p-4">
            <div className="flex items-center justify-between">
              <div className="hidden lg:block">
                <p className="text-white">Recent Post</p>
              </div>

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
                  {people.map((person, index) => (
                    <img
                      key={index}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#060B12]"
                      src={person.avatarUrl}
                      alt=""
                    />
                  ))}
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
                >
                  Create Post
                </button>
                <HowToCreateTweetModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  setIsOpen={setIsOpen}
                />
              </div>
            </div>
          </div>

          <Outlet />

          <div>{[<>{twitterTab}</>, <>{IGTab}</>][tab]}</div>
        </div>
      </div>
    </>
  );
};

export default PostManagementLayout;
