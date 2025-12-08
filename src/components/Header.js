import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => setShowLogin(!showLogin)} className="login-button">{showLogin ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;