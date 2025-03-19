import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import hamburger icon
import "./Header.css"; // Make sure this is correctly imported

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getHeaderClass = () => {
    switch (location.pathname) {
      case "/register":
        return "header register-header";
      case "/home":
        return "header home-header";
      case "/question1":
        return "header question1-header";
      case "/question2":
      case "/question3":
      case "/question5":
        return "header explore-header";
      case "/question4":
        return "header question1-header";
      case "/recipes":
        return "header recipes-header";
      case "/login":
        return "header login-header";
      case "/recipe/0":
      case "/recipe/1":
      case "/recipe/2":
        return "header recipe-header";
      case "/explore":
        return "header exp-header";
      default:
        return "header";
    }
  };

  const getNavClass = () => {
    switch (location.pathname) {
      case "/question1":
        return "navi question1-nav";
      case "/question2":
      case "/question3":
      case "/question5":
        return "navi explore-nav";
      case "/recipes":
        return "navi recipes-nav";
      case "/login":
        return "navi login-nav";
      case "/register":
        return "navi register-nav";
      case "/home":
        return "navi home-nav";
      case "/recipe/0":
      case "/recipe/1":
      case "/recipe/2":
        return "navi recipe-nav";
      case "/explore":
        return "navi exp-nav";
      default:
        return "navi";
    }
  };

  return (
    <header className={getHeaderClass()}>
      <div className="logo">
        <img src="logo.png" alt="MoodChef Logo" />
        <h3>MOODCHEF</h3>
      </div>
      <nav className={getNavClass()}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/explore")}>Explore</button>
        <button onClick={() => navigate("/recipes")}>Recipes</button>
        <button onClick={() => navigate("/login")}>Login/Register</button>

        {/* Dropdown Menu Trigger */}
        <div className="dropdown">
          <FaBars className="hamburger-icon" onClick={() => setDropdownOpen(!dropdownOpen)} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p onClick={() => navigate("/profile")}>Profile</p>
              <p onClick={() => navigate("/")}>Logout</p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
