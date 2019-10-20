import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyDbAkMHJGQzLl1yLjM22C-jPYwum-9d3A0',
  authDomain: 'coach-me-de03d.firebaseapp.com',
  databaseURL: 'https://coach-me-de03d.firebaseio.com',
  projectId: 'coach-me-de03d',
  storageBucket: 'coach-me-de03d.appspot.com',
  messagingSenderId: '921211602214',
  appId: '1:921211602214:web:589ba48bb223d1d6642de7',
  measurementId: 'G-HK1SYT8YBW'
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth;
