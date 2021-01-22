import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from "react-bootstrap";
import '../Register/Register.css'
import Binoculars from '../../assets/images/binocularsblack copy.png'
import { Link } from "react-router-dom";

function Login() {

    return (

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Card className="registerCard" style={{ width: '28rem' }} >
                   
                    <Card.Body>
                        <Form>
                            <Card.Img variant="top" src={Binoculars} className="binoculars" alt="binoculars" />
                            <br />

                            <p className="signin">Login to Rediscover</p>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="insideText">Email address</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="insideText">Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Button variant="secondary" type="submit" id='loginButton'>
                                Login
                        </Button>
                            <p className="redirectRegister"><Link to="./Register" id="a.register">New here? Create an account.</Link></p>
                            <p className="redirectRegister"><Link to="./">(or, go back)</Link></p>

                        </Form>
                    </Card.Body>

                </Card>
            </div>
    );
}
export default Login;