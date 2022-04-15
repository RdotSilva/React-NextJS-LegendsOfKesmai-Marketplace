import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/dist/client/link";

export default function Category({ categoryName, categoryItems, tradeType }) {
  return (
    <div className="w-56 text-right fixed top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {categoryName}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {categoryItems.map((categoryItem) => (
              <Link href={`/${tradeType}/${categoryItem.slug}`}>
                <a>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <img
                          src={categoryItem.image}
                          className="mr-3 h-6 sm:h-9"
                          alt={categoryItem.name}
                        ></img>
                        {categoryItem.name}
                      </button>
                    )}
                  </Menu.Item>
                </a>
              </Link>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
