import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/haunted"
          className={location.pathname === "/haunted" ? "nav-link active" : "nav-link"}
        >
          Haunted
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/historical"
          className={location.pathname === "/historical" ? "nav-link active" : "nav-link"}
        >
          Historical
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/film"
          className={location.pathname === "/film" ? "nav-link active" : "nav-link"}
        >
          Film/Tv
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
