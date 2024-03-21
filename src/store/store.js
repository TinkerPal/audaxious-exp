import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authorizationSlice";
import spaceSlice from "./spaceSlice";
import campaignSlice from "./campaignSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    space: spaceSlice.reducer,
    campaign: campaignSlice.reducer,
  },
});

export default store;
