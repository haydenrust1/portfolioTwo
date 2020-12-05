import React from 'react';
import Col from 'react-bootstrap/Col';

function FileColumn(props) {
    return(
        <Col>
            {props.children}
        </Col>
    )
}

export default FileColumn;