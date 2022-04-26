import { db } from "./initFirebase";
import { collection } from "firebase/firestore";

/**
 * This file will hold all of the collection references for now
 */
export const potionsCollectionRef = collection(db, "potions");
export const sellingCollectionRef = collection(db, "selling");
