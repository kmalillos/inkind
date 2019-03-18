import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import VendorList from "../components/All/VendorList";
import DonationList from "../components/All/DonationList";

const All = (props) => {
    return (

        <div>

            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Vendors</Card.Title>
                                <Link to={`${props.match.url}/vendors`} className="btn btn-info">List All by Vendor</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Donations</Card.Title>
                                <Link to={`${props.match.url}/donations`} className="btn btn-info">List All by Donations</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Link to={`${props.match.url}`} role="button" className="btn">
                            Hide
                        </Link>
                    </Col>
                </Row>
            </Container>

            <br></br>

            <Route exact path={`${props.match.url}/vendors`} component={VendorList} />
            <Route exact path={`${props.match.url}/donations`} component={DonationList} />


        </div>


    )
}

export default All;