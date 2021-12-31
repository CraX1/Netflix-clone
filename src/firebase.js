import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC2UBsVHLt7-yyvHLmNqQpC-jxHJuAe_40",
  authDomain: "netflixcloned-c8409.firebaseapp.com",
  projectId: "netflixcloned-c8409",
  storageBucket: "netflixcloned-c8409.appspot.com",
  messagingSenderId: "301867769683",
  appId: "1:301867769683:web:58f57992b7a92eb95f4ba6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {auth};
  export default db;