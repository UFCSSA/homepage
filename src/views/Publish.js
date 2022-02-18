import React, { useState } from 'react';
import { firestore, auth, serverTimestamp } from '../lib/firebase';
import Header from '../components/Headers/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

import toast, { Toaster } from 'react-hot-toast';

const Publish = () => {
  const myForm = React.createRef();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await firestore.collection('Articles').add({
      name,
      url,
      thumbnail,
      summary,
      createdAt: date,
    });
    console.log(res);
    myForm.current.reset();
    setName('');
    setUrl('');
    setThumbnail('');
    setSummary('');
    setDate('');
    toast.success('Article published!');
  };
  return (
    <div className='main'>
      <Header imageData={'/image/cssa_logo_long1.png'} />
      <Breadcrumb title='Publish Article' />
      <div className='contact-box' style={{ padding: '2vh 20vh' }}>
        <form ref={myForm} onSubmit={submitHandler} className='contact-form'>
          <div className='row'>
            <div className='col-12'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  placeholder='Article Name'
                  required='required'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='url'
                  placeholder='Url'
                  required='required'
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='thumbnail url'
                  placeholder='Thumbnail url'
                  required='required'
                  onChange={(e) => setThumbnail(e.target.value)}
                  value={thumbnail}
                />
              </div>

              <div className='form-group'>
                <textarea
                  className='form-control'
                  name='summary'
                  placeholder='Summary'
                  required='required'
                  onChange={(e) => setSummary(e.target.value)}
                  value={summary}
                />
              </div>
              <div className='form-group'>
                <label>Publish date: </label>
                <input
                  type='date'
                  name='date'
                  required='required'
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
              </div>
            </div>
            <div className='col-12'>
              <button type='submit' className='btn btn-lg btn-block mt-3'>
                <span className='text-white pr-3'>
                  <i className='fas fa-paper-plane' />
                </span>
                Publish Article
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Publish;