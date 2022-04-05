import React, { useState } from 'react';
import { firestore, storageRef } from '../../lib/firebase';
import toast, { Toaster } from 'react-hot-toast';
import kebabCase from 'lodash.kebabcase';

const EventPublishForm = () => {
  const myForm = React.createRef();
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');

  const slug = encodeURI(kebabCase(`${date}-${name}`));

  const submitHandler = async (e) => {
    e.preventDefault();
    const publish = firestore.collection('Past-Events').add({
      name,
      slug,
      thumbnail,
      summary,
      date,
    });
    const createFolder = storageRef
      .child(`Past-Events/${slug}/delete.txt`)
      .putString('Delete this file');
    await Promise.all([publish, createFolder]);

    myForm.current.reset();
    setName('');
    setThumbnail('');
    setSummary('');
    setDate('');
    toast.success(
      'Event published! Please log in to firebase to upload event photo!'
    );
  };

  return (
    <div className='contact-box' style={{ padding: '2vh 20vh' }}>
      <form ref={myForm} onSubmit={submitHandler} className='contact-form'>
        <div className='row'>
          <div className='col-12'>
            <div className='form-group'>
              <strong>Event folder name: </strong> {slug}
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Event Name'
                required='required'
                onChange={(e) => setName(e.target.value)}
                value={name}
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
              <label>Event date: </label>
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
              Publish Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventPublishForm;
