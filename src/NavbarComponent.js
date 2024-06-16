import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


const NavbarComponent = () => {
    const navigate = useNavigate()

    return(
        <Navbar bg="light" expand="lg" fixed="top" style={{paddingLeft: 20}}>
            <Navbar.Brand href="/survey" className="brand_title">Aware Minds</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse style={{paddingRight: 20}}>
                <Nav className="ms-auto">
                    <Nav.Link as={ScrollLink} to="Section1" onClick={() => navigate('/survey')} spy={true} smooth={true} duration={500} offset={-70}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={ScrollLink} to="Section2" onClick={() => navigate('/survey')} smooth={true} duration={500} offset={-70}>
                        About Research
                    </Nav.Link>
                    <Nav.Link as={ScrollLink} to="Section3" onClick={() => navigate('/survey')} spy={true} smooth={true} duration={500} offset={-70}>
                        Our Team
                    </Nav.Link>
                    <Button variant="outline-success" onClick={() => navigate('/survey/form')}>
                        Participate in Survey
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;