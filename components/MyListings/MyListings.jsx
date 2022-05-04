import React from "react";
import Table from "../Table/Table";
import NoListings from "./NoListings";

// Render a table showing the current users listings
const MyListings = ({ itemListings }) => {
  return (
    <div>
      {itemListings?.length ? (
        <Table items={itemListings} itemName={"My Listings"} isMyListingTable />
      ) : (
        <NoListings />
      )}
    </div>
  );
};

export default MyListings;
