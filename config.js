import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCz0r0Qn0sjGjo5_2g-FawAO3dLv_Zj6Hc",
    authDomain: "wily-app-ec211.firebaseapp.com",
    projectId: "wily-app-ec211",
    storageBucket: "wily-app-ec211.appspot.com",
    messagingSenderId: "939185668563",
    appId: "1:939185668563:web:333f77c5aae53d89842f26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();