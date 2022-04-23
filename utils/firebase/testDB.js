import { db } from "./initFirebase.js";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

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

// savePotions();

// Fetch the data from db
const getPotions = () => {
  getDocs(dbInstance).then((data) => {
    console.log(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  });
};

getPotions();
