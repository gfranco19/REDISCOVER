import React from "react";
import "./Film.css";
import NavTabs from "../../components/NavTabs/NavTabs";

function Film() {
    return (
        <div>
            <NavTabs />
            <div className="filmBackground">
                <br /> <br />
                <h1>Film Locations</h1>
            </div>
        </div>
    );
}

export default Film;