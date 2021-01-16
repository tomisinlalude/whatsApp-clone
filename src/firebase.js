// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtx-o2KpY3lTF3BfgDtKmBg3EsmH45hqM",
  authDomain: "whatsapp-clone-62cc2.firebaseapp.com",
  projectId: "whatsapp-clone-62cc2",
  storageBucket: "whatsapp-clone-62cc2.appspot.com",
  messagingSenderId: "508055745595",
  appId: "1:508055745595:web:eedfae491de29d64af181e",
  measurementId: "G-12K0ZJ07V9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;