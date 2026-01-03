import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [showLogin, setShowLogin] = useState(true);
  const isOnline = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{isOnline ? "✅Online" : "🔴Offline"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>{" "}
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="login-button"
          >
            {showLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
