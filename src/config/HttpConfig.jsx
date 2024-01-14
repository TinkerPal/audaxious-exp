import axios from "axios";

export const AppHttp = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export default AppHttp;
