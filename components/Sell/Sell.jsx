import React from "react";
import Category from "../Category/Category";
import { potionList } from "../../utils/items/potionList";

const Sell = () => {
  return (
    <div>
      <Category
        categoryName="Potions"
        categoryItems={potionList}
        tradeType="selling"
      />
    </div>
  );
};

export default Sell;
