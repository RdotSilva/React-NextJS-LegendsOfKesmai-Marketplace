import React from "react";

/**
 * This is the main landing page that will be rendered when a user goes to the root path
 */
const Landing = () => {
  return (
    <div class="h-full">
      <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Welcome to{" "}
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              LOK Marketplace
            </span>
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            The best community marketplace in town!
          </p>
        </div>

        <div class="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
            src="\images\kesmai-dragon-red.png"
          />
        </div>

        <div class="mx-auto md:pt-16">
          <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
            Join the discord
          </p>
          <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <img
              src="\images\kesmai-dragon-red.png"
              class="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
            />
            <img
              src="\images\kesmai-dragon-red.png"
              class="h-12 transform hover:scale-125 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
