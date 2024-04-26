// React
import { Link } from "react-router-dom";

// Styles & Icons
import "./Navbar.css";
import Logo from "../assets/temple.svg";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthenticationContext();
  const { logoutUser } = useLogout();

  const handleClick = () => {
    logoutUser();
  };

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Logo} alt="app logo" />
          <span>Xnail Dojo</span>
        </li>

        <li>{!user && <Link to="/login">Login</Link>}</li>
        <li>{!user && <Link to="/signup">Signup</Link>}</li>

        {user && (
          <li>
            <button className="btn" onClick={handleClick}>
              Log out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
