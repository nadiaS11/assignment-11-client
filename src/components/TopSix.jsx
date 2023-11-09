import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FoodCard from "./FoodCard";
import GetAllfoods from "../utils/GetAllfoods";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import CategoryButtons from "./CategoryButtons";

const TopSix = () => {
  const foods = GetAllfoods();
  const [allFoods, setAllFoods] = useState([]);
  const handleCategory = (word) => {
    const lowerWord = word.toLowerCase();
    const filtered = foods.filter(
      (food) =>
        food.foodname.toLowerCase().includes(lowerWord) ||
        food.foodcategory.toLowerCase().includes(lowerWord)
    );
    setAllFoods(filtered);
  };

  useEffect(() => {
    setAllFoods(foods);
  }, [foods]);

  return (
    <div className="mx-auto ">
      <CategoryButtons handleCategory={handleCategory}></CategoryButtons>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-16 mx-auto px-2 mt-20">
        {allFoods?.slice(0, 6).map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="text-center ">
        <Link to={"/menu"}>
          <Button
            ripple={false}
            className="my-10 text-center bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

TopSix.propTypes = {};

export default TopSix;
