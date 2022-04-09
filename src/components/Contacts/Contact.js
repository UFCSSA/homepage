import React from 'react';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const data = {
    heading: 'Follow Us',
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
      link: 'instagram',
      iconClass: 'fab fa-instagram',
      text: 'Instagram: ufcssa',
      style: { backgroundColor: '#e1306c' },
    },
    {
      id: 2,
      link: 'facebook',
      iconClass: 'fab fa-facebook-f',
      text: 'Facebook: UF Cssa',
      style: { backgroundColor: '#3b5999' },
    },
    {
      id: 3,
      link: 'tiktok',
      iconClass: 'fa-brands fa-tiktok',
      text: 'Tiktok: UFCSSA',
      style: { backgroundColor: '#25F4EE' },
    },
    {
      id: 9,
      link: 'tiktok',
      iconClass: 'fa-brands fa-tiktok',
      text: '抖音: UFCSSA',
      style: { backgroundColor: '#25F4EE' },
    },
    {
      id: 4,
      link: 'wechat',
      iconClass: 'fa-brands fa-weixin',
      text: '微信公众号: UFCSSA',
      style: { backgroundColor: '#7BB32E' },
    },
    {
      id: 5,
      link: 'Little Red Book',
      iconClass: 'fa-solid fa-book',
      text: '小红书: 佛罗里达大学UFCSSA',
      style: { backgroundColor: '#ff2742' },
    },
    {
      id: 6,
      link: 'weibo',
      iconClass: 'fa-brands fa-weibo',
      text: '微博: 佛罗里达大学UFCSSA',
      style: { backgroundColor: '#DF2029' },
    },
    {
      id: 7,
      link: 'zhihu',
      iconClass: 'fa-brands fa-zhihu',
      text: '知乎: 佛罗里达大学学联UFCSSA',
      style: { backgroundColor: '#0e88eb' },
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
            </div>
          </div>
        </div>
        <div className='row justify-content-between'>
          <div className='col-12 col-md-5'>
            {/* Contact Us */}
            <div className='contact-us'>
              <ul>
                {iconList.map((item, idx) => {
                  return (
                    <li key={`ci_${idx}`} className='py-2'>
                      <a className='media' href='/#'>
                        <div className='social-icon mr-3' style={item.style}>
                          <FontAwesomeIcon icon={item.iconClass} />
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
