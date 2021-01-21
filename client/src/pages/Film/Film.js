import React from "react";
import "./Film.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import ButtonGroupPages from "../../components/Buttons/ButtonGroup"

function Film() {
    return (
        <div>
            <NavTabs />
            <div className="filmBackground">
                <br /> <br />
                <h1>Film Locations</h1>
                <div className="center">
                    <ButtonGroupPages />
                </div>
            </div>
        </div>
    );
}

export default Film;