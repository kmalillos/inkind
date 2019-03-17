import React from "react";

export const DonationTable = ({ children }) => {

    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Donation Type</th>
                        <th scope="col">Note</th>
                        <th scope="col">When</th>
                        <th scope="col">Value</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
};

export const DonationTableItem = (props) => {
    return (
        <>
            <tr>
                <td>{props.donationType}</td>
                <td>{props.note}</td>
                <td>{props.date}</td>
                <td>${props.donationValue}</td>
                <td>
                    <button id={props.id} onClick={props.onClick}>
                        X
                    </button>
                </td>
            </tr>
        </>
    )

};