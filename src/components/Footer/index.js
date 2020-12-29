import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import Col from '../Column'
import Row from '../Row'
import Container from '../Container';

function Footer() {
    return(
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                    <p> © Hayden Rust</p>
                    </Col>
                    <Col>
                    <div className="contactIcons">
                        <Link 
                        className="jumboP" 
                        to="https://www.linkedin.com/inhayden-rust-857516167/" 
                        target="_blank">
                            <i className="fab fa-linkedin" />
                        </Link>
                        <Link 
                        className="jumboP" 
                        to="https://www.linkedin.com/inhayden-rust-857516167/" 
                        target="_blank">
                            <i className="fab fa-github-square" />
                        </Link>
                        <Link 
                        className="jumboP" 
                        to="mailto: haydenrust1@gmail.com"
                        target="_blank">        
                            <i className="fas fa-envelope-square" />
                        </Link>
                        <Link 
                        className="jumboP" 
                        to="../../public/Hayden-Rust-Resume.pdf" 
                        target="_blank">
                            <i className="far fa-file" />
                        </Link>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    
    )
}

export default Footer;