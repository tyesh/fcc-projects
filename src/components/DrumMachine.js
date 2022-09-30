import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import bgImage from '../resources/bg/drummachinebg.jpg';
import { bankOne, bankTwo } from '../utils/constants';

const DrumMachine = () => {
  const [power, setPower] = useState(true);
  const [currentPadBank, setCurrentPadBank] = useState(bankOne);
  const [volume, SetVolume] = useState(0.5);
  const [currentPadId, setCurrentPadId] = useState('');

  const changePower = () => {
    setPower((current) => !current);
    setCurrentPadId('');
  };

  const changeBank = () => {
    setCurrentPadBank((current) => (current === bankOne ? bankTwo : bankOne));
  };

  const volumeChangeHandler = (e) => {
    SetVolume(e.target.value);
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

  const playAudio = ({ audio, id }) => {
    if (power) {
      setCurrentPadId(id);
      const audioToPlay = new Audio(audio);
      audioToPlay.volume = volume;
      audioToPlay.play();
    }
  };

  const Pad = ({ playHandler, pad }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      if (active) {
        playHandler({ audio: pad.url, id: pad.id });
        setTimeout(() => setActive(false), 100);
      }
    }, [active, playHandler, pad]);

    const clickHandler = () => {
      setActive(true);
    };

    return (
      <div
        className={`drum-pad ${
          active ? 'activeStyle' : 'inactiveStyle'
        } text-center`}
        onClick={() => clickHandler()}
      >
        <audio
          className='clip'
          id={pad.keyTrigger}
          src={pad.url}
          volume={volume}
        />
        {pad.keyTrigger}
      </div>
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
                <div className='drum-pad-container'>
                  {currentPadBank.map((pad) => (
                    <Pad key={pad.id} playHandler={playAudio} pad={pad} />
                  ))}
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
                  <p id='display' className='text-center'>
                    {currentPadId}
                  </p>
                  <div className='volume-slider'>
                    <Form.Range
                      max={1}
                      min={0}
                      step={0.01}
                      value={volume}
                      onChange={volumeChangeHandler}
                    />
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
