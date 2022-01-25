import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/firebase-storage';
const firebaseConfig = {
    apiKey: "AIzaSyADNTuILb8t5mcClYLCGrOA8D6JGpBRVqA",
    authDomain: "chatroom-messenger-11ee8.firebaseapp.com",
    projectId: "chatroom-messenger-11ee8",
    storageBucket: "chatroom-messenger-11ee8.appspot.com",
    messagingSenderId: "562839367275",
    appId: "1:562839367275:web:36fbe6b8e99696c5910b2e",
    measurementId: "G-Z4YHWXP59T"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;