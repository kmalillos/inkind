import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ResultsWrapper = ({ children }) => {

    return (
        <div>
            <h3> Search Results </h3>
            <Card>
                <Card.Body>
                    <ListGroup variant="flush">
                        {children}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>

    )
}

export const VendorResults = (props) => {
    // console.log("props: ", props);
    return (
        <>
            <Link to={`/vendor/` + props.vendorID}>
                {props.vendorName}
            </Link>
        </>
    )
}

export const DonationResults = (props) => {

    return (
        <>
            <Link to={`/vendor/` + props.vendorID}>
                {props.vendorName}
            </Link>
        </>
    )
}
