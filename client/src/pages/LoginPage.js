import React, { Component } from "react";
import API from "../utils/API"

class Login extends Component {

    state = {
        username: "",
        password: "",
        token: ""
    };

    componentDidMount() {
        // CODE HERE
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
                .then(res => {
                    console.log("Logged In: ", res.data);
                    this.setState({ 
                        username: res.data.username,
                        password: res.data.password,
                        token: res.data.token,
                    });
                })
                .catch(err => console.log(err));
        } else {
            alert("Missing input from username or password.")
        }
    };

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