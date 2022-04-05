import React, { useEffect, useState } from 'react';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import { firestore } from '../lib/firebase';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const PastEventList = () => {
  return (
    <div className='blog'>
      <div id='scrollUp' title='Scroll To Top'>
        <i className='fas fa-arrow-up' />
      </div>
      <div className='main'>
        <Header imageData={'/image/cssa_logo_long1.png'} />
        <Breadcrumb title='Past Events' />
        <section id='blog' className='section blog-area ptb_100'>
          <div className='container'>
            <EventList />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

const EventList = () => {
  const [events, setEvenets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = firestore.collection('Past-Events');

      const res = await query.get();
      setEvenets(res.docs.map((doc) => doc.data()));
    };
    getData();
  }, []);

  return (
    <div className='row'>
      {events.map((item, idx) => {
        return (
          <div key={`bth_${idx}`} className='col-12 col-md-6 col-lg-4'>
            <div className='single-blog res-margin'>
              <div className='blog-thumb'>
                <a
                  href={`http://localhost:3000/past-events/${item.date}-${item.name}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={item.thumbnail} alt='Article thumbnail' />
                </a>
              </div>
              <div className='blog-content p-4'>
                <ul className='meta-info d-flex justify-content-between'>
                  <li>
                    <h6>{item.createdAt}</h6>
                  </li>
                </ul>
                <h3 className='blog-title my-3'>
                  <a
                    href={`http://localhost:3000/past-events/${item.name}${item.date}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {item.name}
                  </a>
                </h3>
                <p>{item.summary}</p>
                <a
                  href={`http://localhost:3000/past-events/${item.name}${item.date}`}
                  target='_blank'
                  rel='noreferrer'
                  className='blog-btn mt-3'
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PastEventList;
