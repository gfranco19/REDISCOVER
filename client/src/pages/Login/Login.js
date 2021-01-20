import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import "../Register/Register.css";
import Binoculars from "../../assets/images/binocularsblack copy.png";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    // login here
    axios.post("/api/login", this.state).then(res=> console.log(res))
  };

  render() {
    return (
      <div         style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       }}>
 
      <div/>
        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <Form>
              <Card.Img
                variant="top"
                src={Binoculars}
                className="binoculars"
                alt="binoculars"
              />
              <br />

              <p className="signin">Login to Rediscover</p>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Button
                variant="secondary"
                type="submit"
                id="loginButton"
                onClick={this.handleFormSubmit}
              >
                Login
              </Button>
              <p className="redirectRegister">
                <Link to="./Register" id="a.register">
                  New here? Create an account.
                </Link>
              </p>
              <p className="redirectRegister">
                <Link to="./">Or go back.</Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
