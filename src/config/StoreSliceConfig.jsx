import { createSlice } from "@reduxjs/toolkit";
import { logoutAction } from "./StoreActionConfig";
import { AppApi } from "./StoreQueryConfig";

export const globalInitialState = {
  authUser: null,
};

const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    toggleLoadingModalAction: (state, { payload }) => {
      state.isLoadingModal =
        payload !== undefined ? !!payload : !state.isLoadingModal;
    },
    // setAuthUserAction: (state, { payload }) => {
    //   state.authUser = payload;
    // },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logoutAction, () => ({ ...globalInitialState }))
      .addMatcher(
        AppApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...state.authUser,
            token: payload?.token,
            email: payload?.findUser?.email,
            password: payload?.findUser?.password,
            ...payload?.data,
          };
        }
      ),
});

export const { toggleLoadingModalAction, toggleSideMenuAction } = slice.actions;

export default slice;

export function getGlobalSliceStorageState({ authUser }) {
  return { authUser };
}
