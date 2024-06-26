import axios from "axios";

// export const createAxiosInstance = () => {
//     const axiosInstance = axios.create({
//             baseURL: url,
//             headers: {
//                 "Accept": "application/json"
//             }
//         })
//         return axiosInstance
// }
const baseUrl = "https://api.audaxious.com/api/v1/";

export const authInstance = () => {
  const auth = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return auth;
};
export const createAxiousInstance = (token) => {
  const auth = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });
  return auth;
};
export const createSpaceInstance = (token) => {
  const auth = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
      // "Access-Control-Allow-Credentials": true,
      "Content-Type": "multipart/form-data",
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  });
  return auth;
};
export const createAxiosPublicInstance = () => {
  const auth = axios.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // Authorization: `Bearer ${token}`,
    },
  });
  return auth;
};
