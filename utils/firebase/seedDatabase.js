import { db } from "./initFirebase.js";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { potionList } from "../items/potionList.js";

/**
 * Save an item to the database
 * @param {String} docRef The reference for the document
 * @param {String} item The item to save to the database
 */
const saveItemToDb = (docRef, item) => {
  setDoc(docRef, {
    item,
  });
};

/**
 * Seed a list of items to the database using a ID that is part of the item object
 * @param {Array} itemsToSeed List of items to seed to the database
 * @param {String} collectionName The collection name to use
 */
const seedDatabaseItems = (itemsToSeed, collectionName) => {
  itemsToSeed.forEach((item) => {
    const docRef = doc(db, collectionName, item.id);
    saveItemToDb(docRef, item);
  });
};

seedDatabaseItems(potionList, "potions");
