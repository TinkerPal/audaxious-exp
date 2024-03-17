import { createSlice } from "@reduxjs/toolkit";
const authenticationInitialState = {
  isLogedIn: false,
  isOpen: false,
  logoutModal: false,
  email: "",
  verifyTweet: false,
  loading: null,
  userName: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    setUserName(state, actions) {
      state.userName = actions.payload;
    },
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    verifyTweeterAccount(state, actions) {
      state.verifyTweet = actions.payload;
    },
    setEmail(state, actions) {
      state.email = actions.payload;
    },
    loggin(state) {
      state.isLogedIn = true;
    },
    logoutModalMethod(state, actions) {
      state.logoutModal = actions.payload;
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

export default authenticationSlice;
