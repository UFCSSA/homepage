import React from 'react';

const Discovers = () => {
  const data = {
    headingSix: 'Work faster with powerful filters',
    thumbSix: '/img/discover_thumb_2.png',
  };
  const serviceData = [
    {
      id: 1,
      iconClass: 'fab fa-buffer',
      text: 'Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
    },
    {
      id: 2,
      iconClass: 'fas fa-brush',
      text: 'Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
    },
    {
      id: 3,
      iconClass: 'fas fa-burn',
      text: 'Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
    },
    {
      id: 4,
      iconClass: 'fas fa-cart-arrow-down',
      text: 'Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
    },
  ];
  return (
    <section className='section discover-area bg-gray overflow-hidden ptb_100'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-md-8 col-lg-6 order-2 order-lg-1'>
            {/* Discover Thumb */}
            <div className='service-thumb discover-thumb mx-auto text-center pt-5 pt-lg-0'>
              <img src={data.thumbSix} alt='' />
            </div>
          </div>
          <div className='col-12 col-lg-6 order-1 order-lg-2'>
            {/* Discover Text */}
            <div className='discover-text pt-4 pt-lg-0 px-0 px-lg-4'>
              <h2 className='pb-4'>{data.headingSix}</h2>
              {/* Service List */}
              <ul className='service-list style-two'>
                {/* Single Service */}
                {serviceData.map((item, idx) => {
                  return (
                    <li key={`dfl_${idx}`} className='single-service py-2'>
                      <div className='service-text'>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovers;
