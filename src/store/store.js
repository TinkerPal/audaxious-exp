import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authorizationSlice";
import spaceSlice from "./spaceSlice";
import campaignSlice from "./campaignSlice";
import errorSlice from "./errorSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    space: spaceSlice.reducer,
    campaign: campaignSlice.reducer,
    errors: errorSlice.reducer,
  },
});

export default store;
