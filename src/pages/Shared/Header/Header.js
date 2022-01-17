import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#facility">Facility</Nav.Link>
                            <Nav.Link href="#review">Review</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#post">Post</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;