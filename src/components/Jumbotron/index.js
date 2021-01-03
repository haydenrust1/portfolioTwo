import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css'

function AppJumbotron(props) {
    return(
        <Jumbotron fluid style={props.style}>
            {props.children}
        </Jumbotron>
    )
}

export default AppJumbotron;