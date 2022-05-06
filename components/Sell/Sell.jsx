import React from "react";
import CategoryList from "../Category/CategoryList";

/**
 * This is the main component that is rendered on the /sell page
 * It should show a row of clickable item categories and each category should have a dropdown for items
 */
const Sell = ({ categories }) => {
  return (
    <div>
      <CategoryList categories={categories} tradeType="sell" />
    </div>
  );
};

export default Sell;
