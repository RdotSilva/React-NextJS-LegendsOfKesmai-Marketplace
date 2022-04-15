import React from "react";
import Category from "../Category/Category";
import { potionList } from "../../utils/items/potionList";

const Buy = () => {
  return (
    <div>
      <Category
        categoryName="Potions"
        categoryItems={potionList}
        tradeType="buying"
      />
    </div>
  );
};

export default Buy;
