import React from "react";
import "./Explore.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import ButtonGroupPages from "../../components/Buttons/ButtonGroup"

function Explore() {
    return (
        <div>
            <NavTabs />
            <div className="nightBackground">
                <br /><br /> <br />
                <h1>Explore!</h1>
                <br />
                <div className="center">
                    <ButtonGroupPages />
                </div>
            </div>
        </div>
    );
}

export default Explore;