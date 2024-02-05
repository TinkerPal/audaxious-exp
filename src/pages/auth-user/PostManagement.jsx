import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
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
import Spinner from "../../common/Spinner";

import { ReactComponent as Connect } from "../../assets/svg/connect.svg";
import "react-datepicker/dist/react-datepicker.css";

import useAuthUser from "../../hooks/useAuthUser";
import axios from "axios";
import {
  clearAuthUserTwitterAction,
  setAuthUserAction,
  setAuthUserTwitterAction,
} from "../../config/StoreSliceConfig";
import { AppApi, TweetApi } from "../../config/StoreQueryConfig";

const PostManagement = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const dispatch = useDispatch();
  const authUser = useAuthUser();
  console.log(authUser);

  // const accessToken = authUser.twitter.twitterAccess;

  useEffect(() => {
    if (authUser) {
      const accessToken = authUser.twitter.twitterAccess;
      setAccessToken(accessToken);
      setLoading(false);
    }
  }, [authUser]);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const { data, error, isLoading } = TweetApi.useGetTweetRequestQuery({
    headers,
    skip: loading || !accessToken,
  });

  console.log("Data:", data);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
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

  const TWITTER_URL = "https://twitter-auth.audaxious.com";

  function handleLogin() {
    // if (authUser) {
    //   handleLogout();
    // } else {
    window.open(`${TWITTER_URL}/auth/twitter`, "_self");
    // }
  }

  function handleLogout() {
    window.open(`${TWITTER_URL}/auth/logout`, "_self");
    // authUser.twitter(null);
    dispatch(clearAuthUserTwitterAction());
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`${TWITTER_URL}/auth/login/success`, {
          withCredentials: true,
        });

        console.log(response);

        const userData = {
          name: response.data.user.name,
          screenName: response.data.user.screenName,
          twitterAccess: response.data.user?.twitterAccess,
        };
        dispatch(setAuthUserTwitterAction(userData));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    getUser();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!accessToken) {
    return (
      <div className="flex flex-col justify-center items-center mt-14 mb-8">
        <Connect />
        <p className="font-Poppins text-[16px] text-center font-light text-[#585C60] my-4">
          You are yet to connect your Twitter account to audaxious
        </p>
        <button
          onClick={handleLogin}
          className="border-[1px] border-[#2A3C46] rounded-[4px] py-3 px-6 text-[#E8E8E8] text-[15px] font-Poppins font-normal"
        >
          Connect Twitter
        </button>
      </div>
    );
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
      <Helmet>
        <title>Post Management | Audaxious</title>
        <meta
          name="description"
          content="Create account so you can start trading tokens"
        />
        <link rel="canonical" href={pathConstant.POSTMANAGEMENT} />
      </Helmet>

      {data && data.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8 container mt-10">
          <Suspense
            fallback={
              <h1 className="text-white justify-center items-center flex">
                Loading Tweet...
              </h1>
            }
          >
            {data.map((tweet) => (
              <div
                key={tweet.id}
                className="border-[0.5px] border-[#2A3C46] rounded-[4px]"
              >
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
                      {tweet.user}
                    </h3>
                    <p className="text-[#929192] text-[14px] font-light">
                      {formatDate(tweet.created_at)}
                    </p>
                  </div>
                  <p className="font-Poppins font-light text-[#E8E8E8] text-[14px]">
                    {tweet.tweet}
                  </p>
                  <p className="text-white">Logo</p>
                </div>

                {tweet.media && (
                  <>
                    <div className="border-[0.5px] border-[#2A3C46]" />
                    <div className="p-4">
                      <img src={tweet.media} alt="Media" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </Suspense>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-14 mb-8">
          <p className="font-Poppins text-[20px] text-center font-light text-[#585C60] my-4">
            Nothing to see here!{" "}
          </p>
          <p className="font-Poppins text-[14px] text-center font-light text-[#585C60] my-4">
            Your post will appear here{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default PostManagement;
