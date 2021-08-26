import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBtMpFRYOEt2or4f6MGwJHH0Kpc-wIkU8A",
  authDomain: "blogtown-c2afa.firebaseapp.com",
  projectId: "blogtown-c2afa",
  storageBucket: "blogtown-c2afa.appspot.com",
  messagingSenderId: "59247421406",
  appId: "1:59247421406:web:5528ee8f7d5bf79d0e9f4f",
  measurementId: "G-FVLXK1682Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
