import React from "react";
import "./Historical.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import ButtonGroupPages from "../../components/Buttons/ButtonGroup"

function Historical() {
    return (
        <div>
            <NavTabs />
            <div className="historyBackground">
                <br /> <br />
                <h1>Historical Sites</h1>
                <div className="center">
                    <ButtonGroupPages />
                </div>
            </div>
        </div>
    );
}

export default Historical;