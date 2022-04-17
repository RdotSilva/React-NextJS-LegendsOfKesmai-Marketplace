import React from "react";
import { strengthPotion } from "../../utils/mockData/itemsForSale";

const Selling = () => {
  return (
    <div>
      {strengthPotion.map((item) => (
        <p>
          {item.user} for {item.value}
        </p>
      ))}
    </div>
  );
};

export default Selling;
