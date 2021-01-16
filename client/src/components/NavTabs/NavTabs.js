// import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css";
import { Navbar } from "react-bootstrap";

function NavTabs() {
  const location = useLocation();

  return (

    <Navbar bg="light" variant="light" expand="lg" className="navFont"> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          </li>
          <li className="nav-item"><Link to="/account" className={location.pathname === "/account" ? "nav-link active" : "nav-link"}>My Account</Link>
          </li>
          <li className="nav-item"><Link to="/explorer" className={location.pathname === "/explorer" ? "nav-link active" : "nav-link"}>Explore</Link>
          </li>
          <li className="nav-item"><Link to="/haunted" className={location.pathname === "/haunted" ? "nav-link active" : "nav-link"}>Haunted Places</Link>
          </li>
          <li className="nav-item"><Link to="/historical" className={location.pathname === "/historical" ? "nav-link active" : "nav-link"}>Historical Sites</Link>
          </li>
          <li className="nav-item"><Link to="/film" className={location.pathname === "/film" ? "nav-link active" : "nav-link"}>Film Locations</Link>
          </li>
          <li className="nav-item"><Link to="/example" className={location.pathname === "/example" ? "nav-link active" : "nav-link"}>Example</Link>
          </li>
        </ul>      
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;