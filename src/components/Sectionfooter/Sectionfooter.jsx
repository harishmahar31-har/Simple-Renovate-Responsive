import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import insta from '../../assets/img/Footer-insta-logo.svg'
import facebook from '../../assets/img/Footer-facebook-logo.svg'
import linkedin from '../../assets/img/Footer-linkedin-logo.svg'
import xlogo from '../../assets/img/Footer-x-logo.svg'
import youtube from '../../assets/img/Footer-youtube-logo.svg'
import tiktok from '../../assets/img/Footer-tiktok-logo.svg'
import footerlogo from '../../assets/img/Footer-logo.svg'

const Sectionfooter = () => {
    return (
        <div className="Sectionfooter">
            <Container>
                <div className='footercontent'>
                    <Row>
                        <Col md={3} xs={6}>
                            <div className='footercontentcard'>
                                <h6>For Clients</h6>
                                <ul>
                                    <li><a href="">Get Bids</a></li>
                                    <li><a href="">Client FAQs</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='footercontentcard'>
                                <h6>For Professionals</h6>
                                <ul>
                                    <li><a href="">Find Jobs</a></li>
                                    <li><a href="">Professional FAQs</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='footercontentcard'>
                                <h6>Company</h6>
                                <ul>
                                    <li><a href="">About SimpleRenovate</a></li>
                                    <li><a href="">How SimpleRenovate Works</a></li>
                                    <li><a href="">How We Vet Professionals</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='footercontentcard'>
                                <h6>Follow us</h6>
                                <ul>
                                    <li><a href=""><img src={insta} />&nbsp;&nbsp;Instagram</a></li>
                                    <li><a href=""><img src={facebook} />&nbsp;&nbsp;Facebook</a></li>
                                    <li><a href=""><img src={linkedin} />&nbsp;&nbsp;LinkedIn</a></li>
                                    <li><a href=""><img src={xlogo} />&nbsp;&nbsp;X</a></li>
                                    <li><a href=""><img src={youtube} />&nbsp;&nbsp;YouTube</a></li>
                                    <li><a href=""><img src={tiktok} />&nbsp;&nbsp;TikTok</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='footercontent2'>
                    <Row>
                        <Col xl={2} sm={4}>
                            <div className='footercol'>
                                <img src={footerlogo} alt="SimpleRenovate Logo" />
                                <h5>&copy; 2026 SimpleRenovate. </h5>
                            </div>
                        </Col>
                        <Col xl={2} sm={4}>
                            <div className='footercol'>
                                <a href="">Terms of Service</a>
                            </div>
                        </Col>
                        <Col xl={8} sm={4}>
                            <div className='footercol'>
                                 <a href="">Privacy Policy</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Sectionfooter;
