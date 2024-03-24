import { createSlice } from "@reduxjs/toolkit";

const spaceInitialState = {
  space: [],
  loading: null,
  spaceCampaigns: [],
  joinedSpace: [],
  isMember: false,
};

const spaceSlice = createSlice({
  name: "space",
  initialState: spaceInitialState,
  reducers: {
    setIsMember(state, actions) {
      state.isMember = actions.payload;
    },
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    replaceSpace(state, actions) {
      state.space = actions.payload;
    },
    replaceSpaceCampaigns(state, actions) {
      state.spaceCampaigns = actions.payload;
    },
    replaceJoinSpace(state, actions) {
      state.joinedSpace = actions.payload;
    },
  },
});

export const spaceActions = spaceSlice.actions;

export default spaceSlice;
