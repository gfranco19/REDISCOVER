import React from "react";
import "./Haunted.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs2 from "../../components/NavTabs2/NavTabs2";

function Haunted() {
    return (
        <div>
            <NavTabs2 />
            <div className="hauntedBackground">
                <br /> <br />
                <h1>Haunted Places</h1>
            </div>
        </div>
    );
}

export default Haunted;

