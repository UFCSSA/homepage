import React from 'react';

const Mission = () => {
  const data = {
    headingFive: 'Organize all your media content easily',
    buttonText: 'Learn More',
    thumbFive: '/img/service_thumb_1.png',
  };
  const serviceData = [
    {
      id: 1,
      iconClass: 'fab fa-buffer',
      text: 'To help Chinese students and scholars integrate into the University of Florida and Gainesville community and find their place there.',
    },
    {
      id: 2,
      iconClass: 'fas fa-brush',
      text: 'To promote Chinese culture to University of Florida students, and to raise the awareness of American culture to Chinese students and scholars.',
    },
    {
      id: 3,
      iconClass: 'fas fa-burn',
      text: 'To provide more networking opportunities for Chinese students and scholars, build relationships and expand their skills outside of the classroom. ',
    },
  ];
  return (
    <section className='section service-area overflow-hidden ptb_100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-6 order-2 order-lg-1'>
            {/* Service Text */}
            <div className='service-text pt-5 pt-lg-0 px-0 px-lg-4'>
              <h2 className='text-capitalize mb-4'>Mission and goals: </h2>
              {/* Service List */}
              <ul className='service-list style-two'>
                {/* Single Service */}
                {serviceData.map((item, idx) => {
                  return (
                    <li key={`sf_${idx}`} className='single-service py-2'>
                      <div className='service-text'>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <a href='/#' className='btn sApp-btn mt-4'>
                {data.buttonText}
              </a>
            </div>
          </div>
          <div className='col-12 col-md-8 col-lg-6 order-1 order-lg-2'>
            {/* Service Thumb */}
            <div className='service-thumb mx-auto'>
              <img src={data.thumbFive} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
