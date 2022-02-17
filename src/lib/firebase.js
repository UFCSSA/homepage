import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBWZV-dJOGeITUPKUBdpAjSAc3DLx2sMRE',
  authDomain: 'ufcssa.firebaseapp.com',
  projectId: 'ufcssa',
  storageBucket: 'ufcssa.appspot.com',
  messagingSenderId: '738687320291',
  appId: '1:738687320291:web:d3827e582bc22ede1185d6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
