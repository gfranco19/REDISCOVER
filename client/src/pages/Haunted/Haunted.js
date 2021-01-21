import React from "react";
import "./Haunted.css";
import NavTabs from "../../components/NavTabs/NavTabs";
import ButtonGroupPages from "../../components/Buttons/ButtonGroup"

function Haunted() {
    return (
        <div>
            <NavTabs />
            <div className="hauntedBackground">
                <br /> <br />
                <h1>Haunted Places</h1>
                <div className="center">
                    <ButtonGroupPages />
                </div>
            </div>
        </div>
    );
}

export default Haunted;

