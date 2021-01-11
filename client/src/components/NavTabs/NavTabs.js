// import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">

        <li className="nav-item active">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
        </li>

        <li className="nav-item"><Link to="/account" className={location.pathname === "/account" ? "nav-link active" : "nav-link"}>Account</Link>
        </li>

        <li className="nav-item"><Link to="/haunted" className={location.pathname === "/explorer" ? "nav-link active" : "nav-link"}>Explorer</Link>
        </li>

        <li className="nav-item"><Link to="/haunted" className={location.pathname === "/haunted" ? "nav-link active" : "nav-link"}>Haunted</Link>
        </li>

        <li className="nav-item"><Link to="/historical" className={location.pathname === "/historical" ? "nav-link active" : "nav-link"}>Historical</Link>
        </li>

        <li className="nav-item"><Link to="/film" className={location.pathname === "/film" ? "nav-link active" : "nav-link"}>Film/TV</Link>
        </li>

        <li className="nav-item">
          <Link to="/example" className={location.pathname === "/example" ? "nav-link active" : "nav-link"}>Example</Link>

        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;