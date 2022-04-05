import React, { useState } from 'react';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import Article from '../components/Articles/Article';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { article_type_arr } from '../lib/article_type';

const Articles = () => {
  const [category, setCategory] = useState('All');
  return (
    <div className='blog'>
      <div id='scrollUp' title='Scroll To Top'>
        <i className='fas fa-arrow-up' />
      </div>
      <div className='main'>
        <Header imageData={'/image/cssa_logo_long1.png'} />
        <Breadcrumb title='Articles' />
        <section id='blog' className='section blog-area ptb_50'>
          <ul
            className='nav nav-pills mb-3 justify-content-center'
            id='pills-tab'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className='nav-link active'
                id='all'
                data-toggle='pill'
                href='#'
                role='tab'
                aria-selected='true'
                onClick={() => setCategory('All')}
              >
                All
              </a>
            </li>
            {article_type_arr.map((value, i) => (
              <li className='nav-item' key={i}>
                <a
                  className='nav-link'
                  id={value}
                  data-toggle='pill'
                  href='#'
                  role='tab'
                  aria-selected='true'
                  onClick={() => setCategory(value)}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>

          <div className='container ptb_50'>
            <Article category={category} />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Articles;
