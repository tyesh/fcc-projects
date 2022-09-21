import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import bgImage from '../resources/quotebg.jpg';

const QuotesPage = () => {
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
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className='blockquote-footer'>
                    Someone famous in{' '}
                    <cite title='Source Title'>Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default QuotesPage;
