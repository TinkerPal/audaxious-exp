import { createSlice } from "@reduxjs/toolkit";

const initialErrorState = {
  error: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    setError(state, actions) {
      state.error = actions.payload;
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice;
