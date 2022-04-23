// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

import { secret } from "../../secret.js";

const firebaseConfig = {
  apiKey: secret.apiKey,
  authDomain: secret.authDomain,
  projectId: secret.projectId,
  storageBucket: secret.storageBucket,
  messagingSenderId: secret.messagingSenderId,
  appId: secret.appId,
  measurementId: secret.measurementId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const dbInstance = collection(db, "potions");

// Create the doc ref used for setting a document and a custom ID
const docRef = doc(db, "potions", "00225");

// Potion payload for testing
const potion = {
  name: "Strength Potion",
  image: "images/item-00225.png",
  slug: "strengthpotion",
  id: "00225",
};

// Set the payload in the db with custom ID
const savePotions = () => {
  setDoc(docRef, {
    potion,
  });
};

savePotions();
