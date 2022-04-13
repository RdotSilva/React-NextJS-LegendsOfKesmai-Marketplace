import React from "react";
import Layout from "../../components/Layout/Layout";
import { potionList } from "../../utils/items/potionList";

const BuyingDetails = ({ potionData }) => {
  return (
    <>
      <Layout />
      <div>Buying Details Page</div>
      <p>{potionData.name}</p>
    </>
  );
};

export default BuyingDetails;

/**
 * Find all slugs and generate static page for each item based on the slug
 * @returns All of the slugs located inside of potion list
 */
export const getStaticPaths = async () => {
  const paths = potionList.map((potion) => {
    return {
      params: { slug: potion.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
