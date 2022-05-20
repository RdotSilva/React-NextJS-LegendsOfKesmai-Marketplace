import React from "react";
import MyListings from "../../components/MyListings/MyListings";
import { sellingCollectionRef } from "../../utils/firebase/collectionRefs";
import { fetchDocuments } from "../../utils/firebase/operations";

const MyListingsPage = ({ forSaleByUser }) => {
  return <MyListings itemListings={forSaleByUser} />;
};

export default MyListingsPage;

/**
 * Search the database for all items for sale and filter based on the user ID -> then we send this as props to the MyListings component
 * @param {*} context
 * @returns
 */
export const getStaticProps = async (context) => {
  const sellingData = await fetchDocuments(sellingCollectionRef);

  // Mock user ID for now -> will need to populate this
  const userId = "Test123";

  const itemsForSaleByUser = sellingData.filter((item) => {
    return item.user === userId;
  });

  // Convert Firestore timestamp to JS date
  const itemsForSaleByUserWithTimestamp = itemsForSaleByUser.map((item) => {
    return { ...item, date: item.date.toDate() };
  });

  return {
    props: {
      forSaleByUser: JSON.parse(
        JSON.stringify(itemsForSaleByUserWithTimestamp)
      ),
    },
  };
};
