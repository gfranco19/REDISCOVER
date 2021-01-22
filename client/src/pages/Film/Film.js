import React from "react";
import "./Film.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import RenderFilm from "./RenderFilm";
function Film() {
    return (
        <div>
            <NavTabs />
            <div className="filmBackground">
                <br /> <br /><br />
                <h1>Film Locations</h1>
                <div className="center">
                </div>
                <RenderFilm />

            </div>
        </div>
    );
}

export default Film;