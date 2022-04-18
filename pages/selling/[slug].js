import React from "react";
import Layout from "../../components/Layout/Layout";
import { potionList } from "../../utils/items/potionList";
import { itemsForSale } from "../../utils/mockData/itemsForSale";

const SellingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <div>Buying Details Page</div>
      <p>{potionData.name}</p>
      {forSale.map((item) => (
        <div>
          <p>
            {item.user} selling for {item.value}
          </p>
        </div>
      ))}
    </>
  );
};

export default SellingDetails;