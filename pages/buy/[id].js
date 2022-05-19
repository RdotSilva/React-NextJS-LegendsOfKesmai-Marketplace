import React from "react";
import Layout from "../../components/Layout/Layout";
import { fetchDocuments } from "../../utils/firebase/operations";
import {
  armorCollectionRef,
  potionsCollectionRef,
  sellingCollectionRef,
} from "../../utils/firebase/collectionRefs";
import Table from "../../components/Table/Table";
import NoListings from "../../components/NoListings/NoListings";

const BuyingDetails = ({ itemData, forSale }) => {
  return (
    <>
      <Layout />
      {forSale.length ? (
        <Table items={forSale} itemName={itemData.name} />
      ) : (
        <NoListings item={itemData.name} />
      )}
    </>
  );
};

export default BuyingDetails;

/**
 * Find all IDs and generate static page for each item based on the slug
 * @returns All of the IDs located inside of potion list
 */
export const getStaticPaths = async () => {
  const itemData = await fetchDocuments(potionsCollectionRef);
  const armorData = await fetchDocuments(armorCollectionRef);

  const allItems = [...itemData, ...armorData];

  const paths = allItems.map((item) => {
    return {
      params: { id: item.id },
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

  const itemData = await fetchDocuments(potionsCollectionRef);
  const armorData = await fetchDocuments(armorCollectionRef);
  const sellingData = await fetchDocuments(sellingCollectionRef);

  const allItems = [...itemData, ...armorData];

  const id = context.params.id;

  const data = allItems.find((item) => {
    return item.id === id;
  });

  // Find all sales by potion ID
  const itemsForSaleById = sellingData.filter((item) => {
    return item.id === id;
  });

  // Convert Firestore timestamp to JS date
  const itemsForSaleByIdWithDates = itemsForSaleById.map((item) => {
    return { ...item, date: item.date.toDate() };
  });

  return {
    props: {
      itemData: data,
      forSale: JSON.parse(JSON.stringify(itemsForSaleByIdWithDates)),
    },
  };
};
