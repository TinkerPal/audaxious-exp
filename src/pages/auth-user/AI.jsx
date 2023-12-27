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
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] p-8 md:mx-36 mt-4">
        <div className="flex justify-center items-center pb-6">
          <SelectCreateTweetType value={typeSelected} onChange={handleType} />
        </div>

        <div className="border-[0.5px] border-[#436C82] rounded-[4px] px-10 py-4 mx-16">
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

        <div className="flex items-center gap-4 pt-6 justify-center">
          <div className="bg-[#EBEDED] bg-opacity-10 px-10 p-2 rounded-sm flex items-center gap-4">
            <p className="text-[#E8E8E8] text-xs">Sentiment</p>
            <p className="text-[#E8E8E8] text-sm rounded-[2px] border px-2 border-[#E2AB8B] bg-[#ECC6B1] bg-opacity-20">
              Pro
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
      <div className="grid md:grid-cols-2 gap-8 container mt-10">
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
      </div>
    </>
  );
};

export default AI;
