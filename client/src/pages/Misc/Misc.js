import React from "react";
import "./Misc.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderMisc from "./RenderMisc";
function Misc() {
    return (
        <div>
            <NavTabs />
            <div className="redlandsBackground">
                <br /> <br /><br />
                <h1>More Fun Places</h1>
                <div className="center">
                </div>
                <RenderMisc />
            </div>
        </div>
    );
}

export default Misc;

