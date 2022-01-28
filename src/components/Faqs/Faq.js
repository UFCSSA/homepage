import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://my-json-server.typicode.com/themeland/json-server/themeOneFaqSection';

const Faq = () => {
  const [data, setData] = useState({});
  const [faqDataThree, setFaqDataThree] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(BASE_URL);
      if (res.data) {
        setData(res.data);
        setFaqDataThree(res.data.faqDataThree);
      } else {
        console.error('can not fetch data!');
      }
    };
    fetchData();
  }, []);
  return (
    <section className='section faq-area ptb_100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-7'>
            {/* Section Heading */}
            <div className='section-heading text-center'>
              <h2 className='text-capitalize'>{data.headingTwo}</h2>
              <p className='d-none d-sm-block mt-4'>{data.headingText}</p>
              <p className='d-block d-sm-none mt-4'>{data.headingTexttwo}</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12'>
            {/* FAQ Content */}
            <div className='faq-content'>
              {/* sApp Accordion */}
              <div className='accordion' id='sApp-accordion'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-md-10 col-lg-8'>
                    {/* Single Accordion Item */}
                    {faqDataThree.map((item, idx) => {
                      return (
                        <div
                          key={`ft_${idx}`}
                          className='card border-top-0 border-left-0 border-right-0 border-bottom'
                        >
                          {/* Card Header */}
                          <div className='card-header bg-inherit border-0 p-0'>
                            <h2 className='mb-0'>
                              <button
                                className='btn px-0 py-3'
                                type='button'
                                data-toggle='collapse'
                                data-target='#collapseOne'
                              >
                                {item.title}
                              </button>
                            </h2>
                          </div>
                          <div
                            id='collapseOne'
                            className='collapse'
                            data-parent='#sApp-accordion'
                          >
                            {/* Card Body */}
                            <div className='card-body px-0 py-3'>
                              {item.content}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
