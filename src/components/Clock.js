import React from 'react';
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
                  <Col
                    sm={6}
                    className='d-flex flex-row justify-content-center align-items-center'
                    style={{ marginBottom: 0 }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      color='#000'
                      className='arrowBtn'
                      //onClick={() => setEditorMax(!editorMax)}
                    />
                    <p style={{ margin: '0' }}>Break Length</p>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      color='#000'
                      className='arrowBtn'
                      //onClick={() => setEditorMax(!editorMax)}
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
                      //onClick={() => setEditorMax(!editorMax)}
                    />
                    <p style={{ margin: '0' }}>Session Length</p>
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      color='#000'
                      className='arrowBtn'
                      //onClick={() => setEditorMax(!editorMax)}
                    />
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xs={6} className='timer text-center'>
                    <h2>Session</h2>
                    <p className='label'>25:00</p>
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
