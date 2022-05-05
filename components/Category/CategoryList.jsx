import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoryList = ({ potionList, tradeType }) => {
  let [categories] = useState({
    Potions: [...potionList],
    Armor: [],
    Jewelry: [],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-color-1 rounded-xl p-3 ",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul className="grid grid-cols-4 gap-1 items-center ">
                {items.map((item) => (
                  <li
                    key={item.slug}
                    className="relative rounded-md hover:bg-coolGray-100"
                  >
                    <img
                      src={`/images/${item.image}`}
                      className="mr-3 h-6 sm:h-9"
                      alt={item.name}
                    ></img>

                    <ul className="mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500 ">
                      <li>{item.name}</li>
                    </ul>

                    <a
                      href={`${tradeType}/${item.id}`}
                      className={classNames(
                        "absolute inset-0 rounded-md hover:ring-2 ring-purple-800"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CategoryList;
