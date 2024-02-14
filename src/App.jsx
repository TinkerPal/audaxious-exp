import useAuthUser from "./hooks/useAuthUser";

import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";
import Wagmi from "./config/wagmi/Wagmi";
import AppProtectedNew from "./AppProtectedNew";

function App() {
  let authUser = useAuthUser();
  // authUser = false;

  // return <Wagmi>{authUser?.token ? <AppProtected /> : <AppPublic />}</Wagmi>;
  return <AppProtectedNew />;
}

export default App;
