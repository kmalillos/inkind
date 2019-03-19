import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/all">All</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/add">Add</Nav.Link>
                    </Nav>
                    <Navbar.Brand inline href="/">In-Kind Connections</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;