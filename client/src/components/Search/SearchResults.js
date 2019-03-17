import React from "react";
import { Link } from "react-router-dom";

export const Table = ({ children }) => {
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Vendor Name</th>
                        <th scope="col">Donation Type</th>
                        <th scope="col">Note</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export const TableItem = (props) => {
    // console.log("props: ", props);
    return (
        <>
            <tr>
                <td>
                    <Link to={`/vendor/` + props.vendorID}>
                        {props.vendorName}
                    </Link>
                </td>
                <td>{props.donationType}</td>
                <td>{props.note}</td>
            </tr>
        </>
    )
}