import React, { useState } from "react";
import { sellingCollectionRef } from "../../utils/firebase/collectionRefs";
import { addDocument } from "../../utils/firebase/operations";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";

const SellCard = ({ itemData }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  /**
   * Decrease counter number
   */
  const decrementCounter = (e) => {
    e.preventDefault();
    // Prevent user from listing less than 1 item per listing
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  /**
   * Increase counter number
   */
  const incrementCounter = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  /**
   * Send item data to database when form is submitted
   */
  const submitHandler = async (e) => {
    e.preventDefault();
    const item = {
      name: itemData.name,
      id: itemData.id,
      category: itemData.category,
      price,
      quantity,
      date: new Date(),
      user: "Test123", // TODO: Get user info and populate this
    };

    console.log(`listing item: ${JSON.stringify(item)}`);

    console.log(`errors: ${JSON.stringify(errors)}`);

    if (!errors.askingPrice) {
      try {
        await addDocument(sellingCollectionRef, item);

        // Redirect user on success -> also pass in item data to use in success component
        router.push(
          {
            pathname: "/sell/success",
            query: item,
          },
          "/sell/success"
        );
      } catch (error) {
        console.error(`Unable to add item to database: ${error}`);
      }
    } else {
      console.log(errors.askingPrice);
    }
  };

  /**
   * Set price state when input changes
   */
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const counter = (
    <div className="mb-2 custom-number-input h-10 w-32">
      <label
        htmlFor="custom-input-number"
        className="block text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Quantity
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={(e) => decrementCounter(e)}
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={quantity}
          onChange={() => console.log(quantity)}
        ></input>

        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={(e) => incrementCounter(e)}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {itemData.name}
          </h5>
          <img
            src={`/images/${itemData.category}/${itemData.image}`}
            className="mr-3 h-6 sm:h-9"
            alt={itemData.name}
          ></img>
          {counter}

          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Asking Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="20000"
              onChange={onChangePrice}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              {...register("askingPrice", { required: true, min: 1 })}
            />
            {errors.askingPrice && (
              <div className="mb-3 text-normal text-red-500 ">
                {errors.askingPrice.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-one dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => submitHandler(e)}
          >
            Sell
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellCard;
