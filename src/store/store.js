import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogedIn: false,
  isOpen: false,
  email: "",
  verifyTweet: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    verifyTweeterAccount(state, actions) {
      state.verifyTweet = true;
    },
    setEmail(state, actions) {
      state.email = actions.payload;
    },
    loggin(state) {
      state.isLogedIn = true;
    },
    logout(state) {
      state.isLogedIn = false;
    },
    onOpen(state) {
      state.isOpen = true;
    },
    onclose(state) {
      state.isOpen = false;
    },
  },
});

export const authAction = authenticationSlice.actions;

const store = configureStore({
  reducer: authenticationSlice.reducer,
});

export default store;
