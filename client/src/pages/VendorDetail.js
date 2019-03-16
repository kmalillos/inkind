import React, { Component } from "react";
import API from "../utils/API";
import VendorList from "../components/VendorList";

class VendorDetail extends Component {
    state = {
        vendors: []
    };

    // componentDidMount(){
    //     <p>Mounted</p> 
    // }

    render() {
        return(
            <div>
                <h1>Vendor Page</h1>
            </div>
        )
    }
}

export default VendorDetail;