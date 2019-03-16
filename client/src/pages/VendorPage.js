import React, { Component } from "react";
import API from "../utils/API";

class VendorPage extends Component {
    state = {
        vendor: []
    };

    componentDidMount() {
        this.forceUpdate();
        this.findOneVendor();
    }

    findOneVendor = () => {
        API.findOneVendor(this.props.match.params.id)
            // .then(res => console.log(res.data))
            .then(res => {
                // console.log("findOneVendor():", res.data);
                this.setState({
                    vendor: res.data
                })
                console.log(this.state)
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>{this.state.vendor.vendorName}</h1>

                <br></br>

                <h3>Contact Information</h3>

                <h6>Address:</h6> 
                <p>{this.state.vendor.address}</p>

                <h6>City:</h6>
                <p>{this.state.vendor.city}</p> 

                <h6>State: </h6>
                <p>{this.state.vendor.state}</p>

                <h6>Zip:</h6> 
                <p>{this.state.vendor.zip}</p>

                <h6>Phone:</h6> 
                <p>{this.state.vendor.phone}</p>
                
                <h6>Email:</h6> 
                <p>{this.state.vendor.email}</p>

                <h3>Donations</h3>

                <p>List Donations Here</p>

                
            </div>
        )
    }
}

export default VendorPage;