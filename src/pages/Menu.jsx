import { useState } from "react";
import PropTypes from "prop-types";
import Banner from "./../components/Banner";

import GetAllfoods from "../utils/GetAllfoods";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const foods = GetAllfoods();
  const foodsCount = foods?.length;
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(foodsCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((i) => i + 1);
  console.log(pages);

  const handleSelect = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(setCurrentPage);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
      console.log(setCurrentPage);
    }
  };

  return (
    <div>
      <Banner>
        <img
          src="https://i.ibb.co/4JmBBHY/photo-1543353071-10c8ba85a904-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-norma.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-10">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mx-auto my-10">
        <button
          onClick={handlePrevious}
          className="px-4 py-2  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium   text-sm   mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-md text-white"
        >
          Previous
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className="px-4 py-2  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:bg-gray-500 font-medium   text-sm   mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-md text-white"
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="px-4 py-2  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium   text-sm   mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded-md text-white"
        >
          Next
        </button>
        <select
          onClick={handleSelect}
          className="px-4 border-blue-gray-900 border-2 py-2 rounded-md "
        >
          Items
          <option value="9">9</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
