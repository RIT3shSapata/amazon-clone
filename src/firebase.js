import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjN3pW4t30HccPbbmgIlmCg9bBHvj3v1s",
  authDomain: "clone-43e77.firebaseapp.com",
  databaseURL: "https://clone-43e77.firebaseio.com",
  projectId: "clone-43e77",
  storageBucket: "clone-43e77.appspot.com",
  messagingSenderId: "711197403505",
  appId: "1:711197403505:web:5c3f92048ba35c23d56ed0",
  measurementId: "G-C3KXZM80NQ",
});

const auth = firebase.auth();

export { auth };
