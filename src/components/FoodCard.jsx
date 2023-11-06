import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

const FoodCard = ({ food }) => {
  const location = useLocation();
  const { _id, foodname, foodimage, foodcategory, price } = food;
  return (
    <Card className="w-full md:w-96 hover:shadow-2xl mx-auto">
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
          <Typography color="blue-gray" className="font-bold text-3xl">
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
      <CardFooter className="pt-0 flex flex-col items-center gap-2">
        {location?.pathname === "/menu" ? (
          <Typography className="  text-gray-600">
            Available Servings:{food.quantity}
          </Typography>
        ) : (
          ""
        )}
        <Link to={`/${_id}`} className="w-full">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 font-bold  "
          >
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
  children: PropTypes.node,
};

export default FoodCard;
