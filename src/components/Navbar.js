import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-home">Search</Link>
      <ul className="navbar-ul">
        <li><Link to="/Documentation">Documentation</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;