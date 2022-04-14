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

/**
 * Search the potion mock data file and return all the necessary information about that potion and turn it into props
 * @param {*} context
 * @returns
 */
export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  const data = potionList.find((potion) => {
    return potion.slug === slug;
  });

  return {
    props: { potionData: data },
  };
};
