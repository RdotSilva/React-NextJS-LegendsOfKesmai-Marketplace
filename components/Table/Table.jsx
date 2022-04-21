import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Table = ({ items, itemName }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
          {itemName}
        </span>
      </h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <a href="https://discordapp.com/users/TODO">{item.user}</a>
                </th>
                <td className="px-6 py-4">{item.value}</td>
                <td className="px-6 py-4">
                  {moment(item.date).format("MMMM Do YYYY, h:mm a")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

Table.propTypes = {
  items: PropTypes.array,
  itemName: PropTypes.string,
};
