import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import bgImage from '../resources/bg/drummachinebg.jpg';
import { bankOne, bankTwo } from '../utils/constants';

const DrumMachine = () => {
  const [power, setPower] = useState(true);
  const [currentPadBank, setCurrentPadBank] = useState(bankOne);

  const changePower = () => {
    setPower((current) => !current);
  };

  const changeBank = () => {
    setCurrentPadBank((current) => (current === bankOne ? bankTwo : bankOne));
  };

  const powerSlider = power
    ? {
        float: 'right',
      }
    : {
        float: 'left',
      };

  const bankSlider =
    currentPadBank === bankOne
      ? {
          float: 'right',
        }
      : {
          float: 'left',
        };

  const Pads = () => {
    return (
      <>
        {currentPadBank.map((pad) => (
          <div key={pad.id} className='key inactiveStyle text-center'>
            <audio className='clip' id={pad.keyTrigger} src={pad.url} />
            {pad.keyTrigger}
          </div>
        ))}
      </>
    );
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
                  <Pads />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className='controls-container'>
                  <div className='control'>
                    <p className='text-center'>Power</p>
                    <div className='outer-select' onClick={changePower}>
                      <div className='inner-select' style={powerSlider} />
                    </div>
                  </div>
                  <p id='display'></p>
                  <div className='volume-slider'>
                    <Form.Range max={1} min={0} step={0.01} />
                  </div>
                  <div className='control'>
                    <p className='text-center'>Bank</p>
                    <div className='outer-select' onClick={changeBank}>
                      <div className='inner-select' style={bankSlider} />
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
