import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const FoodCard = ({ food, children }) => {
  const { foodname, foodimage, foodcategory, price } = food;
  return (
    <Card floated className="w-full md:w-96 hover:shadow-2xl mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={foodimage}
          alt={foodname}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {foodname}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {" "}
          {foodcategory}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Details
        </Button>{" "}
        {children}
      </CardFooter>
    </Card>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
