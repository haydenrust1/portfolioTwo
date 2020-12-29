import React from 'react';
import {Link} from 'react-router-dom'
import Container from '../components/Container/';
import Row from '../components/Row/';
import Column from '../components/Column/';
import Jumbotron from '../components/Jumbotron/'
import './Contact.css'


function Contact() {
    const style = {
        backgroundImage: "url(images/galaxy.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }
    return(
        <div className="view" style={style}>
        <Container>
            <Row>
                <Column>
                    <Jumbotron className='contactJumbo'>
                        <h1 className="contactHeader">Contact Me</h1>
                        <div className="contactDiv">
                            <a 
                            className="contactIcon" 
                            href="https://www.linkedin.com/inhayden-rust-857516167/" 
                            target="_blank">
                                <i className="fab fa-linkedin fa-7x" />
                            </a>
                            <a 
                            className="contactIcon" 
                            href="https://github.com/haydenrust1" 
                            target="_blank">
                                <i className="fab fa-github-square fa-7x" />
                            </a>
                            <a 
                            className="contactIcon" 
                            href="mailto: haydenrust1@gmail.com"
                            target="_blank">        
                                <i className="fas fa-envelope-square fa-7x" />
                            </a>
                            <a 
                            className="contactIcon" 
                            href="../../public/Hayden-Rust-Resume.pdf" 
                            target="_blank">
                                <i className="fas fa-file-pdf fa-7x" />
                            </a>
                        </div>
                    </Jumbotron>
                </Column>
            </Row>
        </Container>
        </div>
    )
}

export default Contact;