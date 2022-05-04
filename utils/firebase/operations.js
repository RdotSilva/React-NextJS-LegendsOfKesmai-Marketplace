import { getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";

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
 * This will automatically add the document reference ID to a new field
 * @param {*} collectionRef The collection reference to add data to
 * @param {*} item The item to add to the collection
 */
export const addDocument = async (collectionRef, item) => {
  try {
    const docRef = doc(collectionRef);
    await setDoc(docRef, {
      ...item,
      docId: docRef.id,
    });
  } catch (error) {
    console.log(`Unable to add item ${item} to Database`);
  }
};

/**
 * Delete a document
 * @param {*} collectionRef The collection reference to delete
 */
export const deleteDocument = async (collectionRef) => {
  await deleteDoc(collectionRef);
};
