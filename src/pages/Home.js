import React from 'react';
import Jumbotron from '../components/Jumbotron';
import HomeContainer from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Column';
import Astronaut from '../components/Astronaut';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

function Home() {
    return(
            <HomeContainer>
                {/* Intro */}
                <Row>
                    <Col>
                        <Jumbotron>
                            <a name='home' />
                            <h1 className="display-4">Welcome!</h1>
                            <p className="lead">My name is Hayden Rust and
                            <br />
                            I am a full stack web developer
                            </p>
                            <p>Have a look around</p>
                            <hr className="my-4" />
                            <Astronaut />
                        </Jumbotron>
                    </Col>
                </Row>
                {/* Portfolio */}
                <Portfolio />
                {/* Skill Set */}
                <Row>
                    <Col>
                        <div className='imgContainer' style={{marginTop: '20px', width: '100%', textAlign: 'center'}}>
                            <Skills src='./images/js.png' className='image' alt='javascript'/>
                            <Skills src='./images/html.png' className='image' alt='html'/>
                            <Skills src='./images/css.png' className='image css' alt='css'/>
                            <Skills src='./images/mongo.png' className='image mongo' alt='mongo db'/>
                            <Skills src='./images/mysql.png' className='image' alt='my sql'/>
                            <Skills src='./images/node.png' className='image' alt='node'/>
                            <Skills src='./images/react.png' className='image' alt='react'/>
                        </div>
                    </Col>
                </Row>
                {/* Personal Info */}
                <Row>
                    <Col>
                        <Jumbotron style={{paddingBottom: '5px'}}>
                            <p>What an honor it is to have a visitor in my humble online abode!
                            <br />
                            Please make yourself at home, stay as long as you want, and have a look around.
                            <br />
                            I am a full stack web devoloper with an arsenal of weaponry that even Sauran wouldn't want to look
                            at.
                            <br /><br />
                            <br />
                            Tidbits of myself:
                            <br />
                            I just got married on September 18 of 2020, WOOT!
                            <br />
                            If I'm not surfing, I'm watching surfing videos!
                            <br /> 
                            Being born and raised in the northern LA area, the beach has been a huge part of my life.
                            <br />
                            Portland, Oregon is now my residence and although the rain can be a drag, the hiking opportunities
                            here
                            are beyond belief!
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                {/* Contact */}
                <Contact />
            </HomeContainer>    
    )
}

export default Home;