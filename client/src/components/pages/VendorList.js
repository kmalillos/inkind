import React, { Component } from "react";
import API from "../../utils/API"

class VendorList extends Component{
    state = {
        vendorName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: ""
    };

    componentDidMount() {
        this.findAllVendors();
    };

    findAllVendors = () => {
        API.findAllVendors()
        .then
    };

    render() {

        return (
            <div>
                <h1>All Vendors</h1> 
            </div>
        )
    }
};

export default VendorList;