import React from "react";
import { Route, Link } from "react-router-dom";
import VendorList from "../components/VendorList";
import DonationList from "../components/DonationList";
import { spawn } from "child_process";

const All = (props) => {
    return (
     
            <div>

                <Link to={`${props.match.url}/vendors`} role="button">
                    List All Vendors
                </Link>
                <span> - </span>
                <Link to={`${props.match.url}/donations`} role="button">
                    List All Donations
                </Link>
                <span> - </span>
                <Link to={`${props.match.url}`} role="button">
                    Hide
                </Link>
                
                <br></br>

    
                <Route exact path={`${props.match.url}/vendors`} component={VendorList} />
                <Route exact path={`${props.match.url}/donations`} component={DonationList} />


            </div>
    

    )
}

export default All;