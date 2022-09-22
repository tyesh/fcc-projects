import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bgImage from '../resources/quotebg.jpg';
import potteryImage from '../resources/pottery.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

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
          <Col xs={12} md={6}>
            <h1
              className='text-center p-3'
              style={{ color: '#fff', lineHeight: '40px', fontSize: '42px' }}
            >
              Civilization VI Random Quotes
            </h1>
            <p
              style={{ color: '#fff', fontSize: '16px', lineHeight: '18px' }}
              className='p-2'
            >
              A project for Freecodecamp powerd by React. For this demo, quotes
              from the Civilization VI technology tree are used. As a fan of the
              game, is a joy to hear the quote of every new technology
              discovered!
            </p>
            <Card>
              <Card.Header>
                <h2>Pottery</h2>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs={12} md={3}>
                    <Image src={potteryImage} alt='pottery' fluid />
                  </Col>
                  <Col>
                    <blockquote className='blockquote mb-0'>
                      <p>
                        "No man ever wetted clay and then left it, as if there
                        would be bricks by chance and fortune."
                      </p>
                      <footer className='blockquote-footer'>Plutarch</footer>
                    </blockquote>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} className='py-3'>
                    <a
                      href='https://twitter.com/'
                      target='_blank'
                      rel='noreferrer'
                      className='mx-1'
                      style={{ backgroundColor: '#00acee', padding: 10 }}
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        color='#fff'
                        size='lg'
                      />
                    </a>
                    <a
                      href='https://twitter.com/'
                      target='_blank'
                      rel='noreferrer'
                      className='mx-1'
                      style={{
                        backgroundColor: '#34526f',
                        padding: '10px 14px',
                      }}
                    >
                      <FontAwesomeIcon icon={faTumblr} color='#fff' size='lg' />
                    </a>
                  </Col>
                  <Col xs={6} className='d-flex justify-content-end py-2'>
                    <Button variant='dark'>New quote</Button>
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

export default QuotesPage;
