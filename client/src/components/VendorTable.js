import React from "react";

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
                <td>{props.vendorName}</td>
                <td>{props.city}</td>
                <td>{props.state}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>
        </>
    )
}