import React from "react";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import allvendors from "../assets/imgs/allvendors.jpg";
import alldonations from "../assets/imgs/alldonations.jpg";
import VendorList from "../components/All/VendorList";
import DonationList from "../components/All/DonationList";

const All = (props) => {
    return (

        <div>

            <Container>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={allvendors} />
                                <Card.Body>
                                    <Card.Title>Vendors</Card.Title>
                                    <Link to={`${props.match.url}/vendors`} className="btn btn-info">List All by Vendor</Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={alldonations} />
                                <Card.Body>
                                    <Card.Title>Donations</Card.Title>
                                    <Link to={`${props.match.url}/donations`} className="btn btn-info">List All by Donations</Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
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