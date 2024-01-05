import React, { useState } from "react";
import Select from "../../components/Select";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import SelectCreateTweetType from "../../components/SelectCreateTweetType";
import PathConstant from "../../routes/pathConstant";
import { aiOptions } from "../../constants/globalConstant";

import pro from "../../assets/svg/start.svg";
import user from "../../assets/svg/avatar3.svg";

import "react-calendar/dist/Calendar.css";

const AI = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);
  const [typeSelected, setTypeSelected] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleDateSelect = (date) => {
    setShowDate(false);
    setSelectedDate(date);
  };

  const handleType = (option) => {
    setTypeSelected(option);

    // Handle navigation based on the selected option
    if (option) {
      if (option.value === "Create post manually") {
        navigate(PathConstant.POSTMANAGEMENTMANUAL);
      } else if (option.value === "Create post with AI") {
        navigate(PathConstant.POSTMANAGEMENTAI);
      }
    }
  };

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

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

  return (
    <>
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 md:mx-36 mt-4">
        <div className="flex justify-center items-center md:pb-6 py-6">
          <SelectCreateTweetType value={typeSelected} onChange={handleType} />
        </div>

        {/* <img src={user} alt="" /> */}
        <div className="border-[0.5px] z-10 border-[#436C82] rounded-[4px] py-4 px-6 md:mx-20">
          <form className="w-full">
            <div className="w-full rounded-sm relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Something"
                className="w-full outline-none text-white text-sm bg-transparent resize-none"
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

        <div className="flex items-center gap-4 pt-6 md:justify-end justify-center md:mr-20">
          <div className="bg-[#EBEDED] bg-opacity-10 md:px-10 p-2 rounded-sm flex items-center gap-4">
            <p className="text-[#E8E8E8] text-xs">Sentiment</p>
            <p className="text-[#E8E8E8] flex items-center gap-1 text-sm rounded-[2px] border px-2 border-[#E2AB8B] bg-[#ECC6B1] bg-opacity-20">
              <img src={pro} alt="" /> Pro
            </p>
          </div>
          <div>
            <Select
              value={selected}
              onChange={handleSelect}
              options={aiOptions}
            />
          </div>
        </div>
      </div>{" "}
      <div className="grid md:grid-cols-2 gap-8 md:container mt-10">
        <div className="border-[0.5px] border-[#2A3C46] rounded-[4px]">
          <div className="md:p-4 p-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="border-[1px] border-[#25D986] bg-[#51E19E] bg-opacity-10 text-[#25D986] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  engage to earn
                </button>
                <button className="border-[1px] border-[#B525D9] bg-[#E0A2EF] bg-opacity-10 text-[#B525D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  Airdrops
                </button>
                <button className="border-[1px] border-[#25D9D9] bg-[#51E1E1] bg-opacity-10 text-[#25D9D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
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
          <div className="md:p-4 p-2">
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
          <div className="md:p-4 p-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="border-[1px] border-[#25D986] bg-[#51E19E] bg-opacity-10 text-[#25D986] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  engage to earn
                </button>
                <button className="border-[1px] border-[#B525D9] bg-[#E0A2EF] bg-opacity-10 text-[#B525D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
                  Airdrops
                </button>
                <button className="border-[1px] border-[#25D9D9] bg-[#51E1E1] bg-opacity-10 text-[#25D9D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3">
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
          <div className="md:p-4 p-2">
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
      </div>
    </>
  );
};

export default AI;
