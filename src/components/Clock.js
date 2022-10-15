import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faPlay,
  faPause,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import bgImage from '../resources/bg/clockbg.jpg';

const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLenth, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 25,
    seconds: 0,
    currentTimer: 'session',
  });
  const [clockStatus, setClockStatus] = useState({ isPlaying: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((current) => {
        if (clockStatus.isPlaying) {
          let mins = current.minutes;
          let secs = current.seconds;
          let timer = current.currentTimer;
          if (secs === 0) {
            secs = 59;
            mins = mins - 1;
          } else {
            secs = secs - 1;
          }
          if (mins < 0) {
            if (current.currentTimer === 'session') {
              timer = 'break';
              mins = breakLength;
            } else {
              timer = 'session';
              mins = sessionLenth;
            }
            secs = 0;
          }
          return { minutes: mins, seconds: secs, currentTimer: timer };
        } else {
          return current;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [clockStatus, breakLength, sessionLenth]);

  const resetHandler = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft('25:00');
  };

  const lengthsHandler = (lengthType, operation) => {
    if (lengthType === 'break') {
      setBreakLength((current) => {
        let length = current;
        if (operation === 'increment') {
          if (length < 60) {
            length = length + 1;
          }
        } else if (operation === 'decrement') {
          if (length > 1) {
            length = length - 1;
          }
        }
        if (timeLeft.currentTimer === 'break') {
          setTimeLeft((current) => {
            return { ...current, minutes: length };
          });
        }
        return length;
      });
    } else if (lengthType === 'session') {
      setSessionLength((current) => {
        let length = current;
        if (operation === 'increment') {
          if (length < 60) {
            length = length + 1;
          }
        } else if (operation === 'decrement') {
          if (length > 1) {
            length = length - 1;
          }
        }
        if (timeLeft.currentTimer === 'session') {
          setTimeLeft((current) => {
            return { ...current, minutes: length };
          });
        }
        return length;
      });
    }
  };

  const formatTime = (time) => {
    if (time < 10) {
      return '0' + time;
    }
    return time;
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
          <Col xs={6}>
            <Card>
              <Card.Header>
                <h1 className='text-center'>25 + 5 Clock</h1>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs={6}>
                    <p
                      style={{ margin: '0' }}
                      id='break-label'
                      className='text-center h3'
                    >
                      Break Length
                    </p>
                  </Col>
                  <Col xs={6}>
                    <p
                      style={{ margin: '0' }}
                      id='session-label'
                      className='text-center h3'
                    >
                      Session Length
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    sm={6}
                    className='d-flex flex-row justify-content-center align-items-center'
                    style={{ marginBottom: 0 }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      color='#000'
                      className='arrowBtn'
                      id='break-decrement'
                      size='2x'
                      onClick={() => lengthsHandler('break', 'decrement')}
                    />
                    <p style={{ margin: '0' }} id='break-length' className='h3'>
                      {breakLength}
                    </p>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      color='#000'
                      className='arrowBtn'
                      id='break-increment'
                      size='2x'
                      onClick={() => lengthsHandler('break', 'increment')}
                    />
                  </Col>
                  <Col
                    sm={6}
                    className='d-flex flex-row justify-content-center align-items-center'
                    style={{ marginBottom: 0 }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      color='#000'
                      className='arrowBtn'
                      id='session-decrement'
                      size='2x'
                      onClick={() => lengthsHandler('session', 'decrement')}
                    />
                    <p
                      style={{ margin: '0' }}
                      id='session-length'
                      className='h3'
                    >
                      {sessionLenth}
                    </p>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      color='#000'
                      className='arrowBtn'
                      id='session-increment'
                      size='2x'
                      onClick={() => lengthsHandler('session', 'increment')}
                    />
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs={6} className='timer text-center'>
                    <p id='timer-label' className='h3'>
                      {timeLeft.currentTimer === 'session'
                        ? 'Session'
                        : 'Break'}
                    </p>
                    <p className='h1' id='time-left'>
                      {`${formatTime(timeLeft.minutes)}:${formatTime(
                        timeLeft.seconds
                      )}`}
                    </p>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs={6} className='d-flex justify-content-center my-3'>
                    <FontAwesomeIcon
                      icon={clockStatus.isPlaying ? faPause : faPlay}
                      color='#000'
                      className='arrowBtn'
                      size='2x'
                      id='start_stop'
                      onClick={() =>
                        setClockStatus((current) => {
                          return {
                            isPlaying: !current.isPlaying,
                          };
                        })
                      }
                    />
                    <FontAwesomeIcon
                      icon={faPause}
                      color='#000'
                      className='arrowBtn'
                      size='2x'
                      onClick={() => resetHandler()}
                    />
                    <FontAwesomeIcon
                      icon={faRotateRight}
                      color='#000'
                      className='arrowBtn'
                      size='2x'
                      id='reset'
                      onClick={() => resetHandler()}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Clock;
