import React, { useState } from 'react';

const ScreenShots = () => {
  const [data, setData] = useState({
    iconClass: 'far fa-lightbulb text-primary mr-1',
    preHeading: 'Awesome',
    preHeadingspan: 'Interface',
    heading: 'Simple & Beautiful Interface',
    headingText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    headingTexttwo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.',
  });
  const [imgData, setImgData] = useState([
    {
      image: '/img/screenshot_1.jpg',
    },
    {
      image: '/img/screenshot_2.jpg',
    },
    {
      image: '/img/screenshot_3.jpg',
    },
    {
      image: '/img/screenshot_4.jpg',
    },
    {
      image: '/img/screenshot_5.jpg',
    },
  ]);

  return (
    <section id='screenshots' className='section screenshots-area ptb_100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-7'>
            {/* Section Heading */}
            <div className='section-heading text-center'>
              <span className='d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3'>
                <i className={data.iconClass} />
                <span className='text-primary'>{data.preHeading}</span>{' '}
                {data.preHeadingspan}
              </span>
              <h2 className='text-capitalize'>{data.heading}</h2>
              <p className='d-none d-sm-block mt-4'>{data.headingText}</p>
              <p className='d-block d-sm-none mt-4'>{data.headingTexttwo}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            {/* App Screenshot Slider Area */}
            <div className='app-screenshots'>
              {/* Single Screenshot Item */}
              {imgData.map((item, idx) => {
                return (
                  <div key={`so_${idx}`} className='single-screenshot'>
                    <img src={item.image} alt='' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenShots;
