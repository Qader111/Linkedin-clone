import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCoEVo9D9by4fCtWCQj-hhb8Bl0nQ7UXo",
    authDomain: "linkedin-clone-adf4f.firebaseapp.com",
    projectId: "linkedin-clone-adf4f",
    storageBucket: "linkedin-clone-adf4f.appspot.com",
    messagingSenderId: "190528707343",
    appId: "1:190528707343:web:eae776c53051910d1ebc7a",
    measurementId: "G-2LZ7C1NV2Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};