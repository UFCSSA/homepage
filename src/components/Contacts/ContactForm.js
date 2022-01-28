import React, { useState } from 'react';

const ContactForm = () => {
  const myForm = React.createRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    myForm.current.reset();
    setName('');
    setEmail('');
    setSubject('');
    setMsg('');
  };

  return (
    <div className='contact-box text-center'>
      <form
        ref={myForm}
        onSubmit={submitHandler}
        className='contact-form'
        noValidate='novalidate'
      >
        <div className='row'>
          <div className='col-12'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Name'
                required='required'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email'
                required='required'
                onChange={(e) => setName(e.target.value)}
                value={email}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='subject'
                placeholder='Subject'
                required='required'
                onChange={(e) => setName(e.target.value)}
                value={subject}
              />
            </div>
          </div>
          <div className='col-12'>
            <div className='form-group'>
              <textarea
                className='form-control'
                name='message'
                placeholder='Message'
                required='required'
                onChange={(e) => setName(e.target.value)}
                value={msg}
              />
            </div>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-lg btn-block mt-3'>
              <span className='text-white pr-3'>
                <i className='fas fa-paper-plane' />
              </span>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
