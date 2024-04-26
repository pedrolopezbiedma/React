// React
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Hooks
import { useThemeContext } from "./hooks/useThemeContext";

// Components
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";

// Styles
import "./App.css";

function App() {
  const { mode } = useThemeContext();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
