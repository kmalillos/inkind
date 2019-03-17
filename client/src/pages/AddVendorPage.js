import React, { Component } from "react";
import API from "../utils/API"
import { Redirect } from 'react-router-dom'

class AddVendor extends Component {
    state = {
        vendorID: "",
        vendorName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        redirect: false
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

    createVendor = () => {
        if (this.state.vendorName) {
            API.createVendor({
                vendorName: this.state.vendorName,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                phone: this.state.phone,
                email: this.state.email
            })
                .then(res => {
                    console.log("Created Vendor: ", res.data);
                    this.setState( { vendorID: res.data.id});
                    // this.goToVendorDetail();
                    this.setRedirect();
                    })
                .catch(err => console.log(err));
        }
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    goToVendorDetail = () => {
        if (this.state.redirect) {
            console.log("Go to new page");
            return <Redirect to={`/vendor/${this.state.vendorID}`} />
        }
    }

    render() {

        return (
            <div>
                <h1>Add Vendor</h1>

                <form>
                    <label>Vendor Name</label> <br></br>
                    <input
                        value={this.state.vendorName}
                        onChange={this.handleInputChange}
                        name="vendorName"
                        placeholder="Vendor Name"
                    />

                    <br></br>

                    <label>Address</label> <br></br>
                    <input
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        name="address"
                        placeholder="Address"
                    />

                    <br></br>

                    <label>City</label> <br></br>
                    <input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City"
                    />

                    <br></br>

                    <label>State</label> <br></br>
                    <input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        name="state"
                        placeholder="State"
                    />

                    <br></br>

                    <label>Zip Code</label> <br></br>
                    <input
                        value={this.state.zip}
                        onChange={this.handleInputChange}
                        name="zip"
                        placeholder="Zip Code"
                    />

                    <br></br>

                    <label>Phone Number</label> <br></br>
                    <input
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="Phone Number"
                    />

                    <br></br>
                    <br></br>

                    {this.goToVendorDetail()}
                    <button
                        onClick={this.handleFormSubmit}
                    >
                        Add Vendor
                    </button>
                </form>

            </div>
        )
    };
};

export default AddVendor;