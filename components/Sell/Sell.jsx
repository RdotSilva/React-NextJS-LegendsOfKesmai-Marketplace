import React from "react";
import Category from "../Category/Category";
import CategoryList from "../Category/CategoryList";
import { potionList } from "../../utils/items/potionList";

const Sell = () => {
  return (
    <div>
      {/* <Category
        categoryName="Potions"
        categoryItems={potionList}
        tradeType="selling"
      /> */}
      <CategoryList />
    </div>
  );
};

export default Sell;
