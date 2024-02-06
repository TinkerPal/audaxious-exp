import { useState, useEffect } from "react";
import { TweetApi } from "../config/StoreQueryConfig";
import useAuthUser from "../hooks/useAuthUser";
import { ReactComponent as Divide } from "../assets/svg/divide.svg";
import { toast } from "react-toastify";
import NumberOfTweetSelect from "./NumberOfTweetSelect";
import { numOfTweets } from "../constants/globalConstant";

export default function GenerateTweet({ onGenerated }) {
  const [selectedNumberOfTweets, setSelectedNumberOfTweets] = useState("");
  const [selectedSentiment, setSelectedSentiment] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  const authUser = useAuthUser();
  const accessToken = authUser?.twitter?.twitterAccess;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const [generateTweetMutation, generateTweetMutationResult] =
    TweetApi.useGenerateTweetMutation();

  const handleGenerateTweets = async () => {
    try {
      setLoading(true);

      const generateTweetData = {
        number_of_texts: selectedNumberOfTweets,
        keywords: selectedKeywords,
        sentiment: selectedSentiment,
      };

      generateTweetMutationResult.isLoading &&
        generateTweetMutationResult.isLoading(true);

      const data = await generateTweetMutation({
        data: generateTweetData,
        headers: headers,
      }).unwrap();

      generateTweetMutationResult.isLoading &&
        generateTweetMutationResult.isLoading(false);

      onGenerated?.(data);

      setLoading(false);

      setSelectedNumberOfTweets("");
    } catch (error) {
      toast.error("Error while processing the request");
      generateTweetMutationResult.isLoading &&
        generateTweetMutationResult.isLoading(false);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [selectedNumberOfTweets, selectedSentiment, selectedKeywords]);

  useEffect(() => {
    if (selectedNumberOfTweets && selectedSentiment && selectedKeywords) {
      handleGenerateTweets();
    }
  }, [selectedNumberOfTweets, selectedSentiment, selectedKeywords]);

  return (
    <>
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36 3xl:mx-72 mt-4">
        <div className="border-[0.5px] z-10 border-[#436C82] rounded-[4px] py-4 px-6 md:mx-20">
          <div className="w-full rounded-sm relative">
            <textarea
              value={selectedKeywords}
              onChange={(e) => setSelectedKeywords(e.target.value)}
              name="keywords"
              placeholder="Type Something"
              className="w-full outline-none text-[#E8E8E8] text-[14px] font-Poppins leading-normal font-light tracking-[0.14px] bg-transparent resize-none"
              cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end items-end pb-4 container pt-4 gap-4 px-20">
          <select
            value={selectedSentiment}
            onChange={(e) => setSelectedSentiment(e.target.value)}
            name="sentiment"
            className="w-40 border border-[#2A3C46] cursor-pointer bg-transparent text-[#707171] px-3 py-2 rounded-md shadow-sm focus:outline-none"
          >
            <option value="">Sentiment</option>
            <option value="Neutral">Neutral</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
          </select>

          <div className="relative">
            <select
              value={selectedNumberOfTweets}
              onChange={(e) => setSelectedNumberOfTweets(e.target.value)}
              name="number_of_texts"
              // className="px-3 py-2 border rounded-md shadow-sm focus:outline-none w-40"
              className="px-3 py-2 border cursor-pointer border-[#79C4EC] bg-[#79C4EC] rounded-md shadow-sm focus:outline-none appearance-none text-[#000000]"
              // style={{
              //   backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.707a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414zM6 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" clip-rule="evenodd" /></svg>')`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundPosition: "right 5px center",
              //   backgroundSize: "20px",
              // }}
            >
              <option value="">Number of Tweet</option>
              <option value="1">Generate 1</option>
              <option value="2">Generate 2</option>
              <option value="3">Generate 3</option>
              <option value="4">Generate 4</option>
              <option value="5">Generate 5</option>
            </select>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414zM6 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center items-center mt-5">
          <p className="font-Poppins text-[16px] font-normal leading-[15px] bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
            Generating Tweet...
          </p>
        </div>
      )}{" "}
      <div className="flex flex-col justify-center items-center py-10">
        <Divide />
      </div>
    </>
  );
}

// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// import { TweetApi } from "../config/StoreQueryConfig";
// import useAuthUser from "../hooks/useAuthUser";

// import { ReactComponent as Divide } from "../assets/svg/divide.svg";

// export default function GenerateTweet({ onGenerated }) {
//   const authUser = useAuthUser();
//   const accessToken = authUser.twitter.twitterAccess;
//   const profileImageUrl = authUser?.twitter?.profileImageUrl;
//   // console.log(accessToken);

//   const headers = {
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "application/json",
//   };

//   const [generateTweetMutation, generateTweetMutationResult] =
//     TweetApi.useGenerateTweetMutation();

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         number_of_texts: "",
//         keywords: "",
//         sentiment: "",
//       },
//       validationSchema: Yup.object().shape({
//         number_of_texts: Yup.string().required("Tweet is required"),
//         // keywords: Yup.string().required("Keywords is required"),
//         // sentiment: Yup.string().required("Sen is required"),
//       }),
//       onSubmit: async (values) => {
//         try {
//           const generateTweetData = {
//             number_of_texts: values.number_of_texts,
//             keywords: values.keywords,
//             sentiment: values.sentiment,
//           };

//           generateTweetMutationResult.isLoading &&
//             generateTweetMutationResult.isLoading(true);

//           const data = await generateTweetMutation({
//             data: generateTweetData,
//             headers: headers,
//           }).unwrap();

//           generateTweetMutationResult.isLoading &&
//             generateTweetMutationResult.isLoading(false);

//           onGenerated?.(data);
//           // console.log(setGeneratedTweets);

//           console.log(data);
//         } catch (error) {
//           toast.error("Error while processing the request");
//           generateTweetMutationResult.isLoading &&
//             generateTweetMutationResult.isLoading(false);

//           console.log(error);
//         }
//       },
//     });

//   return (
//     <>
//       <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36 mt-4">
//         <form onSubmit={handleSubmit}>
//           <div className="border-[0.5px] z-10 border-[#436C82] rounded-[4px] py-4 px-6 md:mx-20">
//             <div className="w-full rounded-sm relative">
//               <textarea
//                 value={values.keywords}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 name="keywords"
//                 placeholder="Type Something"
//                 className="w-full outline-none text-white text-sm bg-transparent resize-none"
//                 cols="30"
//                 rows="6"
//               ></textarea>
//               {errors.number_of_texts && touched.number_of_texts && (
//                 <div className="pt-1 mb-4 text-[#EB5757] text-[12px] font-Poppins">
//                   {errors.number_of_texts}
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="flex justify-end items-end pb-4 container pt-4 gap-4 px-20">
//             <select
//               value={values.number_of_texts}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="number_of_texts"
//               className="px-3 py-2 border rounded-md shadow-sm focus:outline-none w-40"
//             >
//               <option value="">Number of Texts</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//             <select
//               value={values.sentiment}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="sentiment"
//               className="w-40 px-3 py-2 border rounded-md shadow-sm focus:outline-none"
//             >
//               <option value="">Sentiment</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Positive">Positive</option>
//               <option value="Negative">Negative</option>
//             </select>
//             <div className="">
//               <button
//                 type="submit"
//                 disabled={generateTweetMutationResult.isLoading}
//                 className="bg-[#79C4EC] text-[#15151A] rounded-[9px] py-3 px-6 w-32 font-Poppins text-[14px] font-normal"
//               >
//                 {generateTweetMutationResult.isLoading
//                   ? "Generating..."
//                   : "Generate"}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="flex flex-col justify-center items-center py-10">
//         <Divide />
//       </div>
//     </>
//   );
// }
