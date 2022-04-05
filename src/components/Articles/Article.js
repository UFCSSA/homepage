import React, { useEffect, useState } from 'react';
import { firestore } from '../../lib/firebase';
import { article_type_arr } from '../../lib/article_type';
const LIMIT = 6;

const Article = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articlesEnd, setArticlesEnd] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      const articleQuery =
        category !== 'All'
          ? firestore
              .collection('Articles')
              .where('category', '==', category)
              .orderBy('createdAt', 'desc')
              .limit(LIMIT)
          : firestore
              .collection('Articles')
              .where('category', 'in', article_type_arr)
              .orderBy('createdAt', 'desc')
              .limit(LIMIT);
      const res = await articleQuery.get();
      setArticles(res.docs.map((doc) => doc.data()));
    };
    getArticles();
  }, [category]);

  const getMoreArticles = async () => {
    setLoading(true);
    const last = articles[articles.length - 1];

    const articleQuery =
      category !== 'All'
        ? firestore
            .collection('Articles')
            .where('category', '==', category)
            .orderBy('createdAt', 'desc')
            .startAfter(last.createdAt)
            .limit(LIMIT)
        : firestore
            .collection('Articles')
            .where('category', 'in', article_type_arr)
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
        <button onClick={getMoreArticles} className='btn mt-3'>
          Load more
        </button>
      )}
      {loading ? <div className='loader'></div> : null}

      {articlesEnd && 'You have reached the end!'}
    </div>
  );
};

export default Article;
