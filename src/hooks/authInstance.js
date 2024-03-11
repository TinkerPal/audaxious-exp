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
const baseUrl =
  "https://audaxious-light-api-1a66249f6914.herokuapp.com/api/v1/";

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
