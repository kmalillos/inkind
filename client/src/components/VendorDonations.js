import React from "react";

const DonationTableItem = (props) => {
    // console.log("props: ", props);


    return (
        <>
                <td>{props.donationType}</td>
                <td>{props.note}</td>
                <td>{props.date}</td>
                <td>${props.donationValue}</td>
        </>
    )
}
               
export default DonationTableItem;