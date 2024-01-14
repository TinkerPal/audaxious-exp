import store from "./StoreConfig";
import { logoutAction } from "./storeActionConfig";
import { AppHttp } from "./HttpConfig";

AppHttp.interceptors.request.use((config) => {
  const { token } = store.getState().global.authUser || {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

AppHttp.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status === 401) {
    store.dispatch(logoutAction());
  }
  return Promise.reject(error);
});
