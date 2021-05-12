import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-nav">
      <div className="container-fluid">
        <div className="container-md">
          <button className="navbar-brand-name" href="#">Courtney Fox</button>
            <div className="ml-auto navbar-nav navbar-nav-links">
              <Link className="nav-link active" aria-current="page" to="/">About</Link>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;