import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { TweetApi } from "../config/StoreQueryConfig";
import useAuthUser from "../hooks/useAuthUser";

import { ReactComponent as Stars } from "../assets/svg/startsss.svg";
import { ReactComponent as Divide } from "../assets/svg/divide.svg";

export default function GenerateTweet({ onGenerated }) {
  const authUser = useAuthUser();
  const accessToken = authUser.twitter.twitterAccess;
  // console.log(accessToken);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const [generateTweetMutation, generateTweetMutationResult] =
    TweetApi.useGenerateTweetMutation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        number_of_texts: "",
        keywords: "",
        sentiment: "",
      },
      validationSchema: Yup.object().shape({
        number_of_texts: Yup.string().required("Tweet is required"),
        // keywords: Yup.string().required("Keywords is required"),
        // sentiment: Yup.string().required("Sen is required"),
      }),
      onSubmit: async (values) => {
        try {
          const generateTweetData = {
            number_of_texts: values.number_of_texts,
            keywords: values.keywords,
            sentiment: values.sentiment,
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
          // console.log(setGeneratedTweets);

          console.log(data);
        } catch (error) {
          toast.error("Error while processing the request");
          generateTweetMutationResult.isLoading &&
            generateTweetMutationResult.isLoading(false);

          console.log(error);
        }
      },
    });

  return (
    <>
      <div className="border-[0.5px] border-[#2A3C46] rounded-[4px] md:p-8 lg:mx-36 mt-4">
        <form onSubmit={handleSubmit}>
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
              {errors.number_of_texts && touched.number_of_texts && (
                <div className="pt-1 mb-4 text-[#EB5757] text-[12px] font-Poppins">
                  {errors.number_of_texts}
                </div>
              )}
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
              className="w-40 px-3 py-2 border rounded-md shadow-sm focus:outline-none"
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
                className="bg-[#79C4EC] text-[#15151A] rounded-[9px] py-3 px-6 w-32 font-Poppins text-[14px] font-normal"
              >
                {generateTweetMutationResult.isLoading
                  ? "Generating..."
                  : "Generate"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-col justify-center items-center py-10">
        <Divide />

        <div className="flex justify-center gap-3 mt-4 items-center">
          <Stars />
          <p className="font-Poppins text-[16px] font-normal leading-[15px] bg-gradient-to-b from-[#0C74F1] to-[#28EDDB] bg-clip-text text-transparent">
            1 posts generated, view results below
          </p>
        </div>
      </div>
    </>
  );
}
