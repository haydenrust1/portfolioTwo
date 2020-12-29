import React from 'react';
import './style.css';
// import BckgroundImg from '/images/galaxy.jpg'

function Background (props) {
    return (
        <div className='view' style={{backgroundImage: `url(/images/galaxy.jpg)`}}>
            {props.children}
        </div>
    )
}

export default Background;