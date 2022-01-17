import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <span style={{color:'blue'}}>R</span>estore
                        <span style={{color:'blue'}}>H</span>ealth &nbsp;
                        <span style={{color:'blue'}}>B</span>
                        <span style={{color:'blue'}}>D</span>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#facility">Facility</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#review">Review</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#post">Post</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;