import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { throttle } from "../utils/FunctionUtils";
import { isObjectEmpty, deepMerge } from "../utils/ObjectUtils";
import { logoutAction } from "./StoreActionConfig";
import { AppApi } from "./StoreQueryConfig";
import globalSlice, {
  getGlobalSliceStorageState,
  globalInitialState,
} from "./StoreSliceConfig";

const store = configureStore({
  reducer: {
    [AppApi.reducerPath]: AppApi.reducer,
    [globalSlice.name]: globalSlice.reducer,
  },
  preloadedState: loadState({
    [globalSlice.name]: globalInitialState,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AppApi.middleware,
      rtkqOnResetMiddleware(AppApi)
    ),
});

setupListeners(store.dispatch);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState({
      [globalSlice.name]: getGlobalSliceStorageState(state[globalSlice.name]),
    });
  }, 1000)
);

export default store;

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("@state", serializedState);
  } catch (error) {}
}

function loadState(initialState = {}) {
  try {
    const newState = Object.assign({}, initialState);
    const storageState = getLocalStorageState();
    if (storageState && !isObjectEmpty(storageState)) {
      Object.assign(newState, deepMerge(newState, storageState));
    }

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      newState[globalSlice.name].authUser = { token };
    }
    return newState;
  } catch (error) {}
  return undefined;
}

function getLocalStorageState() {
  const serializedState = localStorage.getItem("@state");
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return null;
}

export function rtkqOnResetMiddleware(...apis) {
  return (store) => (next) => (action) => {
    const result = next(action);
    if (logoutAction.match(action)) {
      for (const api of apis) {
        store.dispatch(api.util.resetApiState());
      }
    }
    return result;
  };
}
