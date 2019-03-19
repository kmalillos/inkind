import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import API from "../utils/API"

class Login extends Component {

    state = {
        username: "",
        password: "",
        redirect: false
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.loginUser();
    };

    loginUser = () => {
        if (this.state.username && this.state.password) {
            API.loginUser({
                username: this.state.username,
                password: this.state.password,
            })
                .then(res => {
                    // console.log("Logged In! ", res.data);
                    localStorage.setItem('jwt-auth', res.data.token);
                    this.setRedirect();
                })
                .catch(err => {
                    console.log(err);
                    alert("Login Failed.")
                });
        } else {
            alert("Missing Form.Control from username or password.")
        }
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })

    }

    redirectPage = () => {
        if (this.state.redirect) {
            return <Redirect to={`/home`} />
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h1 className="text-center">Login</h1>

                            <Form>
                                <Form.Label>Username</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    name="username"
                                    placeholder="Username"
                                />

                                <br></br>

                                <Form.Label>Password</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />

                                <p>
                                    <br></br>
                                </p>

                                {this.redirectPage()}
                                <Button className="btn btn-info"
                                    onClick={this.handleFormSubmit}
                                >
                                    Login
                                 </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }

};

export default Login;