import React from "react";
import Layout from "../../components/Layout/Layout";
import { potionList } from "../../utils/items/potionList";
import { itemsForSale } from "../../utils/mockData/itemsForSale";

const SellingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <div>Buying Details Page</div>
      <p>{potionData.name}</p>
      {forSale.map((item) => (
        <div>
          <p>
            {item.user} selling for {item.value}
          </p>
        </div>
      ))}
    </>
  );
};

export default SellingDetails;

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
