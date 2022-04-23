// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

// Export db for us in other files
export const db = getFirestore(firebaseApp);
