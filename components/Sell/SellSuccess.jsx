import React from "react";

/**
 * This will be rendered when a user completes the form to sell a new item and is redirected to the sell/success page
 */
const SellSuccess = ({ itemListing }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Success
          </span>
        </h1>
        <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          You have listed {itemListing.quantity} {itemListing.name} for{" "}
          {itemListing.price} per item
        </p>
      </div>
    </div>
  );
};

export default SellSuccess;
