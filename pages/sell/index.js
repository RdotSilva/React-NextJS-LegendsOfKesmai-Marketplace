import React from "react";
import Sell from "../../components/Sell/Sell.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import { fetchDocuments } from "../../utils/firebase/operations.js";

import {
  armorCollectionRef,
  potionsCollectionRef,
} from "../../utils/firebase/collectionRefs.js";

/**
 * Render the /sell page
 */
function SellPage({ categories }) {
  return (
    <>
      <Layout />
      <Sell categories={categories} />
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
  // TODO: Fetch these from database then they are seeded
  const armorData = await fetchDocuments(armorCollectionRef);
  // const jewelryData = await fetchDocuments(jewelryCollectionRef);
  // const weaponsData = await fetchDocuments(weaponsCollectionRef);
  // const miscData = await fetchDocuments(miscCollectionRef);

  const categories = {
    Potions: potionData,
    // TODO: Pass the new data for each category into the components
    Armor: armorData,
    // Jewelry: jewelryData,
    // Weapons: weaponsData,
    // Misc: miscData,
  };

  return {
    props: { categories },
  };
};
