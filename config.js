import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyDFD6WwPH2nd7hwy_XzlWqXlkofMPGuRq4",
    authDomain: "story-teller-app-9a2bc.firebaseapp.com",
    projectId: "story-teller-app-9a2bc",
    storageBucket: "story-teller-app-9a2bc.appspot.com",
    messagingSenderId: "922835352814",
    appId: "1:922835352814:web:720b45eb35b903568c47ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()