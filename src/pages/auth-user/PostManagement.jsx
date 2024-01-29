import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import clsx from "clsx";
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

import pathConstant from "../../routes/pathConstant";
import HowToCreateTweetModal from "../../components/HowToCreateTweetModal";
import SelectComponent from "../../components/Select";
import Emoji from "../../components/Emoji";
import Select from "../../components/Select";

import { ReactComponent as Connect } from "../../assets/svg/connect.svg";

import "react-datepicker/dist/react-datepicker.css";

import useAuthUser from "../../hooks/useAuthUser";
import axios from "axios";

const PostManagement = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);
  // const [authUser, setAuthUser] = useState();
  // const [tweets, setTweets] = useState({});

  const authUser = useAuthUser();
  console.log(authUser);
  // const authUserAction = setAuthUserAction();
  // console.log(authUserAction);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = (selectedDate) => {
  //   onChange(selectedDate);
  //   setIsDateSelected(true);
  //   setSelectedDate(selectedDate);
  // };

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

  // function handleLogin() {
  //   if (authUser) {
  //     handleLogout();
  //   } else {
  //     window.open("https://twitter-auth.audaxious.com/auth/twitter", "_self");
  //   }
  // }

  function handleLogin() {
    if (authUser) {
      handleLogout();
    } else {
      window.open("https://twitter-auth.audaxious.com/auth/twitter", "_self");
    }
  }

  // http://localhost:8080/post-management

  function handleLogout() {
    window.open("https://twitter-auth.audaxious.com/auth/logout", "_self");
    setAuthUser(null);
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://twitter-auth.audaxious.com/auth/login/success",
          {
            withCredentials: true,
          }
        );

        console.log(response);
        // setAuthUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    getUser();
  }, []);

  const [scheduleDate, setScheduleDate] = useState(""); // State for date
  const [tweetTime, setTweetTime] = useState("");
  const [enteredText, setEnteredText] = useState(""); // State for time
  const [upload, setUpload] = useState("");
  const [tweets, setTweets] = useState({});

  function handleUpload(event) {
    const file = event.target.files[0];
    setUpload(file);
  }

  const handleDateChange = (event) => {
    setScheduleDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;

    const selectedTimeDate = new Date(`${scheduleDate}T${selectedTime}`);

    const userDate = new Date();
    const userTimezoneOffset = userDate.getTimezoneOffset();

    selectedTimeDate.setUTCHours(selectedTimeDate.getUTCHours());
    selectedTimeDate.setUTCMinutes(selectedTimeDate.getUTCMinutes());
    console.log(userTimezoneOffset);

    const adjustedTimeString = selectedTimeDate.toISOString();
    // Now selectedTimeDate contains the time adjusted to UTC
    setTweetTime(adjustedTimeString);
  };

  const handleEnteredText = (event) => {
    setEnteredText(event.target.value);
  };

  async function handleGenerate() {
    try {
      const response = await axios.post(
        "https://audaxious-130e2398fbd3.herokuapp.com/generate_tweet/",
        {
          number_of_texts: "4",
          keywords: "politics, football",
          sentiment: "Neutral",
        },
        {
          headers: {
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NjAzNzA1LCJpYXQiOjE3MDY1MTczMDUsImp0aSI6IjI0NTVmNmRiY2I1MDRmMGViZjljMDFhODgzMzZkZThhIiwidXNlcl9pZCI6MTl9.g1FlhquYDNi9ZAKYXz8qhbd0VymfTE17eCsLiirvt7w"}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      // setTweets(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleSubmit() {
    const formData = new FormData();

    formData.append("tweet", enteredText);
    formData.append("tweet_at", tweetTime);
    if (upload) {
      formData.append("media", upload);
    }

    try {
      const response = await axios.post(URLS.tweet_URL, formData, {
        headers: {
          Authorization: `Bearer ${authUser.twitterAccess}`, // Add the authorization header
          // "Content-Type": "application/json", // Set the content type if required
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

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
      <div className="flex flex-col justify-center items-center mt-44">
        <p className="text-white">Logo</p>
        <p className="font-Poppins text-[16px] text-center font-light text-[#585C60] my-4">
          You are yet to connect your twitter <br /> account to audaxious
        </p>
        <button className="border-[1px] border-[#2A3C46] rounded-[4px] py-3 px-6 text-[#E8E8E8] text-[15px] font-Poppins font-normal">
          Connect twitter (X)
        </button>
      </div>

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
      {/* <Helmet>
        <title>Post Management | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.POSTMANAGEMENT} />
      </Helmet>

      <div className="container">
        <div className="border-[0.5px] border-[#24343D] rounded-[8px] min-h-screen">
          <div className="border-[0.5px] border-[#24343D] rounded-[8px] bg-[#74C3F0] bg-opacity-[4%] m-2">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <p>Logo</p>
                <div>
                  <h3 className="text-[#EBEDED] font-Bricolage_Grotesque font-normal text-[20px] leading-[32px]">
                    Create & Schedule post using{" "}
                    <span className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                      AudaXious AI
                    </span>
                  </h3>
                  <p className="font-Poppins text-[#A5A5A5] text-[14px] font-light">
                    Utilize the power of our AI to schedule and automate your
                    <br />
                    posts OR simply post manually
                  </p>
                </div>
              </div>

              <div className="border border-[#314048] z-20 relative rounded-[14px] p-4 bg-[#18242B] bg-opacity-10">
                <div className="text-white absolute -left-5 z-10 top-0">
                  <p>Logo</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-white">Logo</p>
                  <div>
                    <p className="bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
                      Janet C
                    </p>
                    <p className="text-[#D3D3D3]">2.3k Likes</p>
                  </div>
                </div>
                <div className="text-white absolute -right-5 z-10 bottom-0">
                  <p>Logo</p>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="border-[0.5px] border-[#24343D] rounded-[8px] m-2 mt-4 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Recent Post</p>
              </div>

              <div>
                <div className="mt-3 flex -space-x-2 overflow-hidden">
                  {people.map((person, index) => (
                    <img
                      key={index}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={person.avatarUrl}
                      alt=""
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-center gap-4">
                  {[
                    { label: "twitter (X)", SvgIcon: "Icons" },
                    { label: "Instagram", SvgIcon: "Icons" },
                    { label: "Telegram", SvgIcon: "Icons" },
                    { label: "Discord", SvgIcon: "Icons" },
                    { label: "Facebook", SvgIcon: "Icons" },
                  ].map(({ label, SvgIcon }, index) => {
                    return (
                      <div key={index} className="relative">
                        <button
                          className={clsx(
                            "flex items-center flex-col gap-2 font-Poppins text-[12px] leading-[16px]",
                            tab === index ? "text-[#E8E8E8]" : "text-[#A5A5A5]"
                          )}
                          onClick={() => setTab(index)}
                        >
                          <p>Icon</p>
                          {label}
                        </button>
                        {tab === index && (
                          <div className="absolute -bottom-4 w-full h-[4px] transform -translate-x-1/2 bg-[#EBEDED] left-1/2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
                >
                  Compose Post
                </button>
                <HowToCreateTweetModal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  setIsOpen={setIsOpen}
                />
              </div>
            </div>
          </div>

          <div>{[<>{memberBenefitTab}</>, <>{projectBenefitTab}</>][tab]}</div>
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center mt-14 mb-8">
        <Connect />
        <p className="font-Poppins text-[16px] text-center font-light text-[#585C60] my-4">
          You are {authUser ? "connected" : "yet to connect"} your Twitter{" "}
          <br /> account to audaxious
        </p>
        <button
          onClick={handleLogin}
          className="border-[1px] border-[#2A3C46] rounded-[4px] py-3 px-6 text-[#E8E8E8] text-[15px] font-Poppins font-normal"
        >
          {authUser ? "Disconnect Twitter" : "Connect Twitter (X)"}
        </button>

        <button
          className="text-white"
          style={{ marginTop: "20px", alignItems: "stretch" }}
          onClick={handleGenerate}
        >
          Generate Tweets
        </button>

        {/* <img src={user} alt="" /> */}

        {/* <div className="flex flex-col">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h3 style={{ marginRight: "70px", alignItems: "center" }}>
              Auto generate tweets
            </h3>
          </div>
          <div className="flex flex-col">
            <p style={{ marginBottom: "5px" }}>Number of tweets to generate</p>

            <input
              id="number"
              style={{}}
              placeholder="Enter a Number"
              onChange={handleEnteredText}
            />
          </div>
          <div className="flex flex-col">
            <p style={{ marginBottom: "5px" }}>
              Enter key words/phrases (separate with comma)
            </p>

            <textarea
              id="tweet"
              style={{
                height: "60px",
                width: "500px",
              }}
              placeholder="Enter Tweet Texts"
              onChange={handleEnteredText}
            />
            <p
              style={{
                marginTop: "0px",
                fontSize: "12px",
                marginLeft: "5px",
                color: enteredText.length > 240 ? "red" : "inherit",
              }}
            ></p>
          </div>
          <div className="flex flex-col">
            <p style={{ marginBottom: "5px" }}>Choose Sentiment</p>

            <select multiple name="selections" id="selections">
              <option value="option1">Positive</option>
              <option value="option2">Negative</option>
              <option value="option2">Neutral</option>
            </select>
          </div>

          <button
            className="text-white"
            style={{ marginTop: "20px", alignItems: "stretch" }}
            onClick={handleGenerate}
          >
            Generate Tweets
          </button>
          {/* <div>
            <h3>Generated Tweets</h3>
            {Object.values(tweets).map((tweet, index) => (
              <p key={index}>{tweet}</p>
            ))}
          </div> */}
        {/* </div>  */}
      </div>
    </>
  );
};

export default PostManagement;
