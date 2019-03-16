import React, { Component } from "react";
import API from "../utils/API";

class VendorDetail extends Component {
    state = {
        vendors: []
    };

    componentDidMount(){
        this.findOneVendor();
    }

    findOneVendor = () => {
        API.findOneVendor(this.props.match.params.id)
            // .then(res => console.log(res.data))
            .then(res => {
                console.log("findOneVendor():", res.data);
                this.setState({
                    vendors: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div>
                <h1>Vendor Page</h1>
                <h3>Name: </h3>

                <h3>Contact Information</h3>
                <h6>Address:</h6>
                <h6>City: </h6>
                <h6>State: </h6>
                <h6>Zip: </h6>
                <h6>Phone: </h6>
                <h6>Email: </h6>
            </div>
        )
    }
}

export default VendorDetail;