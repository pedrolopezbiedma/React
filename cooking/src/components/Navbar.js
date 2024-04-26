// React
import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";

// Hooks
import { useThemeContext } from "../hooks/useThemeContext";

// Components
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { color } = useThemeContext();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Site</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
