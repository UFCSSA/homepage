import React, { useEffect } from 'react';
import { storage, firestore } from '../lib/firebase';

const Archieve = () => {
  useEffect(() => {
    const getData = async () => {
      const storageRef = storage.ref();
      const imageRef = storageRef.child('test1');

      const list = await imageRef.listAll();
      console.log(list.items);
    };
    getData();
  }, []);
  return <div>Archieve</div>;
};

export default Archieve;
