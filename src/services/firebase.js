import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
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

async function getListUsers() {
  const docs = [];
  const q = query(collection(db, "users"), orderBy("time"));
  const querySnapshot = await getDocs(q);
  //include the id
  querySnapshot.forEach((doc) => docs.push({ id: doc.id, data: doc.data() }));
  return docs;
}

export { getCoords, setUsers, getListUsers };
