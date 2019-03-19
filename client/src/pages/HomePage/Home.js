import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {

    return (
        <div>
            <h1 className="text-center">In-Kind Connections</h1>

            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>; */}
            
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