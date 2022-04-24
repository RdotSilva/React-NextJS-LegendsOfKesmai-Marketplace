import { getDocs } from "firebase/firestore";

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
