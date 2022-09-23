import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';
import bgImage from '../resources/bg/markdownbg.jpg';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  marked.setOptions({
    breaks: true,
  });

  const renderer = new marked.Renderer();

  return (
    <main
      style={{
        background: `url(${bgImage}) 50%/cover no-repeat`,
        minHeight: '100vh',
      }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <div className='editorWrap'>
              <div className='toolbar'>
                <FontAwesomeIcon
                  icon={faFreeCodeCamp}
                  color='#000'
                  className='mx-1'
                />
                Editor
                <FontAwesomeIcon icon={faMaximize} color='#000' />
              </div>
              <textarea
                id='editor'
                onChange={(event) => setMarkdown(event.target.value)}
                type='text'
                value={markdown}
              />
            </div>
            <div className='previewWrap' xs={12}>
              <div className='toolbar'>
                <FontAwesomeIcon
                  icon={faFreeCodeCamp}
                  color='#000'
                  className='mx-1'
                />
                Previewer
                <FontAwesomeIcon icon={faMaximize} color='#000' />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(markdown, { renderer: renderer }),
                }}
                id='preview'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default MarkdownPreviewer;
