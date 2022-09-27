import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import bgImage from '../resources/bg/drummachinebg.jpg';

const DrumMachine = () => {
  const powerSlider = true
    ? {
        float: 'right',
      }
    : {
        float: 'left',
      };

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
          <Col xs={12} md={8} lg={6} className='drum-machine'>
            <p className='text-end title'>
              FCC
              <FontAwesomeIcon
                icon={faFreeCodeCamp}
                color='#000'
                className='mx-1'
              />
            </p>
            <Row>
              <Col xs={12} md={6}>
                <div className='keys-container'>
                  <div className='key inactiveStyle text-center'>Q</div>
                  <div className='key inactiveStyle text-center'>W</div>
                  <div className='key inactiveStyle text-center'>E</div>
                  <div className='key inactiveStyle text-center'>A</div>
                  <div className='key inactiveStyle text-center'>S</div>
                  <div className='key inactiveStyle text-center'>D</div>
                  <div className='key inactiveStyle text-center'>Z</div>
                  <div className='key inactiveStyle text-center'>X</div>
                  <div className='key inactiveStyle text-center'>C</div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className='controls-container'>
                  <div className='control'>
                    <p className='text-center'>Power</p>
                    <div className='outer-select'>
                      <div className='inner-select' style={powerSlider} />
                    </div>
                  </div>
                  <p id='display'></p>
                  <div className='volume-slider'>
                    <Form.Range max={1} min={0} step={0.01} />
                  </div>
                  <div className='control'>
                    <p className='text-center'>Bank</p>
                    <div className='outer-select'>
                      <div className='inner-select' style={powerSlider} />
                    </div>
                  </div>
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
