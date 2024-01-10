import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";
<<<<<<< HEAD
import Wagmi from "./config/wagmi/Wagmi";
=======
>>>>>>> cb9ec42ba0f37353a630764e9f68ced04160ce41

function App() {
  let isLoggedIn = false;

<<<<<<< HEAD
  return <Wagmi>{isLoggedIn ? <AppProtected /> : <AppPublic />}</Wagmi>;
=======
  return isLoggedIn ? <AppProtected /> : <AppPublic />;
>>>>>>> cb9ec42ba0f37353a630764e9f68ced04160ce41
}

export default App;
