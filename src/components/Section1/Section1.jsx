import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import main from '../../assets/img/S1main.svg';

const Section1 = () => {
  return (
    <div className='Section1'>
      <Container>
      <Row>
      <Col xs={6} >
        <div className='infocontainer'>
          <h1>The future of <br /><span>renovation is here</span></h1>
        <h5>Measure. Upload. Get bids. Stress-free.</h5>
        <div className='btncontainer'>
          <Button id="get-bids-btn">Get bids</Button>
        <Button id="bid-on-job-btn" >Bid on job</Button>
        </div>
        </div>
      </Col>
      <Col xs={6}>
        <div className='imagecontainer'>
          <img src={main} alt="Section1 Image" />
        </div>
      
      </Col>
    </Row>
    </Container>
    </div>
  );
}

export default Section1;
