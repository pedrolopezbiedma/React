// React
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Context
import { useAuthenticationContext } from "./hooks/useAuthenticationContext";

// Components
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";

function App() {
  const { authenticationReady, user } = useAuthenticationContext();

  return (
    <div className="App">
      {authenticationReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user ? <Redirect to="/login" /> : <Home />}
            </Route>
            <Route path="/signup">
              {user ? <Redirect to="/" /> : <Signup />}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
