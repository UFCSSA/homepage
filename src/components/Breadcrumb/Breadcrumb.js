import React from 'react';

const BreadCrumb = (props) => {
  return (
    <section className='section breadcrumb-area bg-overlay d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {/* Breamcrumb Content */}
            <div className='breadcrumb-content d-flex flex-column align-items-center text-center'>
              <h3 className='text-white'>{props.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
