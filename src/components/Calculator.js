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
      id='calculator'
    >
      <Container>
        <Row
          className='justify-content-center align-items-center g-0'
          style={{
            minHeight: '100vh',
          }}
        >
          <Col className='text-center' xs={12}>
            <h1>FCC Calculator</h1>
            <p>
              A simple online calculator for FCC projects, based o the Windows
              calculator design.
            </p>
          </Col>
          <Col xs={12} md={6} className='cal-layout'>
            <div className='calculator'>
              <div className='current-operation'>9+6=</div>
              <div className='result-operation'>15</div>
              <div className='keys-containter'>
                <div className='key-ac'>AC</div>
                <div className='key-operation'>/</div>
                <div className='key-operation'>*</div>
                <div className='key-number'>9</div>
                <div className='key-number'>8</div>
                <div className='key-number'>7</div>
                <div className='key-operation'>-</div>
                <div className='key-number'>6</div>
                <div className='key-number'>5</div>
                <div className='key-number'>4</div>
                <div className='key-operation'>+</div>
                <div className='key-number'>3</div>
                <div className='key-number'>2</div>
                <div className='key-number'>1</div>
                <div className='key-equal'>=</div>
                <div className='key-0'>0</div>
                <div className='key-operation'>,</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Calculator;
