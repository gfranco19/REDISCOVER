import React from "react";
import "./Haunted.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "../../components/NavTabs/NavTabs";

function Haunted() {
    return (
        <div>
            <NavTabs />
            <div className="hauntedBackground">
                <br /> <br />
                <h1>Haunted Locations</h1>
            </div>
        </div>
    );
}

export default Haunted;

