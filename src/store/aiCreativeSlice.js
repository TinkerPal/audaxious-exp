import { createSlice } from "@reduxjs/toolkit";

const aiInitialState = {
  openCreatePostModal: false,
  savedPost: [],
};

const aiCreateSlice = createSlice({
  name: "aiSlice",
  initialState: aiInitialState,
  reducers: {
    setCreatePostModal(state, actions) {
      state.openCreatePostModal = actions.payload;
    },
    setSavedPost(state, actions) {
      state.savedPost = [actions.payload, ...state.savedPost];
    },
  },
});

export const aiCreatieActions = aiCreateSlice.actions;
export default aiCreateSlice;
