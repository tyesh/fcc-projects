import React from 'react';
import { Image } from 'react-bootstrap';
import loader1gif from '../resources/loaders/Preloader_1.gif';

const Loader = () => {
  return (
    <Image
      src={loader1gif}
      style={{
        width: '128px',
        height: '128px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Loader;
