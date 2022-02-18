import React, { useEffect, useState } from 'react';
import { firestore } from '../lib/firebase';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const LIMIT = 6;

const ArticleContainer = () => {
  return (
    <div className='blog'>
      <div id='scrollUp' title='Scroll To Top'>
        <i className='fas fa-arrow-up' />
      </div>
      <div className='main'>
        <Header imageData={'/image/cssa_logo_long1.png'} />
        <Breadcrumb title='Articles' />
        <section id='blog' className='section blog-area ptb_100'>
          <div className='container'>
            <Articles />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articlesEnd, setArticlesEnd] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      const articleQuery = firestore
        .collection('Articles')
        .orderBy('createdAt', 'desc')
        .limit(LIMIT);
      const res = await articleQuery.get();
      setArticles(res.docs.map((doc) => doc.data()));
    };
    getArticles();
  }, []);

  const getMoreArticles = async () => {
    setLoading(true);
    const last = articles[articles.length - 1];

    const articleQuery = firestore
      .collection('Articles')
      .orderBy('createdAt', 'desc')
      .startAfter(last.createdAt)
      .limit(LIMIT);

    const newArticle = (await articleQuery.get()).docs.map((doc) => doc.data());
    setArticles(articles.concat(newArticle));
    setLoading(false);

    if (newArticle.length < LIMIT) setArticlesEnd(true);
  };

  return (
    <div>
      <div className='row'>
        {articles.map((item, idx) => {
          return (
            <div key={`bth_${idx}`} className='col-12 col-md-6 col-lg-4'>
              <div className='single-blog res-margin'>
                <div className='blog-thumb'>
                  <a href={item.url} target='_blank' rel='noreferrer'>
                    <img src={item.thumbnail} alt='Article thumbnail' />
                  </a>
                </div>
                <div className='blog-content p-4'>
                  <ul className='meta-info d-flex justify-content-between'>
                    <li>
                      By{' '}
                      <h6
                        className='text-primary'
                        style={{ display: 'inline' }}
                      >
                        UFCSSA
                      </h6>
                    </li>
                    <li>
                      <h6>{item.createdAt}</h6>
                    </li>
                  </ul>
                  <h3 className='blog-title my-3'>
                    <a href={item.url} target='_blank' rel='noreferrer'>
                      {item.name}
                    </a>
                  </h3>
                  <p>{item.summary}</p>
                  <a
                    href={item.url}
                    target='_blank'
                    rel='noreferrer'
                    className='blog-btn mt-3'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {!loading && !articlesEnd && (
        <button onClick={getMoreArticles}>Load more</button>
      )}
      {loading ? <div className='loader'></div> : null}

      {articlesEnd && 'You have reached the end!'}
    </div>
  );
};

export default ArticleContainer;
