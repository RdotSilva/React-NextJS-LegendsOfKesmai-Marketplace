import React from "react";

/**
 * This is rendered when a user clicks on an item for sale that has no listings
 */
const NoListings = ({ item }) => {
  return (
    <div class="bg-color-5 h-screen w-screen bg-gray-50 flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div class="w-full lg:w-1/2 mx-8">
          <div class="text-7xl text-purple-1000 font-dark font-extrabold mb-8">
            {" "}
            Bah
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
              There are currently no {item}s for sale
            </p>
            <a
              href="/buy"
              class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-color-3 active:bg-purple-900 hover:bg-purple-900"
            >
              Looking for another item?
            </a>
          </div>
        </div>
        <div class="w-full lg:flex lg:w-1/2 mx-5 my-12">
          <img
            src="\images\kesmai-dragon-red.png"
            class=""
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NoListings;
