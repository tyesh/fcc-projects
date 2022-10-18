import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadCrumbComponent = ({ pageTitle }) => {
  return (
    <Breadcrumb className='d-flex flex-row justify-content-center mt-4'>
      <Breadcrumb.Item href='/' className='bc-item-inactive'>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item style={{ color: '#fff' }} active>
        {pageTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
