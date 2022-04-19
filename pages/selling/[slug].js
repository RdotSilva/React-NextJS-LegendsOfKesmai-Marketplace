import React from "react";
import Layout from "../../components/Layout/Layout";
import Table from "../../components/Table/Table";
import { potionList } from "../../utils/items/potionList";
import { itemsForSale } from "../../utils/mockData/itemsForSale";

const SellingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
          {potionData.name}
        </span>
      </h1>
      <div>
        <Table items={itemsForSale} />
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
