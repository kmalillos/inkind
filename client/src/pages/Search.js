import React, { Component } from "react";
import API from "../utils/API"

class Search extends Component {
    state = {
        // DB.Vendors
        vendorName: "",
        city: "",
        state: "",
        // DB.Donationss
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


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.vendorName, this.state.city, this.state.state, this.state.donationType);
        // console.log(this.state.city);
    };

    render() {

        return (
            <div>
                <h1>Search</h1>

                <form>
                    <label>Search by Vendor Name</label> <br></br>
                    <input
                        value={this.state.vendorName}
                        onChange={this.handleInputChange}
                        name="vendorName"
                        placeholder="Vendor Name"
                    />

                    <br></br>

                    <label>Search by City</label> <br></br>
                    <input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City"
                    />

                    <br></br>

                    <label>Search by State</label> <br></br>
                    <input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        name="state"
                        placeholder="State"
                    />
                    
                    <br></br>

                    <label>Search by Donation Type</label> <br></br>
                    <input
                        value={this.state.donationType}
                        onChange={this.handleInputChange}
                        name="donationType"
                        placeholder="Donation Type"
                    />

                    <br></br>
                    <br></br>

                    <button
                        onClick={this.handleFormSubmit}
                    >
                        Search
                    </button>
                </form>

            </div>
        )
    };
};

export default Search;