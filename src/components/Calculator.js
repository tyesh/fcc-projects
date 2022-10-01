import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImage from '../resources/bg/calculatorbg.jpg';

const Calculator = () => {
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
          <Col xs={12} md={6} className='cal-layout'>
            <div className='calculator'>
              <div className='current-operation text-right'>9+6</div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Calculator;
