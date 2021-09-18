import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBOMgmD_OR4zgOvplvzOJLgyhgE98JE6ZA',
  authDomain: 'chat-web-app-4dc90.firebaseapp.com',
  databaseURL: 'https://chat-web-app-4dc90-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-4dc90',
  storageBucket: 'chat-web-app-4dc90.appspot.com',
  messagingSenderId: '120689734587',
  appId: '1:120689734587:web:3b0f1746ca66932024ca9e',
};

const app = firebase.initializeApp(config);
