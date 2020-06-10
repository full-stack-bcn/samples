import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from '@firebase/app';
import '@firebase/analytics';
import '@firebase/firestore';

import firebaseConfig from './firebase-credentials.json';
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

