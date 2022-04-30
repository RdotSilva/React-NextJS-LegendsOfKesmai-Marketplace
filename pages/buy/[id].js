import React from "react";
import Layout from "../../components/Layout/Layout";
import { itemsForSale } from "../../utils/mockData/itemsForSale";
import { fetchDocuments } from "../../utils/firebase/operations";
import {
  potionsCollectionRef,
  sellingCollectionRef,
} from "../../utils/firebase/collectionRefs";
import Table from "../../components/Table/Table";

const BuyingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <Table items={forSale} itemName={potionData.name} />
    </>
  );
};

export default BuyingDetails;

/**
 * Find all IDs and generate static page for each item based on the slug
 * @returns All of the IDs located inside of potion list
 */
export const getStaticPaths = async () => {
  const potionData = await fetchDocuments(potionsCollectionRef);

  const paths = potionData.map((potion) => {
    return {
      params: { id: potion.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

/**
 * Search the potion mock data file and return all the necessary information about that potion and turn it into props
 * @param {*} context
 * @returns
 */
export const getStaticProps = async (context) => {
  // Collection references for Firestore database
  const potionData = await fetchDocuments(potionsCollectionRef);
  const potionsForSale = await fetchDocuments(sellingCollectionRef);

  // Fetch the item ID from params
  const id = context.params.id;

  // Filter potion database info to get the info for the specific potion by ID
  const data = potionData.find((potion) => {
    return potion.id === id;
  });

  // Find all sales by potion ID
  const potionsForSaleById = potionsForSale.filter((item) => {
    return item.id === id;
  });

  // Convert Firestore timestamp to JS date
  const potionsForSaleByIdWithDates = potionsForSaleById.map((item) => {
    return { ...item, date: item.date.toDate() };
  });

  return {
    props: {
      potionData: data,
      forSale: JSON.parse(JSON.stringify(potionsForSaleByIdWithDates)),
    },
  };
};
