import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaeqFDvxibnDq4XtqFDlPfV8oONoHUJOI",
  authDomain: "where-is-waldo-716f1.firebaseapp.com",
  projectId: "where-is-waldo-716f1",
  storageBucket: "where-is-waldo-716f1.appspot.com",
  messagingSenderId: "594344231051",
  appId: "1:594344231051:web:11961d5b8ef70f1f77d48e",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
