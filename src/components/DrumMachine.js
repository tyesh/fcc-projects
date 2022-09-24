import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImage from '../resources/bg/drummachinebg.jpg';

const DrumMachine = () => {
  return (
    <main
      style={{
        background: `url(${bgImage}) 50%/cover no-repeat`,
        minHeight: '100vh',
      }}
    >
      <Container style={{ minHeight: '100vh' }}>
        <Row
          className='justify-content-center align-items-center'
          style={{
            minHeight: '100vh',
          }}
        >
          <Col xs={12} md={6} className='drum-machine'>
            <p className='text-end'>FCC</p>
            <Row>
              <Col xs={6}>
                <div className='keys-container'>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                  <div className='key'>1</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default DrumMachine;
