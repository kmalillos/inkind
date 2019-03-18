import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../utils/API"

class Login extends Component {

    state = {
        username: "",
        password: "",
        redirect: false
    };

    handleInputChange = (event) => {
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
                .then( res => {
                    // console.log("Logged In! ", res.data);
                    localStorage.setItem('jwt-auth', res.data.token);
                    this.setRedirect();
                })
                .catch(err => {
                    console.log(err);
                    alert("Login Failed.")
                });
        } else {
            alert("Missing input from username or password.")
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
                <h1>Login</h1>

                <form>
                    <label>Username</label> <br></br>
                    <input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username"
                    />

                    <br></br>

                    <label>Password</label> <br></br>
                    <input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />

                    <p>
                        <br></br>
                    </p>

                    {this.redirectPage()}
                    <button
                        onClick={this.handleFormSubmit}
                    >
                        Login
                    </button>

                </form>
            </div>
        )
    }

};

export default Login;