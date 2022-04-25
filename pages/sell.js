import React from "react";
import Sell from "../components/Sell/Sell.jsx";
import Layout from "../components/Layout/Layout.jsx";
import { db } from "../utils/firebase/initFirebase.js";
import { fetchDocuments } from "../utils/firebase/operations.js";
import { collection } from "firebase/firestore";

const potionsCollectionRef = collection(db, "potions");

function SellPage({ potionList }) {
  return (
    <>
      <Layout />
      <Sell potionList={potionList} />
    </>
  );
}

export default SellPage;

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
