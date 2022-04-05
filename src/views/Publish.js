import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../lib/firebase';
import Header from '../components/Headers/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import ArticlePublishForm from '../components/Forms/ArticlePublishForm';
import EventPublishForm from '../components/Forms/EventPublishForm';

const Publish = () => {
  const [user, setUser] = useState({});
  const [category, setCategory] = useState('');

  return (
    <div className='main'>
      <Header imageData={'/image/cssa_logo_long1.png'} />
      <Breadcrumb title='Publish' />
      {!user.email ? (
        <SignInButton setUser={setUser} />
      ) : (
        <ul
          className='nav nav-pills mb-3 justify-content-center my-3'
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
              onClick={() => setCategory('Article')}
            >
              Article
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              id='all'
              data-toggle='pill'
              href='#'
              role='tab'
              aria-selected='true'
              onClick={() => setCategory('Past Event')}
            >
              Past Event
            </a>
          </li>
        </ul>
      )}
      {category === 'Article' ? (
        <ArticlePublishForm />
      ) : category === 'Past Event' ? (
        <EventPublishForm />
      ) : null}
      <Toaster />
    </div>
  );
};

const SignInButton = ({ setUser }) => {
  let navigate = useNavigate();
  const signInWithGoogle = async () => {
    const res = await auth.signInWithPopup(googleAuthProvider);
    if (res.user && res.user.email !== 'uflcssa@gmail.com') {
      toast.error('You are not authorize to do that!');
      auth.signOut();
      navigate('/');
    } else {
      setUser(res.user);
    }
  };

  return (
    <button onClick={signInWithGoogle}>
      <img
        src={
          'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
        }
        width='30px'
        alt=''
      />
      Sign in with Google
    </button>
  );
};

export default Publish;
