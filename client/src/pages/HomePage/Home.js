import React from "react";
import { Carousel, Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import carousel1 from "../../assets/imgs/carousel1.jpg";
import carousel2 from "../../assets/imgs/carousel2.jpg";
import carousel3 from "../../assets/imgs/carousel3.jpg";
import carousel4 from "../../assets/imgs/carousel4.jpg";
import carousel5 from "../../assets/imgs/carousel5.jpg";


const Home = () => {

    return (
        <div>
            <h1 className="text-center">In-Kind Connections</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
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
                        src={carousel2}
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
                        src={carousel3}
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
                        src={carousel4}
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
                        src={carousel5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>;

                <Container>
                <Row>
                    <Col>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>All</Card.Title>
                                    <Card.Text>
                                        List all vendors and donations.
                                    </Card.Text>
                                    <Link to="/all" className="btn btn-info">Go to All</Link>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Search</Card.Title>
                                    <Card.Text>
                                        Search by vendors and donations.
                                    </Card.Text>
                                    <Link to="/search" className="btn btn-info">Go to Search</Link>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Add</Card.Title>
                                    <Card.Text>
                                        Add a new vendor.
                                    </Card.Text>
                                    <Link to="/add" className="btn btn-info">Go to Add</Link>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}

export default Home;