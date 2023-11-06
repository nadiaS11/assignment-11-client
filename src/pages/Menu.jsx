import React from "react";
import PropTypes from "prop-types";
import Banner from "./../components/Banner";
import { Button } from "@material-tailwind/react";
import { Input } from "postcss";
import GetAllfoods from "../utils/GetAllfoods";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const foods = GetAllfoods();
  const content = (
    <>
      <form className="flex flex-col gap-5 md:gap-2 items-center w-full mt-20 md:flex-row md:px-16">
        <input
          placeholder="Search foods..."
          required
          type="text"
          className="flex-grow w-full h-12 px-4   text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded-lg appearance-none   "
        />

        <Button
          variant="outlined"
          color="white"
          size="md"
          className="   text-center   text-gray-400  hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Search
        </Button>
      </form>
    </>
  );
  return (
    <div>
      <Banner content={content}>
        <img
          src="https://i.ibb.co/4JmBBHY/photo-1543353071-10c8ba85a904-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-norma.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
