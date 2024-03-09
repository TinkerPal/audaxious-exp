import useAuthUser from "./hooks/useAuthUser";

import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";
import Wagmi from "./config/wagmi/Wagmi";
import AppProtectedNew from "./AppProtectedNew";
import { useEffect } from "react";
import { getToken } from "./utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/store";

function App() {
  // let authUser = useAuthUser();
  // authUser = false;
  const token = getToken();
  // const isAuthenticated = useSelector((state) => state.isLogedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(authAction.logout());
    } else {
      dispatch(authAction.loggin());
    }
  }, [token, dispatch]);

  // return <Wagmi>{authUser?.token ? <AppProtected /> : <AppPublic />}</Wagmi>;
  return <AppProtectedNew />;
}

export default App;
