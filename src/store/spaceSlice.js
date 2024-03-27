import { createSlice } from "@reduxjs/toolkit";

const spaceInitialState = {
  space: [],
  loading: null,
  spaceCampaigns: [],
  joinedSpace: [],
  isMember: false,
  openCampaignModal: false,
  campaignId: "",
};

const spaceSlice = createSlice({
  name: "space",
  initialState: spaceInitialState,
  reducers: {
    setCampaignId(state, actions) {
      state.campaignId = actions.payload;
    },
    setOpenCampaignModal(state, actions) {
      state.openCampaignModal = actions.payload;
    },
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
