// React
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Styles
import "./App.css";

// Context
import { useAuthenticationContext } from "./hooks/useAuthenticationContext";

// Components
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import CreateProject from "./pages/CreateProject/CreateProject";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  const { user } = useAuthenticationContext();

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Sidebar />}
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user && <Dashboard />}
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/create">
              {user && <CreateProject />}
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/project/:id">
              {user && <ProjectDetails />}
              {!user && <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
        {user && <OnlineUsers />}
      </BrowserRouter>
    </div>
  );
}

export default App;
