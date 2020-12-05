import React from 'react';
import Container from 'react-bootstrap/Container';
import './style.css'

function FileContainer(props) {
    return(
        <Container className='container' fluid='true'>
            {props.children}
        </Container>
    )
}

export default FileContainer;