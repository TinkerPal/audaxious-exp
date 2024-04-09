import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authorizationSlice";
import spaceSlice from "./spaceSlice";
import campaignSlice from "./campaignSlice";
import errorSlice from "./errorSlice";
import aiCreateSlice from "./aiCreativeSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    space: spaceSlice.reducer,
    campaign: campaignSlice.reducer,
    errors: errorSlice.reducer,
    aiCreative: aiCreateSlice.reducer,
  },
});

export default store;
