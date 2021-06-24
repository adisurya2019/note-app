import firebase from 'firebase';

try {
    const firebaseConfig = {
      apiKey: "AIzaSyBtjH6ay2w2riG_iLO4u909XAhK3uvTeik",
    authDomain: "uas-mobile-9dca0.firebaseapp.com",
    databaseURL: "https://uas-mobile-9dca0-default-rtdb.firebaseio.com",
    projectId: "uas-mobile-9dca0",
    storageBucket: "uas-mobile-9dca0.appspot.com",
    messagingSenderId: "537027974793",
    appId: "1:537027974793:web:6c0f5bf3b4f06a91d69858",
    measurementId: "G-KYP6MJ6FYQ"
      };
  
  firebase.initializeApp(firebaseConfig);
  
} catch (error) {
  console.log(error)
}

export default firebase;