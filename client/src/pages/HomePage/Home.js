import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {

    return (
        <div>
            <h1 className="text-center">In-Kind Connections</h1>

            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>All</Card.Title>
                                <Card.Text>
                                    List all vendors and donations.
                                </Card.Text>
                                <Link to="/all" className="btn btn-info">Go to All</Link>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Search</Card.Title>
                                <Card.Text>
                                    Search by vendors and donations.
                                </Card.Text>
                                <Link to="/search" className="btn btn-info">Go to Search</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Add</Card.Title>
                                <Card.Text>
                                    Add a new vendor. 
                                </Card.Text>
                                <Link to="/add" className="btn btn-info">Go to Add</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home;