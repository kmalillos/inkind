import React, { Component } from "react";
import API from "../utils/API"

class VendorSearch extends Component {
    state = {
        // Vendor
        vendorName: "",
        city: "",
        state: "",
        // Donations
        donationType: ""
    };

    componentDidMount() {
        // this.findOneVendor();
    };

    // findOneVendor = () => {
    //     // CODE HERE
    //     API.findOneVendor()
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err));
    // };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        return (
            <div>
                <h1>Search Vendor</h1>

                <form>
                    <label>Vendor Name</label> <br></br>
                    <input
                        value={this.state.vendorName}
                        onChange={this.handleInputChange}
                        name="vendorName"
                        placeholder="Vendor Name"
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

                    <label>Donation Type</label> <br></br>
                    <input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        name="donationType"
                        placeholder="Donation Type"
                    />

                    <br></br>
                    <br></br>

                    <button
                        // disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Search
                    </button>
                </form>

            </div>
        )
    }
};

export default VendorSearch;