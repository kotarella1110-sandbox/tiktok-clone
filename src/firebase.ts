import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDvyRWNvrEqUIeRv8NSjYM1U2Gi5L2yMmw',
  authDomain: 'tiktok-clone-7d30b.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-7d30b.firebaseio.com',
  projectId: 'tiktok-clone-7d30b',
  storageBucket: 'tiktok-clone-7d30b.appspot.com',
  messagingSenderId: '81309976422',
  appId: '1:81309976422:web:5854478479cd61ce94eaa7',
  measurementId: 'G-C10T5BSWDE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
