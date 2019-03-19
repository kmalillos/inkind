import React from "react";
import { Carousel, Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import home1 from "../../assets/imgs/home1.jpg";
import home2 from "../../assets/imgs/home2.jpg";
import home3 from "../../assets/imgs/home3.jpg";
import home4 from "../../assets/imgs/home4.jpg";
import home5 from "../../assets/imgs/home5.jpg";
import home6 from "../../assets/imgs/home6.jpg";


const Home = () => {

    return (
        <div>
            {/* <h1 className="text-center">In-Kind Connections</h1> */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Chuck Participates in the Soap Box Derby Championships</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Best Friends Carolyn and Yvonne Reunite</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Jack Flies in a Fighter Jet</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Joan Vists Facebook's Living Roof</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mike Celebrates His 95th Birthday with Family</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home6}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Patty Goes to a Baseball Game</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
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