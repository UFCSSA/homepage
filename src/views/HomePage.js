import React from 'react';
import Header from '../components/Headers/Header';
import Hero from '../components/Heros/Hero';
import ScreenShot from '../components/ScreenShots/ScreenShots';
import Mission from '../components/Missions/Mission';
import Discover from '../components/Discovers/Discover';
import Faq from '../components/Faqs/Faq';
import Subscribe from '../components/Subscribes/Subscribe';
import Team from '../components/Officers/Officers';
import Contact from '../components/Contacts/Contact';
import Footer from '../components/Footers/Footer';

const HomePage = () => {
  return (
    <div className='homepage-3'>
      <div id='scrollUp' title='Scroll To Top'>
        <i className='fas fa-arrow-up' />
      </div>
      <div className='main'>
        <Header imageData={'/image/cssa_logo_long1.png'} />
        <Hero />
        <Mission />
        <Discover />
        <ScreenShot />
        <Faq />
        <Team />
        <Subscribe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
