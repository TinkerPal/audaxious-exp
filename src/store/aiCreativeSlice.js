import { createSlice } from "@reduxjs/toolkit";

const aiInitialState = {
  openCreatePostModal: false,
};

const aiCreateSlice = createSlice({
  name: "aiSlice",
  initialState: aiInitialState,
  reducers: {
    setCreatePostModal(state, actions) {
      state.openCreatePostModal = actions.payload;
    },
  },
});

export const aiCreatieActions = aiCreateSlice.actions;
export default aiCreateSlice;
