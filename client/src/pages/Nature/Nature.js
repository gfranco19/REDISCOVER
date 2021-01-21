import React from "react";
import "./Nature.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderNature from "./RenderNature";
function Nature() {
    return (
        <div>
            <NavTabs />
            <div className="natureBackground">
                <br /> <br />
                <h1>Out in Nature</h1>
                <div className="center">
                </div>
                <RenderNature />
            </div>
        </div>
    );
}

export default Nature;