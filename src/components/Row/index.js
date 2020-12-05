import React from 'react';
import Row from 'react-bootstrap/Row';

function FileRow(props) {
    return(
        <Row>
            {props.children}
        </Row>
    )
}

export default FileRow;