import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyACnwEL1-v3eLO7KRoiDpLI-MvvFZYSntA",
  authDomain: "reduxauth-d3cd8.firebaseapp.com",
  databaseURL: "https://reduxauth-d3cd8.firebaseio.com",
  storageBucket: "reduxauth-d3cd8.appspot.com",
  messagingSenderId: "940429891833"
};

export const firebaseApp = firebase.initializeApp(config);
export const todoRef = firebase.database().ref('todos');
export const completeTodoRef = firebase.database().ref('completeTodos');
