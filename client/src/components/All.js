import React from "react";
import { Link, Route } from "react-router-dom";
import VendorList from "./pages/VendorList";
import DonationList from "./pages/DonationList";

const All = (props) => {
    return (
        <div>
            <Link to={`${props.match.url}/vendors`} role="button" className="btn btn-info">
                List All Vendors
            </Link>
            
            <Route exact path={`${props.match.url}/vendors`} component={VendorList} />

            <Link to={`${props.match.url}/donations`} role="button" className="btn btn-info">
                List All Donations
            </Link>
            
            <Route exact path={`${props.match.url}/donations`} component={DonationList} />
            

        </div>
    )
}

export default All;