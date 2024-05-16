import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [active, setActive] = useState("active");

  return (
    <nav className="navbar">
      <Link to="/" className="site-home" onClick={() => setActive("Search")}>Search</Link>
      <ul className="navbar-ul">
        <li className={active === "Documentation" ? "active" : ""} onClick={() => setActive("Documentation")}>
          <Link to="/Documentation">Documentation</Link>
        </li>
        <li className={active === "About" ? "active" : ""} onClick={() => setActive("About")}>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;