import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <ul className="ul-header">
        <li className="li-header">
          <Link to="/projects">Projects</Link>
        </li>

        <li className="li-header">
          <Link to="/about">About</Link>
        </li>
        <li className="li-header">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="li-header">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
