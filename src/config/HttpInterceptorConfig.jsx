import store from "./StoreConfig";
import { logoutAction } from "./StoreActionConfig";
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

{
  /* <div className="flex items-center gap-4 pt-6 md:justify-end justify-center md:mr-20">
<div className="bg-[#EBEDED] bg-opacity-10 md:px-10 p-2 rounded-sm flex items-center gap-4">
  <p className="text-[#E8E8E8] text-xs">Sentiment</p>
  <p className="text-[#E8E8E8] flex items-center gap-1 text-sm rounded-[2px] border px-2 border-[#E2AB8B] bg-[#ECC6B1] bg-opacity-20">
    <img src={pro} alt="" /> Pro
  </p>
</div>
<div>
  <Select
    value={selected}
    onChange={handleSelect}
    options={aiOptions}
  />
</div>
</div> */
}
