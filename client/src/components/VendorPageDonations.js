import React from "react";

const VendorPageDonations = (props) => {
    console.log("Props: ", props);
    return (
        <>
        <ul>
            <li>
                {props.donationType}
                {props.note}
                {props.date}
                {props.value}
            </li>
        </ul>
        </>
    )
};

export default VendorPageDonations;

                    