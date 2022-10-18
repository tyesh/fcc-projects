import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <main className='home-body'>
      <Container>
        <Row>
          <Col xs={12}>
            <h1 style={{ margin: '30px 0' }}>
              Carlos Velazquez - freeCodeCamp projects
              <FontAwesomeIcon
                icon={faFreeCodeCamp}
                color='#fff'
                className='mx-1'
              />
            </h1>
          </Col>
          <Col xs={12}>
            <h2>Hi there, nice to meet you</h2>
            <p>
              I'm Carlos Velazquez, a developer from Paraguay. Here I put a list
              of some of my projects developed for freeCodeCamp courses. &nbsp;
              <a href='https://www.freecodecamp.org/'>freeCodecamp</a> it's a
              awesome collections of free courses, totally recommeded for people
              new in software engineer or for people who want to test their
              kwnolege.
            </p>
            <p>
              To know more about my work, you can visit my personal page&nbsp;
              <a href='https://www.carlosportafolio.com'>here</a>&nbsp;and my
              github repository for all my fcc projects are&nbsp;
              <a href='https://github.com/tyesh/fcc-projects'>here </a>
            </p>
            <h2>Courses</h2>
            <h3>Front End Development Libraries</h3>
            <ul>
              <li>
                <a href='/quotes'>Build a Random Quote Machine</a>
              </li>
              <li>
                <a href='/markdown'>Build a Markdown Previewer</a>
              </li>
              <li>
                <a href='/drummachine'>Build a Drum Machine</a>
              </li>
              <li>
                <a href='/calculator'>Build a JavaScript Calculator</a>
              </li>
              <li>
                <a href='/clock'>Build a 25 + 5 Clock</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
