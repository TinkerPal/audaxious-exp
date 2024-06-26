import { createSlice } from "@reduxjs/toolkit";
const authenticationInitialState = {
  isLogedIn: false,
  isOpen: false,
  logoutModal: false,
  email: "",
  verifyTweet: null,
  loading: null,
  userName: "",
  tweeterModal: false,
  userId: "",
  walletId: "",
  points: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: authenticationInitialState,
  reducers: {
    setPoints(state, actions) {
      state.points = actions.payload;
    },
    setWalletId(state, actions) {
      state.walletId = actions.payload;
    },
    setUserId(state, actions) {
      state.userId = actions.payload;
    },
    onOpenTweeterModal(state, actions) {
      state.tweeterModal = actions.payload;
    },
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
