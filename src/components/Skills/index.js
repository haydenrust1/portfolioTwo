import React from 'react';
import './style.css'

function Skills (props) {
    return (
        <img 
        src={props.src}
        className={props.className}                        
        alt={props.alt} 
        />
    )
}

export default Skills;