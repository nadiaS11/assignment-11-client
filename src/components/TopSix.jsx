import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FoodCard from "./FoodCard";
import GetAllfoods from "../utils/GetAllfoods";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TopSix = (props) => {
  const foods = GetAllfoods();
  // const [foods, setFoods] = useState();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://namkeen-server.vercel.app/api/v1/foods?sortField=orderamount&sortOrder=desc`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setFoods(res.data);
  //     });
  // }, [foods, setFoods]);

  return (
    <div className="mx-auto ">
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-16 mx-auto px-2 mt-20">
        {foods?.slice(0, 6).map((food) => (
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
