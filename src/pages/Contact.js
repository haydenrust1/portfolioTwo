import React from 'react';
import Container from '../components/Container/';
import Row from '../components/Row/';
import Column from '../components/Column/';
import Jumbotron from '../components/Jumbotron/'


function Contact() {
    return(
        <Container>
            <Row>
                <Column>
                    <Jumbotron style={{height: '100%'}}>
                        <h1>Contact Page!</h1>
                        <h2>Email: haydenrust1@gmail.com</h2>
                    </Jumbotron>
                </Column>
            </Row>
        </Container>
    )
}

export default Contact;