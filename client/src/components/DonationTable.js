import React from "react";

export const DonationTable = ({children}) => {
    return (
        <div>
            <table className ="table">
                <thead>
                    <tr>
                        {/* <th scope="col">Vendor Name</th> */}
                        <th scope="col">Donation Type</th>  
                        <th scope="col">Note</th>    
                        <th scope="col">When</th>  
                        <th scope="col">Value</th>    
                    </tr>
                </thead>  
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export const DonationTableItem = (props) => {
    console.log(props);
    return (
        <>
            <tr>
                {/* <td>{props.vendorName}</td> */}
                <td>{props.donationType}</td>
                <td>{props.note}</td>
                <td>{props.date}</td>
                <td>${props.donationValue}</td>
            </tr>
        </>
    )
}