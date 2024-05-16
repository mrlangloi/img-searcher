import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {

  const [style, setStyle] = useState("navbar-ul")
  const [active, setActive] = useState("");

  function navbarToggle() {
    style === "navbar-ul" ? setStyle("navbar-ul responsive") : setStyle("navbar-ul");
  }

  function handleClick(link) {
    setActive(link);
    if (style === "navbar-ul responsive") {
      setStyle("navbar-ul");
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="site-home" onClick={() => handleClick("")}>Search</Link>
      <ul className={style}>
        <li className={active === "Documentation" ? "active" : ""} onClick={() => handleClick("Documentation")}>
          <Link to="/Documentation">Documentation</Link>
        </li>
        <li className={active === "About" ? "active" : ""} onClick={() => handleClick("About")}>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <div className="navbar-toggler" onClick={() => navbarToggle()}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;