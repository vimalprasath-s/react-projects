import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [showLogin, setShowLogin] = useState(true);
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-500 shadow-md px-4">
      <div className="logo-container">
        <img className="w-22" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex m-3 p-3 items-center text-white [&>li]:px-4 text-lg">
          <li>{isOnline ? "✅Online" : "🔴Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>{" "}
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="cursor-pointer bg-amber-500 text-white px-3 py-1 rounded-md"
          >
            {showLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
