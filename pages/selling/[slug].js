import React from "react";
import Layout from "../../components/Layout/Layout";
import { potionList } from "../../utils/items/potionList";
import { itemsForSale } from "../../utils/mockData/itemsForSale";

const SellingDetails = ({ potionData, forSale }) => {
  return (
    <>
      <Layout />
      <div>For Sale</div>
      <p>{potionData.name}</p>
      <div>
        <table class="table-auto">
          <thead>
            <tr>
              <th>User</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {forSale.map((item) => (
              <tr>
                <td>{item.user}</td>
                <td>{item.value}</td>
                <td>Today</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SellingDetails;

/**
 * Find all slugs and generate static page for each item based on the slug
 * @returns All of the slugs located inside of potion list
 */
export const getStaticPaths = async () => {
  const paths = potionList.map((potion) => {
    return {
      params: { slug: potion.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
