import React from 'react';
import Carousel from '../Carousel'
import Row from '../Row';
import Col from '../Column';

// import Jumbotron from '../components/Jumbotron'

function Portfolio() {
    return(
                <Row>
                    <Col>
                        <a name='portfolio' />
                        <Carousel />
                    </Col>
                </Row>
    )
}

export default Portfolio;