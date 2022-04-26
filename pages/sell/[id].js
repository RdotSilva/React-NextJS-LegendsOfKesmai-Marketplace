import React from "react";
import Layout from "../../components/Layout/Layout";
import { potionList } from "../../utils/items/potionList";
import { itemsForSale } from "../../utils/mockData/itemsForSale";
import { fetchDocuments } from "../../utils/firebase/operations";
import { potionsCollectionRef } from "../../utils/firebase/collectionRefs";
import SellCard from "../../components/Sell/SellCard";

const SellingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <div>
        <SellCard potionData={potionData} />
      </div>
    </>
  );
};

export default SellingDetails;

/**
 * Find all IDs and generate static page for each item based on the slug
 * @returns All of the IDs located inside of potion list
 */
export const getStaticPaths = async () => {
  const paths = potionList.map((potion) => {
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
  const id = context.params.id;

  const data = potionData.find((potion) => {
    return potion.id === id;
  });

  // TODO: Replace this with Database call to fetch items per slug
  const items = itemsForSale.filter((item) => {
    return item.id === id;
  });

  return {
    props: { potionData: data, forSale: items },
  };
};
