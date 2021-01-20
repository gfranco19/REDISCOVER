import React from "react";
import "./Misc.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import ButtonGroupPages from "../../components/Buttons/ButtonGroup"

function Misc() {
    return (
        <div>
            <NavTabs />
            <div className="redlandsBackground">
                <br /> <br />
                <h1>More Fun Places</h1>
                <div className="center">
                    <ButtonGroupPages />
                </div>
            </div>
        </div>
    );
}

export default Misc;

