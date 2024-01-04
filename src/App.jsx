import AppProtected from "./AppProtected";
import AppPublic from "./AppPublic";

function App() {
  let isLoggedIn = true;

  return isLoggedIn ? <AppProtected /> : <AppPublic />;
}

export default App;
