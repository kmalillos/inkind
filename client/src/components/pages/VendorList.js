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
        .then(res => console.log(res.data[0].vendorName))
        // .then(res =>
        //     this.setState({
        //         vendorName: res.data,
        //         address: res.data,
        //         city: res.data,
        //         state: res.data,
        //         zip: res.data,
        //         phone: res.data,
        //         email: res.data
        //     })
        // )
        // .catch(err => console.log(err));
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