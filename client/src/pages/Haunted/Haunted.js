import React from "react";
import "./Haunted.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderHaunted from "./RenderHaunted";

function Haunted(props) {

    return (
        <div>
            <NavTabs />
            <div className="hauntedBackground">
                <br /> <br /><br />
                <h1>Haunted Places</h1>
                <div className="center">
                </div>
                <RenderHaunted />
                
            </div>
        </div>
    );
}

export default Haunted;

