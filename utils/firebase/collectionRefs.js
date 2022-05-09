import { db } from "./initFirebase";
import { collection } from "firebase/firestore";

// Potion data
export const potionsCollectionRef = collection(db, "potions");

// Armor data
export const armorCollectionRef = collection(db, "armor");

// Listings for items that are being sold
export const sellingCollectionRef = collection(db, "selling");
