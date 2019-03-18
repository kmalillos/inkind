import React, { Component } from "react";
import API from "../utils/API"

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        user: []
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
                })
                .catch(err => console.log(err));
        } else {
            alert("Missing username or password.")
        }
    };

    render() {
        return (
            <div>
                <h1>Sign Up</h1>

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
                        Sign Up
                    </button>

                </form>
            </div>
        )
    }

};

export default SignUp;