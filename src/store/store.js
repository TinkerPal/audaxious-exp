import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getToken } from "../utils/accesstoken";

const initialState = {
  isLogedIn: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loggin(state, payload) {
      state.isLogedIn = true;
    },
    logout(state, payload) {
      state.isLogedIn = false;
    },
  },
});

export const authAction = authenticationSlice.actions;

const store = configureStore({
  reducer: authenticationSlice.reducer,
});

export default store;
