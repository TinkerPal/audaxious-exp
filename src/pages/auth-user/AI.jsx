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
import down from "../../assets/svg/down-time.svg";
import clock from "../../assets/svg/clock.svg";
import addimg from "../../assets/svg/add-img.svg";

import "react-calendar/dist/Calendar.css";
import { TweetApi } from "../../config/StoreQueryConfig";
import { useFormik } from "formik";
import useAuthUser from "../../hooks/useAuthUser";
import { toast } from "react-toastify";
import Calender from "../../components/Calender";
import DateTimePicker from "react-datetime-picker";
import pathConstant from "../../routes/pathConstant";

import { ReactComponent as Stars } from "../../assets/svg/startsss.svg";
import { ReactComponent as Divide } from "../../assets/svg/divide.svg";

const AI = () => {
  const navigate = useNavigate();
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [generatedTweets, setGeneratedTweets] = useState({});
  const [selectedTweets, setSelectedTweets] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [tweetScheduledTimes, setTweetScheduledTimes] = useState({});

  // const [selectedTweets, setSelectedTweets] = useState([]);
  // const [selectAll, setSelectAll] = useState(false);

  // const handleTweetSelect = (index) => {
  //   const selectedIndex = selectedTweets.indexOf(index);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selectedTweets, index);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selectedTweets.slice(1));
  //   } else if (selectedIndex === selectedTweets.length - 1) {
  //     newSelected = newSelected.concat(selectedTweets.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selectedTweets.slice(0, selectedIndex),
  //       selectedTweets.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedTweets(newSelected);
  // };

  // const handleSelectAll = (event) => {
  //   if (event.target.checked) {
  //     const newSelected = Object.keys(generatedTweets).map((index) =>
  //       parseInt(index)
  //     );
  //     setSelectedTweets(newSelected);
  //     setSelectAll(true);
  //   } else {
  //     setSelectedTweets([]);
  //     setSelectAll(false);
  //   }
  // };

  const handleDateChange = (tweetId, date) => {
    const formattedDate = date
      .toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-");

    setTweetScheduledTimes({
      ...tweetScheduledTimes,
      [tweetId]: formattedDate,
    });

    console.log("Tweet Scheduled Times:", tweetScheduledTimes);
  };

  const handleType = (option) => {
    setTypeSelected(option);

    if (option) {
      if (option.value === "Create post manually") {
        navigate(PathConstant.POSTMANAGEMENTMANUAL);
      } else if (option.value === "Create post with AI") {
        navigate(PathConstant.POSTMANAGEMENTAI);
      }
    }
  };

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

  const handleImageChange = (event, index) => {
    // setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : "");
  };

  const authUser = useAuthUser();
  const accessToken = authUser.twitter.twitterAccess;
  // console.log(accessToken);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const [generateTweetMutation, generateTweetMutationResult] =
    TweetApi.useGenerateTweetMutation();

  const [scheduleTweetMutation, scheduleTweetMutationResult] =
    TweetApi.useScheduleTweetMutation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        number_of_texts: "",
        keywords: "",
        sentiment: "",
      },
      // validationSchema: Yup.object().shape({
      //
      // }),
      onSubmit: async (values) => {
        try {
          const generateTweetData = {
            number_of_texts: values.number_of_texts,
            keywords: values.keywords,
            sentiment: values.sentiment,
          };

          const data = await generateTweetMutation({
            data: generateTweetData,
            headers: headers,
          }).unwrap();

          setGeneratedTweets(data);
          // console.log(setGeneratedTweets);

          console.log(data);
        } catch (error) {
          toast.error("Error while processing the request");
          console.log(error);
        }
      },
    });

  const handleTweetSubmit = async () => {
    // if (!selectedFile) {
    //   console.error("Please select a file.");
    //   return;
    // }

    try {
      const formData = new FormData();

      Object.values(generatedTweets).forEach((content, index) => {
        formData.append("tweet", content);
        formData.append("media", selectedFile);
        formData.append(
          "tweet_at",
          (tweetScheduledTimes[index] instanceof Date
            ? tweetScheduledTimes[index]
            : new Date()
          ).toISOString()
        );
      });

      const scheduleHeader = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      };

      const responseData = await scheduleTweetMutation({
        headers: scheduleHeader,
        data: formData,
      }).unwrap();

      console.log(responseData);

      // navigate(pathConstant.POSTMANAGEMENT);

      toast.success("Tweets scheduled successfully!");
    } catch (error) {
      toast.error("Error while scheduling tweets");
      console.log(error);
    }
  };

  return (
    <>
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36 mt-4">
        {/* <div className="flex justify-center items-center md:pb-6 py-6">
          <SelectCreateTweetType value={typeSelected} onChange={handleType} />
        </div> */}

        {/* <img src={user} alt="" /> */}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="border-[0.5px] z-10 border-[#436C82] rounded-[4px] py-4 px-6 md:mx-20">
            <div className="w-full rounded-sm relative">
              <textarea
                value={values.keywords}
                onChange={handleChange}
                onBlur={handleBlur}
                name="keywords"
                placeholder="Type Something"
                className="w-full outline-none text-white text-sm bg-transparent resize-none"
                cols="30"
                rows="6"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end items-end pb-4 container pt-4 gap-4 px-20">
            <select
              value={values.number_of_texts}
              onChange={handleChange}
              onBlur={handleBlur}
              name="number_of_texts"
              className="px-3 py-2 border rounded-md shadow-sm focus:outline-none w-40"
            >
              <option value="">Number of Texts</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select
              value={values.sentiment}
              onChange={handleChange}
              onBlur={handleBlur}
              name="sentiment"
              className="w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            >
              <option value="">Sentiment</option>
              <option value="Neutral">Neutral</option>
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
            </select>

            <div className="">
              <button
                type="submit"
                disabled={generateTweetMutationResult.isLoading}
                className="bg-[#79C4EC] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
              >
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
      <div className="flex flex-col justify-center items-center py-10">
        <Divide />

        <div className="flex justify-center gap-3 mt-4 items-center">
          <Stars />
          <p className="font-Poppins text-[16px] font-normal leading-[15px] bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
            3 posts generated, view results below
          </p>
        </div>
      </div>
      <div className="container grid grid-cols-1 justify-center items-center max-w-3xl gap-8 pt-4">
        {generatedTweets && (
          <>
            {Object.values(generatedTweets).map((content, index) => (
              <>
                <div
                  key={index}
                  className="border-[0.5px] border-[#2A3C46] rounded-[4px] p-10"
                >
                  <div className="border-dashed border-[0.5px] border-[#2A3C46] rounded-[4px] p-10 flex items-start gap-4 justify-start">
                    <div className="flex items-start">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          id="some_id"
                          className="
    relative peer shrink-0
    appearance-none w-4 h-4 border-[1px] border-[#94D0F0] rounded-sm
    mt-1"
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

                      <div>
                        <div className="text-white">{content}</div>

                        <div className="flex items-center gap-4">
                          <div className="text-white my-4">
                            {/* <input
                            type="file"
                            onChange={(e) => handleImageChange(e, index)}
                            className="mr-2"
                          /> */}

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
                              onChange={(e) => handleImageChange(e, index)}
                              style={{ display: "none" }}
                            />
                            {fileName && (
                              <span className="text-white">{fileName}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-white flex items-center justify-between mt-6">
                    <div className="flex justify-center gap-1">
                      <img src={clock} alt="clock" />
                      <DateTimePicker
                        onChange={(date) => handleDateChange(index, date)}
                        value={
                          tweetScheduledTimes[index]
                            ? new Date(tweetScheduledTimes[index])
                            : new Date()
                        }
                        className="text-[#707171] font-Poppins2 react-datetime-picker__wrapper"
                        calendarClassName="backgrounds"
                        calendarIcon={<img src={down} alt="" />}
                        clearIcon={null}
                        disableClock
                        minDate={new Date()}
                        required
                        style={{ outline: "none", boxShadow: "none" }}
                      />
                    </div>

                    <button className="text-white">Edit</button>
                  </div>
                </div>
                {/* <div className="container py-6">
                  <button
                    type="submit"
                    onClick={handleTweetSubmit}
                    className="bg-[#636464] text-[#15151A] w-full rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
                  >
                    Shedule
                  </button>
                </div> */}
              </>
            ))}
          </>
        )}
      </div>
      <div className="container py-6">
        <button
          type="submit"
          onClick={handleTweetSubmit}
          className="bg-[#636464] text-[#15151A] w-full rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
        >
          Shedule
        </button>
      </div>
      {/* <h2 className="text-white container">jfjjfjf</h2>
      <div className="text-white">
        {isLoading && <p>Generating tweets...</p>}
        {isError && <p>Error generating tweets</p>}
        {generatedTweets && (
          <div>
            <h2 className="text-white text-3xl">Generated Tweets</h2>
            {Object.keys(generatedTweets).map((key, index) => (
              <div key={index}>
                <p className="text-white">{generatedTweets[key]}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}
      {/* <div className="grid md:grid-cols-2 lg:gap-8 md:gap-4 gap-8 lg:container mt-10"> */}
      {/* <div className="border-[0.5px] border-[#2A3C46] rounded-[4px]">
          <div className="md:p-4 p-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="border-[1px] border-[#25D986] bg-[#51E19E] bg-opacity-10 text-[#25D986] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3 md:px-1 lg:px-3">
                  engage to earn
                </button>
                <button className="border-[1px] border-[#B525D9] bg-[#E0A2EF] bg-opacity-10 text-[#B525D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3 md:px-1 lg:px-3">
                  Airdrops
                </button>
                <button className="border-[1px] border-[#25D9D9] bg-[#51E1E1] bg-opacity-10 text-[#25D9D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3 md:px-1 lg:px-3">
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
          </div> */}
      {/* <div className="border-[0.5px] border-[#2A3C46]" />
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
          </div> */}
      {/* </div> */}
      {/* <div className="border-[0.5px] border-[#2A3C46] rounded-[4px]">
          <div className="md:p-4 p-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button className="border-[1px] border-[#25D986] bg-[#51E19E] bg-opacity-10 text-[#25D986] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3 md:px-1 lg:px-3">
                  engage to earn
                </button>
                <button className="border-[1px] border-[#B525D9] bg-[#E0A2EF] bg-opacity-10 text-[#B525D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3 md:px-1 lg:px-3">
                  Airdrops
                </button>
                <button className="border-[1px] border-[#25D9D9] bg-[#51E1E1] bg-opacity-10 text-[#25D9D9] rounded-[4px] text-[10px] font-light font-Poppins py-2 px-3 md:px-1 lg:px-3">
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
        </div> */}
      {/* // </div> */}
    </>
  );
};

export default AI;
