import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAj4UqrRLEElHHdxaGEYEeOVP2vfFMfcJQ",
  authDomain: "ecommerce-21ca5.firebaseapp.com",
  databaseURL: "https://ecommerce-21ca5.firebaseio.com",
  projectId: "ecommerce-21ca5",
  storageBucket: "ecommerce-21ca5.appspot.com",
  messagingSenderId: "77838327807",
  appId: "1:77838327807:web:18cc0392f5ce3d585991ca",
  measurementId: "G-4009WS06G7"
  });


  const auth = firebase.auth();

  export {auth}