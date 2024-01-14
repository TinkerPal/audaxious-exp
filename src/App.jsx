import useAuthUser from "./hooks/useAuthUser";

import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";

function App() {
  let authUser = useAuthUser();
  authUser = false;

  return authUser ? <AppProtected /> : <AppPublic />;
}

export default App;
