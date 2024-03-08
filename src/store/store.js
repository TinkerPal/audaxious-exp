import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getToken } from "../utils/accesstoken";

const initialState = {
  isLogedIn: getToken(),
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: authenticationSlice.reducer,
});

export default store;
