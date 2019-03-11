import React from "react";
import { Link, Route } from "react-router-dom";
import VendorList from "./pages/VendorList";

const All = (props) => {
    return (
        <div>
            <Link to={`${props.match.url}/vendors`} role="button" className="btn btn-info">
                List All Vendors
            </Link>
            
            <Route exact path={`${props.match.url}/vendors`} component={VendorList} />
            

        </div>
    )
}

export default All;