import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const data = {
    heading: 'Stay Tuned',
    headingText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    headingTexttwo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  };
  const iconList = [
    {
      id: 1,
      iconClass: 'fas fa-home',
      text: 'Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002',
    },
    {
      id: 2,
      iconClass: 'fas fa-phone-alt',
      text: '+1 230 456 789-012 345 6789',
    },
    {
      id: 3,
      iconClass: 'fas fa-envelope',
      text: 'exampledomain@domain.com',
    },
  ];
  return (
    <section id='contact' className='contact-area bg-gray ptb_100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-6'>
            {/* Section Heading */}
            <div className='section-heading text-center'>
              <h2 className='text-capitalize'>{data.heading}</h2>
              <p className='d-none d-sm-block mt-4'>{data.headingText}</p>
              <p className='d-block d-sm-none mt-4'>{data.headingTexttwo}</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-between'>
          <div className='col-12 col-md-5'>
            {/* Contact Us */}
            <div className='contact-us'>
              <p className='mb-3'>{data.content}</p>
              <ul>
                {iconList.map((item, idx) => {
                  return (
                    <li key={`ci_${idx}`} className='py-2'>
                      <a className='media' href='/#'>
                        <div className='social-icon mr-3'>
                          <i className={item.iconClass} />
                        </div>
                        <span className='media-body align-self-center'>
                          {item.text}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6 pt-4 pt-md-0'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;