import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bgImage from '../resources/quotebg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { getRandomQuote, getRandomTechnology } from '../utils/helpers';

const QuotesPage = () => {
  const [technology, setTechnology] = useState();
  const [quote, setQuote] = useState();

  const getTechnology = () => {
    setTechnology(getRandomTechnology());
  };

  useEffect(() => {
    setTechnology(getRandomTechnology());
  }, []);

  useEffect(() => {
    if (technology) {
      setQuote(getRandomQuote(technology));
    }
  }, [technology]);

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
            {technology && quote && (
              <Card id='quote-box'>
                <Card.Header>
                  <h2>{technology.name}</h2>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={12} md={3}>
                      <Image src={technology.image} alt='pottery' fluid />
                    </Col>
                    <Col>
                      <blockquote className='blockquote mb-0' id='text'>
                        <p>{quote.quote}</p>
                        <footer className='blockquote-footer' id='author'>
                          {quote.author}
                        </footer>
                      </blockquote>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} className='py-3'>
                      <a
                        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
                          quote.quote + ' ' + quote.author
                        )}`}
                        target='_blank'
                        rel='noreferrer'
                        className='mx-1'
                        style={{ backgroundColor: '#00acee', padding: 10 }}
                        id='tweet-quote'
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          color='#fff'
                          size='lg'
                        />
                      </a>
                      <a
                        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
                          quote.author
                        )}&content=${encodeURIComponent(
                          quote.quote
                        )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                        target='_blank'
                        rel='noreferrer'
                        className='mx-1'
                        style={{
                          backgroundColor: '#34526f',
                          padding: '10px 14px',
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTumblr}
                          color='#fff'
                          size='lg'
                        />
                      </a>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-end py-2'>
                      <Button
                        variant='dark'
                        onClick={getTechnology}
                        id='new-quote'
                      >
                        New quote
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default QuotesPage;
