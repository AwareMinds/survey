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
                    <Nav.Link as={ScrollLink} to="Section1" onClick={() => navigate('/survey')} spy={true} smooth={true} duration={500} offset={-70} style={{cursor: 'pointer'}}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={ScrollLink} to="Section2" onClick={() => navigate('/survey')} smooth={true} duration={500} offset={-70} style={{cursor: 'pointer'}}>
                        About Research
                    </Nav.Link>
                    <Nav.Link as={ScrollLink} to="Section3" onClick={() => navigate('/survey')} spy={true} smooth={true} duration={500} offset={-70} style={{cursor: 'pointer'}}>
                        Our Team
                    </Nav.Link>
                    <Button variant="outline-success" href="https://docs.google.com/forms/d/e/1FAIpQLSf7ZxDCRJRZ0emU315Gf39mVCFrcj109NFej8BKBJrEyouLuA/viewform?usp=sf_link" target="_blank">
                        Participate in Survey
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;