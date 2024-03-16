import { createSlice } from "@reduxjs/toolkit";

const spaceInitialState = {
  space: "",
  loading: null,
};

const spaceSlice = createSlice({
  name: "space",
  initialState: spaceInitialState,
  reducers: {
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
  },
});

export const spaceActions = spaceSlice.actions

export default spaceSlice;
