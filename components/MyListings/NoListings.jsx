import React from "react";
import Layout from "../Layout/Layout";

/**
 * This component will be rendered when a user tries to view their listings and has none available
 */
const NoListings = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            No Listings
          </span>
        </h1>
        <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          Please add a listing
        </p>
      </div>
    </>
  );
};

export default NoListings;
