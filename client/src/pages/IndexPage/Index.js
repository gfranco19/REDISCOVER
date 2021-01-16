import React from "react";
import "./Index.css";
import { Button } from "react-bootstrap";
import whitelogo from "../../assets/images/whitelogo.png"
import { Link } from "react-router-dom";

function Index() {
    return (
        <div>
            <div className="welcomeBackground">
                <br /><br /><br /><br /><br />

                <div><img src={whitelogo} alt="logo" id="logo" className='center pulse' />
                    <br /><br />

                        <p class="description">Welcome to a community of urban explorers, <br />discovering the rich and historical world around us -  <br />right in our own backyards.</p></div>

                    <br /><br /><br />

                    <div className="center">
                        <Button variant="light" size="lg" className='welcomeButton'><Link to="./Register">register</Link></Button>{' '}
                        <Button variant="light" size="lg" className='welcomeButton'><Link to="./Login">login</Link></Button>{' '}
                    </div>
                </div>
            </div>
    );
}

export default Index;