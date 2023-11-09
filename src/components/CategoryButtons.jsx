import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const CategoryButtons = ({ handleCategory }) => {
  const myAxios = useAxios();
  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await myAxios.get(`/foods`);
      return res;
    },
  });
  console.log(data);
  return (
    <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 mx-auto container px-2 mt-20">
      {data?.data?.map((item) => (
        <Button
          onClick={() => handleCategory(item?.foodcategory)}
          key={item._id}
          className="bg-[#f8f6c5]"
          variant="outlined"
          size="md"
          color="gray"
        >
          {item?.foodcategory}
        </Button>
      ))}
    </div>
  );
};

CategoryButtons.propTypes = {};

export default CategoryButtons;
