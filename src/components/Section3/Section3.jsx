import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bg from '../../assets/img/Bgimgs3.svg';
import card1 from '../../assets/img/Card1s3.svg';
import card2 from '../../assets/img/Card2s3.svg';
import card3 from '../../assets/img/Card3s3.svg';
import mark from '../../assets/img/Marks3.png';

const Section3 = () => {
    return (
        <div className='Section3'>
            <Container>
                <div className='maincontainer3'>
                    <svg class="position-absolute path-svg svg_style"  height="1130" viewBox="50 -78 320 400" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M0 150 C 210 180, 90 70, 220 70 S 260 -10, 400 0" stroke="#CC4645" stroke-width="2" fill="transparent" stroke-linecap="round" stroke-dasharray="600" stroke-dashoffset="0" opacity="1"></path>
                        <image href={mark} x="25" y="148" width="10" height="10" opacity="1" ></image>
                        <image href={mark} x="180" y="69" width="10" height="10" opacity="1" ></image>
                        <image href={mark} x="350" y="-5" width="10" height="10" opacity="1" ></image>
                    </svg>
                    <img src={bg} alt="" id='bgimg' />
                    <div className='infocontainer3'>
                        <h6>HOW IT WORKS</h6>
                        <h2>SimpleRenovate is free to clients and simple to use</h2>
                        <p>Where virtual quotes from real professionals are <br />
                            right at your fingertips.</p>
                        <div className='btncontainer3'>
                            <Button id="get-bids-btn">Get bids</Button>
                        </div>
                    </div>
                    <div className='cardcontainer3'>
                        <Row>
                            <Col md={4}>
                                <div className='card card1'>
                                    <img src={card1} alt="" />
                                    <h4>Measure and upload project details.</h4>
                                    <p>Measure your space using SimpleRenovate’s advanced smartphone camera technology and upload detailed project information. Your job post will include precise measurements and all the details professionals need to bid effectively.</p>
                                    <span className='count count1'>1</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='card card2'>
                                    <img src={card2} alt="" />
                                    <h4>Professionals bid virtually.</h4>
                                    <p>Once your project is posted, professionals review your detailed job information and submit bids virtually. You stay in control by selecting the professionals you want to connect with—no pressure, just results.</p>
                                    <span className='count count2'>2</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='card card3'>
                                    <img src={card3} alt="" />
                                    <h4>Choose the right bid and get started.</h4>
                                    <p>Review bids from top professionals and select the one that works best for you. Once chosen, your project moves forward—quickly and stress-free.</p>
                                    <span className='count count3'>3</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Section3;