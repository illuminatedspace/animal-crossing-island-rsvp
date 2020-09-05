import firebase from "firebase";

const firebaseConfig = {
  apiKey: process && process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "island-rsvp.firebaseapp.com",
  databaseURL: "https://island-rsvp.firebaseio.com",
  projectId: "island-rsvp",
  storageBucket: "island-rsvp.appspot.com",
  messagingSenderId: "852337876796",
  appId: process && process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
