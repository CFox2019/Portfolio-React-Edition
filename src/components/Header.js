import React from "react";
import "../components/css/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-nav">
      <div className="container-fluid">
        <div className="container-md">
          <button className="navbar-brand-name" href="#">Courtney Fox</button>
            <div className="ml-auto navbar-nav navbar-nav-links">
              <a className="nav-link active" aria-current="page" href="/about">About</a>
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;