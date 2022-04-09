import React from 'react';

const Team = () => {
  const data = {
    heading: 'Our Officers',
    headingText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
    headingTexttwo:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.',
  };
  const teamData = [
    {
      id: 1,
      image: '/img/avatar-1.png',
      title: 'Shuyan Xia',
      teamPost: 'Founder & President',
    },
    {
      id: 2,
      image: '/img/avatar-2.png',
      title: 'Jiayi Chen',
      teamPost: 'Co-Founder & Vice President',
    },
    {
      id: 3,
      image: '/img/avatar-3.png',
      title: 'Ying Xu',
      teamPost: 'Treasurer',
    },
    {
      id: 4,
      image: '/img/avatar-4.png',
      title: 'Leticia Zheng',
      teamPost: 'Secretary',
    },
    {
      id: 5,
      image: '/img/avatar-4.png',
      title: 'Yiqing An',
      teamPost: 'Event Director',
    },
    {
      id: 6,
      image: '/img/avatar-4.png',
      title: 'Furong Jia',
      teamPost: 'Social Media Director',
    },
    {
      id: 7,
      image: '/img/avatar-4.png',
      title: 'Siyu Chen',
      teamPost: 'Webmaster',
    },
    {
      id: 8,
      image: '/img/avatar-4.png',
      title: 'Haozhe Teng',
      teamPost: 'Cultural Director',
    },
    {
      id: 9,
      image: '/img/avatar-4.png',
      title: 'Yi Jing',
      teamPost: 'Cultural Director',
    },
    {
      id: 10,
      image: '/img/avatar-4.png',
      title: 'Xiongcheng Wang',
      teamPost: 'Cultural Director',
    },
  ];

  const teamIcons = [
    {
      id: 1,
      iconClass: 'fab fa-facebook-f',
    },
    {
      id: 2,
      iconClass: 'fab fa-twitter',
    },
    {
      id: 3,
      iconClass: 'fab fa-google-plus-g',
    },
    {
      id: 4,
      iconClass: 'fab fa-linkedin-in',
    },
  ];
  return (
    <section
      id='officers'
      className='section team-area team-style-two overflow-hidden ptb_100'
    >
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
        <div className='row'>
          {teamData.map((item, idx) => {
            return (
              <div
                key={`t_${idx}`}
                className='col-12 col-sm-6 col-md-4 col-lg-3'
              >
                {/* Single Team */}
                <div className='single-team text-center radius-100 overflow-hidden m-2 m-lg-0'>
                  {/* Team Thumb */}
                  <div className='team-thumb radius-100 d-inline-block position-relative overflow-hidden'>
                    <img src={item.image} alt='' />
                    {/* Team Overlay */}
                    <div className='team-overlay radius-100'>
                      <h4 className='team-name text-white'>{item.title}</h4>
                      <h5 className='team-post text-white mt-2 mb-3'>
                        {item.teamPost}
                      </h5>
                      {/* Team Icons */}
                      <div className='team-icons'>
                        {teamIcons.map((item, idx) => {
                          return (
                            <a key={`ti_${idx}`} className='p-2' href='/#'>
                              <i className={item.iconClass} />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
