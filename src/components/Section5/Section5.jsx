import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import koma from '../../assets/img/Logos5.png'
import P1 from '../../assets/img/Marcuss5.webp'
import P2 from '../../assets/img/Jamess5.webp'
import P3 from '../../assets/img/Sofias5.webp'

const Section5 = () => {
    return (
        <div className="Section5">
            <Container>
                <div className='infocontainer5'>
                    <h6>BUILT TO SAVE TIME FOR CLIENTS AND PROPS ALIKE</h6>
                    <h2>People love renovating with us </h2>
                    <p>We match homeowners with trusted pros—fast. No pressure, no sales calls—just clear <br />
                        measurements, fair bids, and smooth projects from start to finish.</p>
                </div>
                <div className='cardcontainer5'>
                    <Row>
                        <Col md={4}>
                            <div className='card'>
                                <img src={koma}  alt="Koma Logo" className='koma' />
                                <p>Didn't have to schedule visits or deal with pressure. I scanned my space,got bids online. and picked the best one. Easiest home project I've done.</p>
                                <div className='innercard'>
                                    <img src={P1} alt="" />
                                    <div className='innercarddetail'>
                                        <h5>Marcus T.</h5>
                                        <h6>Client in Queen Creek, AZ</h6>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card'>
                                <img src={koma}  alt="Koma Logo" className='koma' />
                                <p>SimpleRenovate saves me hours. Having all the dimensions and project details upfront means I can quote jobs faster without wasting time on site visits.</p>
                                <div className='innercard'>
                                    <img src={P2} alt="" />
                                    <div className='innercarddetail'>
                                        <h5>James L.</h5>
                                        <h6>Flooring Professional in Saint Paul, MN</h6>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='card'>
                                <img src={koma}  alt="Koma Logo" className='koma' />
                                <p>I loved that I didn't have to let anyone into my home just to get a quote. SimpleRenovate let me post everything from-fast, easy, and zero pressure.</p>
                                <div className='innercard'>
                                    <img src={P3} alt="" />
                                    <div className='innercarddetail'>
                                        <h5>Sofia R.</h5>
                                        <h6>Client in Huntington Beach,CA</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='btncontainer5'>
                    <Button id='join-customers'>Join Thousands of Happy Customers</Button>
                </div>
            </Container>
        </div>
    );
}

export default Section5;
