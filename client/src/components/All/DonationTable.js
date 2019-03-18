import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const DonationTable = ({ children }) => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Vendor Name</th>
                                    <th scope="col">Donation Type</th>
                                    <th scope="col">Note</th>
                                    {/* <th scope="col">Date</th>
                                    <th scope="col">Value</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const DonationTableItem = (props) => {
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
                {/* <td>{props.date}</td>
                <td>${props.donationValue}</td> */}
            </tr>
        </>
    )
}