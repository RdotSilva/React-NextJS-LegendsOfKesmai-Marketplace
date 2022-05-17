import { useState, useEffect } from "react";
import { firebaseApp } from "../utils/firebase/initFirebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(firebaseApp);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // Clear auth data
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signOutUser = () => signOut(auth).then(clear);

  const resetUserPassword = (email) => sendPasswordResetEmail(auth, email);

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInUser,
    createUser,
    signOutUser,
    resetUserPassword,
  };
}
