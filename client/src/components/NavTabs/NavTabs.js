import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css";


function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (

    <Navbar bg="light" variant="light" expand="lg" className="navFont"> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">        
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
          <li className="nav-item"><Link to="/example" className={location.pathname === "/example" ? "nav-link active" : "nav-link"}>Example</Link>
          </li>
        </ul>      
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;