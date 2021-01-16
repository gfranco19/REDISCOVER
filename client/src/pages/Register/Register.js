import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from "react-bootstrap";
import './Register.css'
import Binoculars from '../../assets/images/binocularsblack copy.png'
import { Link } from "react-router-dom";
import { createUser } from '../../actions/posts';
import { useDispatch } from 'react-redux';


function Register() {
    const [postData, setPostData] = useState({ userName: '', email: '', password: ''});
    // allows dispatch actions // 
    const dispatch = useDispatch();

    // when user hit submit it will send a post request with the data they added // 
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createUser(postData));
        console.log (postData);

    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
            <Card className="registerCard" style={{ width: '28rem' }}>

                <Card.Body className="registerFlex">

                    <Form>
                        <Card.Img variant="top" src={Binoculars} className="binoculars" alt="binoculars" />
                        <br />

                        <p className="signin">Create your account</p>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label name="password" variant="outlined" label="Password" fullWidth value={postData.password} onChange={(e) => setPostData({ ...postData, password: e.target.value })}>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button variant="secondary" type="submit" id='loginButton' onSubmit={handleSubmit}>
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