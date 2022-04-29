import React from "react";
import Buy from "../../components/Buy/Buy.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import { fetchDocuments } from "../../utils/firebase/operations.js";
import { potionsCollectionRef } from "../../utils/firebase/collectionRefs.js";

/**
 * Render the /buy page
 */
function BuyPage({ potionList }) {
  return (
    <>
      <Layout />
      <Buy potionList={potionList} />
    </>
  );
}

export default BuyPage;

/**
 * Query the database to fetch all potion data and send that as props
 * @param {*} context
 * @returns
 */
export const getStaticProps = async (context) => {
  const potionData = await fetchDocuments(potionsCollectionRef);
  return {
    props: { potionList: potionData },
  };
};
