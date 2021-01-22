import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from "react-bootstrap";
import './Register.css'
import Binoculars from '../../assets/images/binocularsblack copy.png'
import { Link } from "react-router-dom";



function Register() {



    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
            <Card className="registerCard" style={{ width: '28rem' }}>

                <Card.Body className="registerFlex">

                    <Form>
                        <Card.Img variant="top" src={Binoculars} className="binoculars" alt="binoculars" />
                        <br />

                        <p className="signin">Create your account</p>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label name="email" variant="outlined" className="insideText" label="Email" >Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label name="password" className="insideText" variant="outlined" label="Password">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button variant="secondary" type="submit" id='loginButton'>
                            Create account
                        </Button>
                        <p className="redirectRegister"><Link to="./Login">Already a member? Login here.</Link></p>
                        <p className="redirectRegister"><Link to="./">(or, go back)</Link></p>
                        </Form>
                </Card.Body>
            </Card>
        </div>
        
    );
}

export default Register;