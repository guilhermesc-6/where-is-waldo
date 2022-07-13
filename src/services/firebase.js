import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCaeqFDvxibnDq4XtqFDlPfV8oONoHUJOI",
  authDomain: "where-is-waldo-716f1.firebaseapp.com",
  projectId: "where-is-waldo-716f1",
  storageBucket: "where-is-waldo-716f1.appspot.com",
  messagingSenderId: "594344231051",
  appId: "1:594344231051:web:11961d5b8ef70f1f77d48e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

async function getCoords(imageId, itemId) {
  const docRef = await getDocs(
    //get a reference to doc on firebase
    collection(db, "coordinates", `${imageId}/${itemId}`)
  );
  let docs = [];
  docRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //return the value on data
    docs.push(doc.data());
  });

  return docs;
}

async function setUsers(user, time, id) {
  const docRef = await addDoc(collection(db, "users"), {
    name: user,
    time,
    id,
  });
}

async function getListUsers(id) {
  const docs = [];
  const q = query(collection(db, "users"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => docs.push(doc.data()));
  return docs;
}

export { getCoords, setUsers, getListUsers };
