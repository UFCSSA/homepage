import React, { useEffect, useState } from 'react';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import { firestore } from '../lib/firebase';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

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
      const query = firestore.collection('Past-Events').orderBy('date', 'desc');
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
                <Link to={item.slug} target='_blank'>
                  <img src={item.thumbnail} alt='Article thumbnail' />
                </Link>
              </div>
              <div className='blog-content p-4'>
                <ul className='meta-info d-flex justify-content-between'>
                  <li>
                    <h6>{item.date}</h6>
                  </li>
                </ul>
                <h3 className='blog-title my-3'>
                  <Link to={item.slug} target='_blank'>
                    {item.name}
                  </Link>
                </h3>
                <p>{item.summary}</p>
                <Link to={item.slug} target='_blank' className='blog-btn mt-3'>
                  See More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PastEventList;
