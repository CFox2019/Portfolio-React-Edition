import React from "react";
// import "../components/css/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="container-md">
          <a className="navbar-brand" href="#">Courtney Fox</a>
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