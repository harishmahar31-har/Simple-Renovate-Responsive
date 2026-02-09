import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import speciality1 from '../../assets/img/speciality1s4.svg';
import speciality2 from '../../assets/img/speciality2s4.svg';
import speciality3 from '../../assets/img/speciality3s4.svg';
import speciality4 from '../../assets/img/speciality4s4.svg';

const Section4 = () => {
    const [click1, setclick1] = useState(true)
    const [click2, setclick2] = useState(false)
    const [click3, setclick3] = useState(false)
    const [click4, setclick4] = useState(false)

    const makeclick1 = () => {
      setclick1(true)
      setclick2(false)
      setclick3(false)
      setclick4(false)
    }
    const makeclick2 = () => {
      setclick2(true)
      setclick1(false)
      setclick3(false)
      setclick4(false)
    }
    const makeclick3 = () => {
      setclick3(true)
      setclick2(false)
      setclick1(false)
      setclick4(false)
    }
    const makeclick4 = () => {
      setclick4(true)
      setclick2(false)
      setclick3(false)
      setclick1(false)
    }
    

    return (
        <div className="Section4">
            <Container>
                <div className='infocontainer4'>
                    <h3>Why Choose SimpleRenovate</h3>
                    <p>We're committed to making your renovation experience smooth, reliable, and stress-
                        free.</p>
                </div>
                <div className='specialitycardcontainer4'>
                    <Row>
                        <Col md={3} xs={6}>
                            <div onClick={makeclick1} className={`specialitycard ${click1 ? "active" : " "}`} >
                                <img src={speciality1} alt="" />
                                <h6>Simplified Renovation Process</h6>
                                <p>Measure your space, upload project details, and get bids—all from the comfort of your home.</p>
                            </div>

                        </Col>
                        <Col md={3} xs={6}>
                            <div onClick={makeclick2} className={`specialitycard ${click2 ? "active" : " "}`}>
                                <img src={speciality2} alt="" />
                                <h6>Trusted Professionals at your Fingertips</h6>
                                <p>Connect with licensed, verified experts who are ready to make your project a reality.
                                    <br /> <br />
                                </p>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div onClick={makeclick3} className={`specialitycard ${click3 ? "active" : " "}`}>
                                <img src={speciality3} alt="" />
                                <h6>Save Time and Eliminate Hassle</h6>
                                <p>No in-home visits, no high-pressure sales tactics just fast, accurate bids.</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div onClick={makeclick4} className={`specialitycard ${click4 ? "active" : " "}`}>
                                <img src={speciality4} alt="" />
                                <h6>Smart Technology for Smarter Bidding</h6>
                                <p>Our advanced camera measurement tools ensure precise details, making the process seamless for everyone.</p>
                            </div>
                        </Col>

                    </Row>

                </div>
                
            </Container>
        </div>
    );
}

export default Section4;
