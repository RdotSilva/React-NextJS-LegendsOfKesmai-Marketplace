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
  // Collection references for Firestore database
  const potionsForSale = await fetchDocuments(sellingCollectionRef);

  // Mock user ID for now -> will need to populate this
  const userId = "Test123";

  // Find all sales by potion ID
  const potionsForSaleByUser = potionsForSale.filter((item) => {
    return item.user === userId;
  });

  // Convert Firestore timestamp to JS date
  const potionsForSaleByUserWithDates = potionsForSaleByUser.map((item) => {
    return { ...item, date: item.date.toDate() };
  });

  return {
    props: {
      forSaleByUser: JSON.parse(JSON.stringify(potionsForSaleByUserWithDates)),
    },
  };
};
