import React from "react";
import { Route, Link } from "react-router-dom";
import VendorList from "../components/All/VendorList";
import DonationList from "../components/All/DonationList";

const All = (props) => {
    return (
     
            <div>

                <Link to={`${props.match.url}/vendors`} role="button" className="btn">
                    List All Vendors
                </Link>
                
                
                <Link to={`${props.match.url}/donations`} role="button" className="btn">
                    List All Donations
                </Link>
                

                <Link to={`${props.match.url}`} role="button" className="btn">
                    Hide
                </Link>
                
                <br></br>

    
                <Route exact path={`${props.match.url}/vendors`} component={VendorList} />
                <Route exact path={`${props.match.url}/donations`} component={DonationList} />


            </div>
    

    )
}

export default All;