import React from "react";

function Header() {
  return (
    <div className="container-fluid">
      <div className="nav nav-expand-lg nav-light bg-light">
        <div className="container-md">
          <a className="nav-brand" href="/About">Courtney Fox</a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Portfolio">Portfolio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Additional Links
              </a>
              <ul className="dropdown-menu" aria-labelledby="navDropdown">
                <li><a className="dropdown-item" href="https://github.com/CFox2019">GitHub</a></li>
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/cdfox/">LinkedIn</a></li>
                <li><a className="dropdown-item" href="">Resume</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;