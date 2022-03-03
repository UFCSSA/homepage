import React from 'react';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Calendar from '@ericz1803/react-google-calendar';
import { css } from '@emotion/react';

const MyCalendar = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API;
  let calendars = [
    {
      calendarId: 'uflcssa@gmail.com',
      color: '#B241D1',
    },
  ];

  let styles = {
    //you can use object styles
    calendar: {
      borderWidth: '3px', //make outer edge of calendar thicker
    },
    tooltip: css`
      h2 {
        font-size: 2vh;
      }
    `,
    event: css`
      .css-1iqcmpy-Event {
        position: absolute;
        top: 1px;
        left: 2px;
        color: #b241d1;
        height: 15px;
        width: 15px;
      }
    `,
    //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
    today: css`
      color: red;
      border: 1px solid red;
    `,
  };

  return (
    <div className='blog'>
      <div id='scrollUp' title='Scroll To Top'>
        <i className='fas fa-arrow-up' />
      </div>
      <div className='main'>
        <Header imageData={'/image/cssa_logo_long1.png'} />
        <Breadcrumb title='Calendar' />
        <div className='container'>
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyCalendar;
