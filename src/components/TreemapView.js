import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import BreadCrumbComponent from './BreadCrumbComponent';
import TreemapDiagram from './TreemapDiagram';

const TreemapView = () => {
  const kickStarterUrl =
    'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json';

  const videoGamesUrl =
    'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json';

  const moviesUrl =
    'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json';

  return (
    <main
      style={{
        backgroundColor: '#000',
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
          <Col xs={12}>
            <BreadCrumbComponent
              pageTitle={'Visualize Data with a Treemap Diagram'}
            />
            <h1 id='title' className='text-center text-white'>
              Visualize Data with a Treemap Diagram
            </h1>
          </Col>
          <Tabs
            defaultActiveKey='videgame'
            id='treemap-tab'
            className='m-3'
            fill
            variant='dark'
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Tab eventKey='videgame' title='Video Game Data Set'>
              <TreemapDiagram
                dataUrl={videoGamesUrl}
                description='Top 100 Most Pledged Kickstarter Campaigns Grouped By Category'
                title='Video Game Sales'
              />
            </Tab>
            <Tab eventKey='movies' title='Movies Data Set'>
              <TreemapDiagram
                dataUrl={moviesUrl}
                description='Top 100 Highest Grossing Movies Grouped By Genre'
                title='Movie Sales'
              />
            </Tab>
            <Tab eventKey='kickstarter' title='Kickstarter Data Set'>
              <TreemapDiagram
                dataUrl={kickStarterUrl}
                description='Top 100 Most Pledged Kickstarter Campaigns Grouped By Category'
                title='Kickstarter Pledges'
              />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </main>
  );
};

export default TreemapView;
