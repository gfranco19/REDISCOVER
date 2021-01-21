import React from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { DropdownButton, Dropdown } from "react-bootstrap";

function ButtonGroupPages() {
    return (
        <div>
                <div className="center">
                    <ButtonGroup variant="secondary" vertical>
                        <DropdownButton as={ButtonGroup} title="Choose a category " id="bg-vertical-dropdown-3">
                            <Dropdown.Item eventKey="1" href="./haunted">Haunted Places</Dropdown.Item>
                            <Dropdown.Item eventKey="2" href="./historical">Historical Sites</Dropdown.Item>
                            <Dropdown.Item eventKey="3" href="./film">Film Locations</Dropdown.Item>
                            <Dropdown.Item eventKey="4" href="./nature">Out in Nature</Dropdown.Item>
                            <Dropdown.Item eventKey="5"  href="./misc">Other Fun Places</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
            </div>
    );
}

export default ButtonGroupPages;