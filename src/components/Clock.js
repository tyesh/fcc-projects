import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
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
          <Col sm={12} md={6} className='clock-layout'>
            <h1
              className='text-center p-3'
              style={{ color: '#fff', lineHeight: '40px', fontSize: '42px' }}
            >
              25 + 5 Clock
            </h1>
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
                <p style={{ margin: '0 10px' }}>Break Length</p>
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
                <p style={{ margin: '0 10px' }}>Session Length</p>
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
                Session
                <p className='label'>25:00</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Clock;
