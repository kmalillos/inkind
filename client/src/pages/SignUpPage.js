import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import API from "../utils/API";
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        user: [],
        redirect: false
    };

    componentDidMount() {
        // CODE HERE
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.signupUser();
    };

    signupUser = () => {
        if (this.state.username && this.state.password) {
            API.createUser({
                username: this.state.username,
                password: this.state.password,
            })
                .then(res => {
                    console.log("Created User: ", res.data);
                    this.setState({
                        username: res.data.username,
                        password: res.data.password
                    });
                    alert("New user created.")
                    this.setRedirect();
                })
                .catch(err => {
                    console.log(err);
                    alert("Sign Up Failed.")
                });
        } else {
            alert("Missing username or password.")
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
                            <h1 className="text-center">Sign Up</h1>

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
                                    Sign Up
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

export default SignUp;