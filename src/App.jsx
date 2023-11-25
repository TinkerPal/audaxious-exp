import AppProtected from './AppProtected';
import AppPublic from './AppPublic';

function App() {
  let isLoggedIn = false;

  return isLoggedIn ? <AppProtected /> : <AppPublic />;
}

export default App;
