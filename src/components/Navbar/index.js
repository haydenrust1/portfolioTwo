import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './style.css'

function NavigationBar() {
    // const [scrollPostion, setScrollPosition] = useState('top');

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    // })

    // const handleScroll = () => {
    //     console.log('scrolling')
    //     if (window.scrollY >= 5) {
    //         setScrollPosition('moved')
    //     }
    //     setScrollPosition('top');
    // }

    // const navOptions =             
    //     scrollPostion === 'top'
    //     ?
    //     'transparent'
    //     :
    //     'white'


    return(
        <Navbar collapseOnSelect variant='dark' expand="sm" fixed="top"
        //  style={{
        //     backgroundColor: navOptions
        //     }}
            >
            <Navbar.Brand href="/">Hayden's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#portfolio">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>

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