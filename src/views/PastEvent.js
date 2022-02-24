import React from 'react';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import Article from '../components/Articles/Article';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { article_type } from '../lib/article_type';

const PastEvent = () => {
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
            <Article category={article_type.past_event} />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default PastEvent;
