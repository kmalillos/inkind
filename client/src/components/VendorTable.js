import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

export const VendorTable = ( {children} ) => {
    return (
        <div>
            <table className ="table">
                <thead>
                    <tr>
                        <th scope="col">Vendor Name</th>
                        <th scope="col">City</th>  
                        <th scope="col">State</th>    
                        <th scope="col">Phone</th>  
                        <th scope="col">Email</th>    
                    </tr>
                </thead>  
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export const VendorTableItem = (props) => {
    console.log(props);
    return (
            <>
                <tr>
                    <td>
                        <Link to={`/vendor/` + props.vendorID}>
                            {props.vendorName}
                        </Link>
                    </td>
                    <td>{props.city}</td>
                    <td>{props.state}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                </tr>
            </>
    )
}