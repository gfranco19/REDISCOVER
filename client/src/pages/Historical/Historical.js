import React from "react";
import "./Historical.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderHistorical from "./RenderHistorical";
function Historical(props) {
 
    return (
        <div>
            <NavTabs />
            <div className="historyBackground">
                <br /> <br /><br />
                <h1>Historical Sites</h1>
                <div className="center">
                </div>
                <RenderHistorical />
            </div>
 
        </div>
    );
}

export default Historical;