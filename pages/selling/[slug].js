import React from "react";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/Table/Table";
import { potionList } from "../../utils/items/potionList";
import { itemsForSale } from "../../utils/mockData/itemsForSale";

const SellingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <div>
        <Table items={forSale} itemName={potionData.name} />
      </div>
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

/**
 * Search the potion mock data file and return all the necessary information about that potion and turn it into props
 * @param {*} context
 * @returns
 */
export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  // TODO: Replace this with database call
  const data = potionList.find((potion) => {
    return potion.slug === slug;
  });

  // TODO: Replace this with Database call to fetch items per slug
  const items = itemsForSale.filter((item) => {
    return item.slug === slug;
  });

  return {
    props: { potionData: data, forSale: items },
  };
};
