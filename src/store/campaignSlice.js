import { createSlice } from "@reduxjs/toolkit";

const initialCampaignState = {
  campaign: [],
  loading: null,
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState: initialCampaignState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    replaceCampaign(state, actions) {
      state.campaign = actions.payload;
    },
  },
});

export const campaignActions = campaignSlice.actions;

export default campaignSlice;
