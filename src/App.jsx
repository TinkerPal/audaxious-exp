import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";
import Wagmi from "./config/wagmi/Wagmi";

function App() {
  let isLoggedIn = false;

  return <Wagmi>{isLoggedIn ? <AppProtected /> : <AppPublic />}</Wagmi>;
}

export default App;
