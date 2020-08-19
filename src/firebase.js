
import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnODTM3M8eTkgbE07wJzK-H-9JyeR3yN0",
    authDomain: "insta-clone-react-84054.firebaseapp.com",
    databaseURL: "https://insta-clone-react-84054.firebaseio.com",
    projectId: "insta-clone-react-84054",
    storageBucket: "insta-clone-react-84054.appspot.com",
    messagingSenderId: "588424468429",
    appId: "1:588424468429:web:57ed590ba8d10ccd08d684",
    measurementId: "G-VERCEPYD17"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage}; 