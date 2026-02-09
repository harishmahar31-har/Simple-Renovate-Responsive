import { Button, Col, Container, Row } from "react-bootstrap";
import speciality1 from '../../assets/img/speciality1s2.svg';
import speciality2 from '../../assets/img/speciality2s2.svg';
import speciality3 from '../../assets/img/speciality3s2.svg';
import speciality4 from '../../assets/img/speciality4s2.svg';

const Section2 = () => {
    return (
        <div className='Section2'>
            <Container>
                <div className='infocontainer2'>
                    <h1>Your Renovation,<br /><span>Simplified</span>.</h1>
                    <h5>We’ve streamlined the renovation process to make it faster, smarter, and easier
                        than ever.</h5>
                </div>
                <div className='specialitycardcontainer'>
                    <Row>
                        <Col md={3} xs={6}>
                            <div className="specialitycard">
                                <img src={speciality1} alt="" />
                                <h6>Trust & Verification</h6>
                                <p>Verified businesses with track records you can review.</p>
                            </div>

                        </Col>
                        <Col md={3} xs={6}>
                            <div className="specialitycard">
                                <img src={speciality2} alt="" />
                                <h6>Smart Measurement</h6>
                                <p>Use your phone to scan and create 2D/3D layouts that pros use to send accurate bids.</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="specialitycard">
                                <img src={speciality3} alt="" />
                                <h6>Simplified Workflow</h6>
                                <p>From scan to quote in a few easy steps.</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6}>
                            <div className="specialitycard">
                                <img src={speciality4} alt="" />
                                <h6>Expanding Network</h6>
                                <p>More verified professionals joining everyday, ready to quote your next project.</p>
                            </div>
                        </Col>

                    </Row>

                </div>
                    <div className="btncontainer">
                        <Button id="get-bids-btn">Get bids</Button>
                        &nbsp; &nbsp;
                        <Button id="bid-on-job-btn" >Bid on job</Button>
                    </div>
            </Container>
        </div>
    );
}

export default Section2;
