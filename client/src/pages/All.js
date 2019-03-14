import React from "react";
import { Link, Route } from "react-router-dom";
import VendorList from "../components/VendorList";
import DonationList from "../components/DonationList";

const All = (props) => {
    return (
        <div>

            <Link to={`${props.match.url}/vendors`} role="button" className="btn btn-info test">
                List All Vendors
            </Link>

            <Link to={`${props.match.url}/donations`} role="button" className="btn btn-info">
                List All Donations
            </Link>

            <Link to={`${props.match.url}`} role="button" className="btn btn-info">
                Hide
            </Link>

            <br></br>

            <Route exact path={`${props.match.url}/vendors`} component={VendorList} />
            <Route exact path={`${props.match.url}/donations`} component={DonationList} />
            

        </div>
    )
}

export default All;