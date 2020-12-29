import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './style.css'

function NavigationBar() {
    return(
        <Navbar collapseOnSelect variant='dark' expand="sm" fixed="top">
            <Navbar.Brand href="/">Hayden's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/portfolio">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact Me</Nav.Link>

                {/* ****************************************
                Navbar Dropdown Example for future reference 
                ********************************************/}
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}


export default NavigationBar;