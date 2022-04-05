import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD7MSh0uloFllBnoGDqf8igcfFG2-nZ0O8',
  authDomain: 'cssa-341604.firebaseapp.com',
  projectId: 'cssa-341604',
  storageBucket: 'cssa-341604.appspot.com',
  messagingSenderId: '171640141719',
  appId: '1:171640141719:web:df0356dbb2386f0d0236d2',
  measurementId: 'G-BDZE165LDR',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
