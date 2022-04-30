import React from "react";
import CategoryList from "../Category/CategoryList";

/**
 * This is the main component that is rendered on the /sell page
 * It should show a row of clickable item categories and each category should have a dropdown for items
 */
const Sell = ({ potionList }) => {
  return (
    <div>
      {console.log(potionList)}
      <CategoryList potionList={potionList} tradeType="sell" />
    </div>
  );
};

export default Sell;
