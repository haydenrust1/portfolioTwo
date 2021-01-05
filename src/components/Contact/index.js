import React from 'react';
import Row from '../Row';
import Column from '../Column';
import Jumbotron from '../Jumbotron'
import './style.css'


function Contact() {
    return(
            <Row>
                <Column>
                    <Jumbotron bsPrefix='contactJumbo'>
                        <a name='contact' />
                        <h1 className="contactHeader">Contact Me</h1>
                        <div className="contactDiv">
                            <a 
                            className="contactIcon" 
                            href="https://www.linkedin.com/in/hayden-rust-857516167/" 
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
                            href="HaydenRustResume.pdf" 
                            target="_blank">
                                <i className="fas fa-file-pdf fa-7x" />
                            </a>
                        </div>
                    </Jumbotron>
                </Column>
            </Row>
    )
}

export default Contact;