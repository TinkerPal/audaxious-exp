import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AppHttp, TweetHttp } from "./HttpConfig";
import { StoreQueryTagEnum } from "../constants/storeConstants";

export const AppApi = createApi({
  reducerPath: "app",
  baseQuery: axiosBaseQuery({}, AppHttp),
  // tagTypes: ["FUNDWALLET"],
  endpoints: (builder) => ({
    verifyNewUserIdentity: builder.mutation({
      query: (config) => ({
        url: "/user/create",
        method: "post",
        ...config,
      }),
    }),
    verifyOneTimePassword: builder.mutation({
      query: (config) => ({
        url: "/user/verify",
        method: "post",
        ...config,
      }),
    }),
    loginUser: builder.mutation({
      query: (config) => ({
        url: "/user/login",
        method: "post",
        ...config,
      }),
    }),
    verifyOldUserIdentity: builder.mutation({
      query: (config) => ({
        url: "/user/forgot-password",
        method: "post",
        ...config,
      }),
    }),
    resetPassword: builder.mutation({
      query: (config) => ({
        url: "/user/change-password",
        method: "patch",
        ...config,
      }),
    }),
    getAllPlansRequest: builder.query({
      query: (config) => ({
        url: "http://localhost:4000/auth/login/success",
        method: "get",
        ...config,
      }),
      // providesTags: ['GETALLPLAN'],
    }),
  }),
});

export const TweetApi = createApi({
  reducerPath: "tweet",
  baseQuery: axiosBaseQuery({}, TweetHttp),
  // tagTypes: ["GENERATETWEET"],
  endpoints: (builder) => ({
    generateTweet: builder.mutation({
      query: (config) => ({
        url: "/generate_tweet/",
        method: "post",
        ...config,
      }),
      // invalidatesTags: ["GENERATETWEET"],
    }),

    scheduleTweet: builder.mutation({
      query: (config) => ({
        url: "/schedule_tweet/",
        method: "post",
        ...config,
      }),
      // providesTags: ["GENERATETWEET"],
    }),
    getTweetRequest: builder.query({
      query: (config) => ({
        url: "/tweets/",
        method: "get",
        ...config,
      }),
      // providesTags: ["GENERATETWEET"],
    }),
    getSingleTweetRequest: builder.query({
      query: ({ id, ...config }) => ({
        url: `/tweets/${id}`,
        method: "get",
        ...config,
      }),
      // providesTags: ["GENERATETWEET"],
    }),
    editTweet: builder.query({
      query: ({ id, ...config }) => ({
        url: `/tweets/${id}/`,
        method: "patch",
        ...config,
      }),
      // providesTags: ["GENERATETWEET"],
    }),
    editTweet: builder.query({
      query: ({ id, ...config }) => ({
        url: `/tweets/${id}/`,
        method: "delete",
        ...config,
      }),
      // providesTags: ["GENERATETWEET"],
    }),
  }),
});

[AppApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(StoreQueryTagEnum) });
});

[TweetApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(StoreQueryTagEnum) });
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} baseConfig
 */
export function axiosBaseQuery(baseConfig = {}, http = axios) {
  return request;

  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   */
  async function request(config = {}) {
    const url = config.url
      ? (baseConfig.url || "") + config.url
      : baseConfig.url;
    try {
      const response = await http.request({
        ...baseConfig,
        ...config,
        url,
      });

      return {
        ...response,
        data: response.data,
        message: response.data?.message || null,
        status: response.status || 200,
        meta: { request: response.request, response },
      };
    } catch (error) {
      // console.log(data);

      console.log(error);
      return {
        error: error.response
          ? {
              message: error.response.data?.error,
              status: error.response.status,
              data: error.response.data,
            }
          : {
              message: "Something went wrong",
              data: { message: "Something went wrong" },
            },
      };
    }
  }
}
