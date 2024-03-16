import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authorizationSlice";
import spaceSlice from "./spaceSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    space: spaceSlice.reducer,
  },
});

export default store;
