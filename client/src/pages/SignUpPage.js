import React, { Component } from "react";

class SignUp extends Component {

    state = {
        username: "",
        password: ""
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
        this.createVendor();
    };

    render() {
        return (
            <div>
                <h1>SignUp</h1>

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