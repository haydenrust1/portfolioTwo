import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

function Footer() {
    return(
        <footer className='footer'>
            <div className="col card-footer text-muted">
                <div className="row">
                    <p> © Hayden Rust</p>
                    <div className="contactIcons">
                        <Link 
                        className="jumboP" 
                        to="https://www.linkedin.com/inhayden-rust-857516167/" 
                        target="_blank">
                            <i className="fab fa-linkedin" />
                        </Link>
                        <Link 
                        className="jumboP" 
                        to="https://www.linkedin.com/inhayden-rust-857516167/" 
                        target="_blank">
                            <i className="fab fa-github-square" />
                        </Link>
                        <Link 
                        className="jumboP" 
                        to="mailto: haydenrust1@gmail.com"
                        target="_blank">        
                            <i className="fas fa-envelope-square" />
                        </Link>
                        <Link 
                        className="jumboP" 
                        to="../../public/Hayden-Rust-Resume.pdf" 
                        target="_blank">
                            <i className="far fa-file" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    
    )
}

export default Footer;