import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const CategoryButtons = (props) => {
  const [category, setCategory] = useState("pasta");

  const myAxios = useAxios();
  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await myAxios.get(`/foods?category=${category}`);
      return res;
    },
  });
  console.log(data);
  return (
    <div>
      <Button className="" variant="outlined" size="md">
        Button
      </Button>
    </div>
  );
};

CategoryButtons.propTypes = {};

export default CategoryButtons;
