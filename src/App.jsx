import useAuthUser from "./hooks/useAuthUser";

import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";
import Wagmi from "./config/wagmi/Wagmi";
import AppProtectedNew from "./AppProtectedNew";
import { useEffect } from "react";
import { getToken } from "./utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/authorizationSlice";
import { getTwitterUserName } from "./store/authActions";

function App() {
  // let authUser = useAuthUser();
  // authUser = false;
  const token = getToken();
  // const isAuthenticated = useSelector((state) => state.isLogedIn);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(authAction.logout());
    } else {
      dispatch(authAction.loggin());
    }
  }, [token, dispatch]);

  const getTwetterVerifiedUserName = async () => {
    try {
      const result = await dispatch(getTwitterUserName());
      dispatch(authAction.setUserName(result.data.username));
      dispatch(authAction.verifyTweeterAccount(result.data.twitterUsername));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getTwetterVerifiedUserName();
    }
  }, [isAuthenticated]);

  // return <Wagmi>{authUser?.token ? <AppProtected /> : <AppPublic />}</Wagmi>;
  return <AppProtectedNew />;
}

export default App;
