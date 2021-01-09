import React from "react";
import "./Welcome.css";
import { Button } from "react-bootstrap";
import whitelogo from "../../assets/images/whitelogo.png"
import { Link } from "react-router-dom";
import NavTabs from "../../components/NavTabs/NavTabs";

function Welcome() {
    return (
        <div>
            <NavTabs />
            <div className="welcomeBackground">
                <br /><br /><br /><br /><br />

                <div><img src={whitelogo} alt="logo" id="logo" class='center' />
                    <br /><br />

                    <p class="description">Welcome to a community of urban explorers, <br />discovering the rich and historical world around us -  <br />right in our own backyards.</p></div>

                <br /><br /><br />

                <div class="center">
                    <Button variant="light" size="lg" className='welcomeButton'><Link to="./Register">register</Link></Button>{' '}
                    <Button variant="light" size="lg" className='welcomeButton'><Link to="./Login">login</Link></Button>{' '}
                </div>

            </div>
        </div>
    );
}

export default Welcome;