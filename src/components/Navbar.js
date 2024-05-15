import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        <ul className="navbar-ul">
            <li><Link to="/">Search</Link></li>
            <li><Link to="/Documentation">Documentation</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;