import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>

            {/* <Navbar sticky="top" bg="info" expand="lg" variant="dark">
                <Navbar.Brand to="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link to="/all">All</Nav.Link>
                    <Nav.Link to="/search">Search</Nav.Link>
                    <Nav.Link to="/add">Add</Nav.Link>
                </Nav>
            </Navbar> */}

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-link">
                                <Link className="nav-link" to="/all">All</Link>
                            </li>
                            <li className="nav-link">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                            <li className="nav-link">
                                <Link className="nav-link" to="/add">Add</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;