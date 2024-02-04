import axios from "axios";

export const AppHttp = axios.create({
  baseURL: "https://api.audaxious.com/api/v1",
});

export const TweetHttp = axios.create({
  baseURL: "https://audaxious-130e2398fbd3.herokuapp.com",
});

// export default AppHttp;
