import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const GetAllfoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://namkeen-server.vercel.app/api/v1/foods?category=foodcategory&sortField=orderamount&sortOrder=desc`
      )
      .then((res) => {
        // console.log(res.data);
        setFoods(res.data);
      });
  }, []);
  return foods;
};

GetAllfoods.propTypes = {};

export default GetAllfoods;
