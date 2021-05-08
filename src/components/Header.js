import React from "react";
import "../components/css/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-nav">
      <div className="container-fluid">
        <div className="container-md">
          <button className="navbar-brand-name" href="#">Courtney Fox</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;