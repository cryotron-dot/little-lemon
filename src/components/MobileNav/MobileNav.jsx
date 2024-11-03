import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = ({ isVisible, showLogin }) => {
  return (
    <nav
      className={
        isVisible
          ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-500 bg-[#495357] ease-in-out duration-300"
          : "fixed left-[-100%]"
      }
    >
      <ul className="mobile-navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>Order Online</li>
        <li onClick={showLogin}>Login</li>
      </ul>
    </nav>
  );
};

export default MobileNav;
