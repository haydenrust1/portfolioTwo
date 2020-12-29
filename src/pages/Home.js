import React from 'react';
import Jumbotron from '../components/Jumbotron';
import HomeContainer from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Column';

function Home() {
    const pageStyle = {
        backgroundImage: `url(/images/galaxy.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }
    return(
        <div 
        className="view"
        style={pageStyle}
        >
            <HomeContainer>
                <Row>
                    <Col>
                        <Jumbotron style={{
                            backgroundColor: "transparent",
                            color: 'white'
                            }}>
                            <h1 className="display-4">Welcome!</h1>
                            <p className="lead">Have a look around</p>
                            <hr className="my-4" />
                            <img 
                            src="/images/astronaut.png"
                            height='100'
                            width='100' 
                            id="myFace" 
                            className="img-thumbnail"                           
                            alt="myself on the beach giving a shaka" 
                            rounded='true'
                            style={{backgroundColor: "transparent", border: "none"}}
                            />
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
            </HomeContainer>
        </div>
    
    )
}

export default Home;