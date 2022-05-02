import React from "react";
import Table from "../Table/Table";

// Render a table showing the current users listings
const MyListings = ({ itemListings }) => {
  return (
    <div>
      {itemListings?.length ? (
        <Table items={itemListings} itemName={"My Listings"} />
      ) : (
        <div>TODO: Add no items for sale component</div>
      )}
    </div>
  );
};

export default MyListings;
