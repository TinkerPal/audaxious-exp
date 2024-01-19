import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AppHttp } from "./HttpConfig";
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
  }),
});

[AppApi].forEach((api) => {
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
