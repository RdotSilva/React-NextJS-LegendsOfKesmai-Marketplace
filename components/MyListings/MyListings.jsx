import React from "react";
import Layout from "../Layout/Layout";
import Table from "../Table/Table";
import NoListings from "./NoListings";

// Render a table showing the current users listings
const MyListings = ({ itemListings }) => {
  return (
    <div>
      <Layout />
      {itemListings?.length ? (
        <Table items={itemListings} itemName={"My Listings"} isMyListingTable />
      ) : (
        <NoListings />
      )}
    </div>
  );
};

export default MyListings;
