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
import { TweetApi } from "../../config/StoreQueryConfig";
import { useFormik } from "formik";
import useAuthUser from "../../hooks/useAuthUser";
import { toast } from "react-toastify";
import Calender from "../../components/Calender";
import DateTimePicker from "react-datetime-picker";
import pathConstant from "../../routes/pathConstant";

const AI = () => {
  const navigate = useNavigate();
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);
  const [typeSelected, setTypeSelected] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [generatedTweets, setGeneratedTweets] = useState({});
  const [images, setImages] = useState([]);
  const [scheduledTimes, setScheduledTimes] = useState([]);
  const [selectedTweets, setSelectedTweets] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [tweetScheduledTimes, setTweetScheduledTimes] = useState({});

  const handleDateChange = (tweetId, date) => {
    setTweetScheduledTimes({ ...tweetScheduledTimes, [tweetId]: date });
  };

  // Function to handle individual tweet selection
  const handleTweetSelection = (tweet) => {
    if (selectedTweets.includes(tweet)) {
      setSelectedTweets(selectedTweets.filter((t) => t !== tweet));
    } else {
      setSelectedTweets([...selectedTweets, tweet]);
    }
  };

  // Function to handle "Select All" checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTweets([]);
    } else {
      setSelectedTweets(Object.values(generatedTweets));
    }
    setSelectAll(!selectAll);
  };

  console.log(generatedTweets);

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
    setSelectedFile(event.target.files[0]);

    // const newImages = [...images];
    // newImages[index] = event.target.files[0];
    // setImages(newImages);
  };

  const authUser = useAuthUser();
  const accessToken = authUser.twitter.twitterAccess;
  console.log(accessToken);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const [generateTweetMutation, generateTweetMutationResult] =
    TweetApi.useGenerateTweetMutation();

  const [scheduleTweetMutation, scheduleTweetMutationResult] =
    TweetApi.useScheduleTweetMutation();

  // if (isLoading) {
  //   return (
  //     <div className="container">
  //       <h2 className="text-white">Loading...</h2>
  //     </div>
  //   );
  // }

  // if (!data || data.length === 0) {
  //   return (
  //     <div className="container">
  //       <h2 className="text-white">No tweets available</h2>
  //     </div>
  //   );
  // }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        number_of_texts: "",
        keywords: "",
        sentiment: "",
      },
      // validationSchema: Yup.object().shape({
      //   amount: Yup.number()
      //     .min(
      //       150,
      //       'Please ensure your deposit amount is at least $150 or more'
      //     )
      //     .required('Amount is required'),
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

  // const handleTimeChange = (event, index) => {
  //   const newTimes = [...scheduledTimes];
  //   newTimes[index] = event.target.value;
  //   setScheduledTimes(newTimes);
  // };

  const handleTweetSubmit = async () => {
    if (!selectedFile) {
      console.error("Please select a file.");
      return;
    }

    try {
      const formData = new FormData();
      // formData.append('media', selectedFile);

      // const formData = new FormData();
      // formData.append('proof', selectedFile);

      Object.values(generatedTweets).forEach((content, index) => {
        formData.append("tweet", content);
        formData.append("media", selectedFile);
        formData.append(
          "tweet_at",
          tweetScheduledTimes[index] || new Date().toISOString()
        );
      });
      // const tweetData = Object.values(generatedTweets).map((content, index) => {
      //   return {
      //     tweet: content,
      //     media: images[index], // Assuming images is an array of uploaded files
      //     tweet_at: tweetScheduledTimes[index] || new Date(),
      //   };
      // });

      // Object.values(generatedTweets).forEach((content, index) => {
      //   formData.append(`tweet[${index}][tweet]`, content);
      //   formData.append(
      //     `tweet[${index}][tweet_at]`,
      //     tweetScheduledTimes[index] || new Date()
      //   );

      //   // Check if an image is present and append it to FormData
      //   if (images[index]) {
      //     formData.append(`tweet[${index}][media]`, images[index]);
      //   }
      // });

      // for (const tweet of tweetData) {
      //   await TweetApi.useScheduleTweetMutation(tweet, {
      //     headers: headers,
      //   });
      // }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
        // "Content-Type": "application/json",
      };

      const responseData = await scheduleTweetMutation(formData, {
        headers,
      });

      // console.log(responseData);

      // navigate(pathConstant.POSTMANAGEMENT);

      toast.success("Tweets scheduled successfully!");
    } catch (error) {
      toast.error("Error while scheduling tweets");
      console.log(error);
    }
  };

  // const {
  //   data: generatedTweets,
  //   isLoading,
  //   isError,
  // } = generateTweetMutationResult;

  // console.log(data);

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
              {/* <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Something"
                className="w-full outline-none text-white text-sm bg-transparent resize-none"
                cols="30"
                rows="6"
              ></textarea> */}
            </div>
          </div>

          <div className="flex justify-end items-end pb-4 container pt-4 gap-4 max-w-xl">
            <select
              value={values.number_of_texts}
              onChange={handleChange}
              onBlur={handleBlur}
              name="number_of_texts"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
            >
              <option value="">Select Number of Texts</option>
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
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
            >
              <option value="">Select Sentiment</option>
              <option value="Neutral">Neutral</option>
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
            </select>

            <div className="">
              <button
                type="submit"
                disabled={generateTweetMutationResult.isLoading}
                className="bg-[#636464] text-[#15151A] rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
              >
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
      {/* Checkbox to select all tweets */}
      {/* className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36
      mt-4" */}
      <div className="container grid grid-cols-1 justify-center items-center max-w-xl gap-8 pt-4">
        {generatedTweets && (
          <>
            <div className="container flex pt-6 items-center">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="mr-2"
              />
              <label className="text-white">Select all post</label>
            </div>
            {Object.values(generatedTweets).map((content, index) => (
              <>
                <div
                  key={index}
                  className="flex items-start border-[0.5px] border-[#2A3C46] rounded-[4px] p-10"
                >
                  <input
                    type="checkbox"
                    checked={selectedTweets.includes(content)}
                    onChange={() => handleTweetSelection(content)}
                    className="mr-2"
                  />
                  <div>
                    <div className="text-white">{content}</div>
                    <div className="flex items-center gap-4">
                      <div className="text-white my-4">
                        <input
                          type="file"
                          onChange={(e) => handleImageChange(e, index)}
                          className="mr-2"
                        />
                      </div>
                      {/* <div className="text-white">
                        <span
                          onClick={() => setShowEmoji(!showEmoji)}
                          className="cursor-pointer hover:text-slate-300 text-[#6EB2D7]"
                        >
                          <BsEmojiSmile />
                        </span>
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
                      </div> */}
                    </div>
                    <div className="text-white flex items-center justify-between">
                      <div>
                        <DateTimePicker
                          onChange={(date) => handleDateChange(index, date)}
                          value={tweetScheduledTimes[index] || new Date()}
                        />
                        {/* <DateTimePicker onChange={onChange} value={value} /> */}

                        {/* {" "}
                      {showDate && (
                        <div className="absolute top-[100%] left-0">
                          <Calender />
                        </div>
                      )} */}
                      </div>
                      {/* <button>Edit Button</button> */}
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="container py-6">
              <button
                type="submit"
                onClick={handleTweetSubmit}
                className="bg-[#636464] text-[#15151A] w-full rounded-[9px] py-3 px-6 font-Poppins text-[14px] font-normal"
              >
                Shedule
              </button>
            </div>
          </>
        )}
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
