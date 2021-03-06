import React from 'react';

const Subscribe = () => {
  const initData = {
    heading: 'Subscribe to get updates',
    text: 'By subscribing you will get newsleter, promotions adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.',
    submitText: 'Subscribe',
  };

  return (
    <section className='section subscribe-area ptb_100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-7'>
            <div className='subscribe-content text-center'>
              <h2>{initData.heading}</h2>
              <p className='my-4'>{initData.text}</p>
              {/* Subscribe Form */}
              <form className='subscribe-form'>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter your email'
                  />
                </div>
                <button type='submit' className='btn btn-lg btn-block'>
                  {initData.submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
