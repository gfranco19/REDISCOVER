import React from "react";
import "./Historical.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderHistorical from "./RenderHistorical";
function Historical() {
    return (
        <div>
            <NavTabs />
            <div className="historyBackground">
                <br /> <br />
                <h1>Historical Sites</h1>
                <div className="center">
                </div>
                <RenderHistorical />
            </div>
 
        </div>
    );
}

export default Historical;