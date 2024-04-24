// import useAuthUser from "./hooks/useAuthUser";

// import AppProtected from "./AppProtected";
// import AppPublic from "./AppPublic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi/Wagmi";
import AppProtectedNew from "./AppProtectedNew";
import { useEffect } from "react";
import { getToken } from "./utils/accesstoken";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/authorizationSlice";
import { getTwitterUserName } from "./store/authActions";
import { getAllSpaces } from "./store/spaceActions";
import { spaceActions } from "./store/spaceSlice";
import { getAllCampaigns } from "./store/campaignActions";
import { campaignActions } from "./store/campaignSlice";
import BuyCard from "./pages/Buy/BuyCard";

const queryClient = new QueryClient();

function App() {
  // let authUser = useAuthUser();
  // authUser = false;
  const token = getToken();
  // const isAuthenticated = useSelector((state) => state.isLogedIn);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLogedIn
  );
  const spaceCreated = useSelector((state) => state.space.spaceCreated);

  // console.log("Capaings ", campaigns);
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
      // console.log(result);

      dispatch(authAction.setUserId(result.data.uuid));
      dispatch(authAction.setPoints(result.data.points));
      dispatch(authAction.setWalletId(result.data.walletId));
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

  useEffect(() => {
    const getSpaces = async () => {
      try {
        const result = await dispatch(getAllSpaces());
        // console.log(result);
        dispatch(spaceActions.replaceSpace(result.data));
        // console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    // if(spaceCreated) {
    //   getSpaces();
    // }
    getSpaces();
  }, [dispatch, spaceCreated]);
  useEffect(() => {
    const getCampaigns = async () => {
      try {
        const result = await dispatch(getAllCampaigns());
        // console.log("CAPAIGNS", result);
        dispatch(campaignActions.replaceCampaign(result.data));
        // console.log("FIRST LEVEL CAMPAIGNS", result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampaigns();
  }, [dispatch]);

  // return <Wagmi>{authUser?.token ? <AppProtected /> : <AppPublic />}</Wagmi>;
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <AppProtectedNew /> */}
        <BuyCard />
      </QueryClientProvider>
    </WagmiProvider>
  );
  // return <AppProtectedNew />;
}

export default App;
