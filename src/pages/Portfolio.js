import React from 'react';
import Carousel from '../components/Carousel'
import Container from '../components/Container/';
import Row from '../components/Row/';
import Col from '../components/Column/';

// import Jumbotron from '../components/Jumbotron'

function Portfolio() {
    return(
            <Container>
                <Row>
                    <Col>
                        <div style={{textAlign:'center', height:'100px'}}>
                            <h1 style={{color: 'white'}}>Projects</h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Carousel />
                    </Col>
                </Row>
            </Container>
    )
}

export default Portfolio;