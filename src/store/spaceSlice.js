import { createSlice } from "@reduxjs/toolkit";

const spaceInitialState = {
  space: [],
  loading: null,
  spaceCampaigns: [],
};

const spaceSlice = createSlice({
  name: "space",
  initialState: spaceInitialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    replaceSpace(state, actions) {
      state.space = actions.payload;
    },
    replaceSpaceCampaigns(state, actions) {
      state.spaceCampaigns = actions.payload;
    },
  },
});

export const spaceActions = spaceSlice.actions;

export default spaceSlice;
