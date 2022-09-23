import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../resources/bg/markdownbg.jpg';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState();
  return (
    <main
      style={{
        background: `url(${bgImage}) 50%/cover no-repeat`,
        minHeight: '100vh',
      }}
    >
      <Container>
        <Row>
          <Col className='editorWrap' xs={12}>
            <div className='toolbar'>
              <FontAwesomeIcon
                icon={faFreeCodeCamp}
                color='#000'
                className='mx-1'
              />
              Editor
              <FontAwesomeIcon
                icon={faMaximize}
                color='#000'
                className='mx-1'
              />
            </div>
            <textarea
              id='editor'
              onChange={(event) => setMarkdown(event.target.value)}
              type='text'
              value={markdown}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MarkdownPreviewer;
