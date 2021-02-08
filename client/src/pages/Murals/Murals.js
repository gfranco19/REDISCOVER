import React from "react";
import "./Murals.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderMurals from "./RenderMurals";
function Murals(props) {
    return (
        <div>
            <NavTabs />
            <div className="muralsBackground">
                <br /> <br /><br />
                <h1>Murals</h1>
                <div className="center">
                </div>
                <RenderMurals />
            </div>
 
        </div>
    );
}

export default Murals;