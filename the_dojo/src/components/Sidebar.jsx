// React
import { NavLink } from "react-router-dom";

// Styles & Icons
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import CreateIcon from "../assets/add_icon.svg";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";

// Components
import Avatar from "./Avatar";

const Sidebar = () => {
  const { user } = useAuthenticationContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar user={user} />
          <p>Hey {user.displayName}!</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="Dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={CreateIcon} alt="Create icon" />
                <span>Create</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
