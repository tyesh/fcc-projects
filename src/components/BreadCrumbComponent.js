import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const BreadCrumbComponent = ({ pageTitle, activeColor }) => {
  return (
    <Breadcrumb className='d-flex flex-row justify-content-center mt-4'>
      <Breadcrumb.Item href='/' className='bc-item-inactive'>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item style={{ color: activeColor }} active>
        {pageTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

BreadCrumbComponent.defaultProps = {
  pageTitle: 'pageTitile',
  activeColor: '#fff',
};

export default BreadCrumbComponent;
