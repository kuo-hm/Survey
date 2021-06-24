import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navMenu">
      <Link to="/">MainPage</Link>
      <Link to="/survey">Survey</Link>
      <Link to="/">Login</Link>
      <Link to="/">Register</Link>
    </nav>
  );
};

export default NavBar;
