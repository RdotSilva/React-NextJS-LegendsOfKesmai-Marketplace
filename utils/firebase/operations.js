import { getDocs, addDoc } from "firebase/firestore";

/**
 * Fetch documents from a database
 * @param {Object} collectionRef The collection reference to fetch data from
 * @returns List of documents
 */
export const fetchDocuments = async (collectionRef) => {
  const data = await getDocs(collectionRef).then((snapshot) => {
    return snapshot.docs.map((item) => {
      return item.data();
    });
  });

  return data;
};

/**
 * Add a document to the database
 * @param {*} collectionRef The collection reference to add data to
 * @param {*} item The item to add to the collection
 */
export const addDocument = async (collectionRef, item) => {
  addDoc(collectionRef, item);
};
