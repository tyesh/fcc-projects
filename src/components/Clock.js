import React, { useState } from 'react';
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
  const [breackLength, setBreakLength] = useState(5);
  const [sessionLenth, setSessionLength] = useState(25);

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
                      onClick={() =>
                        setBreakLength((current) => {
                          if (current > 0) {
                            return current - 1;
                          }
                          return 0;
                        })
                      }
                    />
                    <p style={{ margin: '0' }} id='break-length' className='h3'>
                      {breackLength}
                    </p>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      color='#000'
                      className='arrowBtn'
                      id='break-increment'
                      onClick={() =>
                        setBreakLength((current) => {
                          if (current < 60) {
                            return current + 1;
                          }
                          return current;
                        })
                      }
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
                      onClick={() =>
                        setSessionLength((current) => {
                          if (current > 0) {
                            return current - 1;
                          }
                          return 0;
                        })
                      }
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
                      onClick={() =>
                        setSessionLength((current) => {
                          if (current < 60) {
                            return current + 1;
                          }
                          return current;
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs={6} className='timer text-center'>
                    <h2 id='timer-label'>Session</h2>
                    <p className='h3' id='time-left'>
                      25:00
                    </p>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs={6} className='d-flex justify-content-center my-3'>
                    <FontAwesomeIcon
                      icon={faPlay}
                      color='#000'
                      className='arrowBtn'
                      size='2x'
                      //onClick={() => setEditorMax(!editorMax)}
                    />
                    <FontAwesomeIcon
                      icon={faPause}
                      color='#000'
                      className='arrowBtn'
                      size='2x'
                      //onClick={() => setEditorMax(!editorMax)}
                    />
                    <FontAwesomeIcon
                      icon={faRotateRight}
                      color='#000'
                      className='arrowBtn'
                      size='2x'
                      //onClick={() => setEditorMax(!editorMax)}
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
