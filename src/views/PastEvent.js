import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Headers/Header';
import Footer from '../components/Footers/Footer';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { storageRef } from '../lib/firebase';
import Modal from '../components/Modals/Modal';
import { motion } from 'framer-motion';

const PastEvent = () => {
  const param = useParams();
  const location = useLocation();
  console.log(location);
  const [images, setImages] = useState([]);

  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const eventRef = storageRef.child(`/Past-Events/${param.event}`);

      const res = await eventRef.listAll();
      const pathList = res.items.map((item) => item.fullPath);

      let promiseList = [];
      pathList.forEach((path) => {
        const imageRef = storageRef.child(path);
        promiseList.push(imageRef.getDownloadURL());
      });
      const urlRes = await Promise.all(promiseList);
      setImages(urlRes);
    };
    getData();
  }, []);

  return (
    <div>
      <div className='blog'>
        <div id='scrollUp' title='Scroll To Top'>
          <i className='fas fa-arrow-up' />
        </div>
        <div className='main'>
          <Header imageData={'/image/cssa_logo_long1.png'} />
          <Breadcrumb title={param.event} />
          <section id='blog' className='section blog-area ptb_50'>
            <div className='container'>
              <div className='img-grid'>
                {images &&
                  images.map((image) => (
                    <motion.div
                      className='img-wrap'
                      key={image}
                      layout
                      whileHover={{ opacity: 1 }}
                      onClick={() => setSelectedImg(image)}
                    >
                      <motion.img
                        src={image}
                        alt='uploaded pic'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      ></motion.img>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

const Image = ({ path }) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    const getUrl = async () => {
      const imageRef = storageRef.child(path);
      const urlRes = await imageRef.getDownloadURL();
      setUrl(urlRes);
    };
    getUrl();
  }, [path]);

  return (
    <>
      <img src={url}></img>
    </>
  );
};

export default PastEvent;
