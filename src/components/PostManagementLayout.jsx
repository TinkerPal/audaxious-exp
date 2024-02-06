import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import pathConstant from "../routes/pathConstant";
import HowToCreateTweetModal from "../components/HowToCreateTweetModal";
import SelectComponent from "../components/Select";
import Emoji from "../components/Emoji";
import Select from "../components/Select";

import { ReactComponent as PX } from "../assets/svg/p-x.svg";
import { ReactComponent as PIG } from "../assets/svg/p-ig.svg";
import { ReactComponent as PTelegram } from "../assets/svg/p-telegram.svg";
import { ReactComponent as PDiscord } from "../assets/svg/p-discord.svg";
import { ReactComponent as PFB } from "../assets/svg/p-fb.svg";
import { ReactComponent as ManagePeople } from "../assets/svg/manage-people.svg";

import "react-datepicker/dist/react-datepicker.css";
import DecorativeElement from "./DecorativeElement";
import useAuthUser from "../hooks/useAuthUser";
import AppHeader from "./AppHeader";

const PostManagementLayout = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);

  const authUser = useAuthUser();
  const screenName = authUser?.twitter?.screenName;
  const profileImageUrl = authUser?.twitter?.profileImageUrl;

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

  const twitterTab = <></>;

  const IGTab = <></>;

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
          <AppHeader />

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
                <p className="text-white">Recent Tweets</p>
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
                          <div className="absolute -bottom-6 w-[48px] h-[4.5px] transform -translate-x-1/2 bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] left-1/2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="">
                <div className="mt-3 flex items-center -space-x-3 overflow-hidden">
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
