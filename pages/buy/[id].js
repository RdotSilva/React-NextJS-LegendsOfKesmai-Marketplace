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
  const potionData = await fetchDocuments(potionsCollectionRef);
  const potionsForSale = await fetchDocuments(sellingCollectionRef);
  const id = context.params.id;

  const data = potionData.find((potion) => {
    return potion.id === id;
  });

  console.log(potionsForSale);

  const itemsFilter = potionsForSale.filter((item) => {
    return item.id === id;
  });

  console.log(JSON.parse(JSON.stringify(itemsFilter)));

  // TODO: Replace this with Database call to fetch items per id
  const items = itemsForSale.filter((item) => {
    return item.id === id;
  });

  return {
    props: {
      potionData: data,
      forSale: JSON.parse(JSON.stringify(itemsFilter)), // TODO: Fix this, doesn't seem right
    },
  };
};
