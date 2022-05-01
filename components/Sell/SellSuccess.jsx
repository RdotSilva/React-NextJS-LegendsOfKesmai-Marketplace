import React from "react";

const SellSuccess = ({ itemListing }) => {
  return (
    <div>
      Successfully listed {itemListing.quantity} {itemListing.name} for{" "}
      {itemListing.price} per item
    </div>
  );
};

export default SellSuccess;
