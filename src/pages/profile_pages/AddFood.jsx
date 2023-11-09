import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuth();
  console.log(user.displayName);
  const axios = useAxios();

  const [foodname, setfoodname] = useState("");
  const [foodimage, setfoodimage] = useState("");
  const [foodcategory, setfoodcategory] = useState("");
  const [price, setprice] = useState("");
  const [madeby, setmadeby] = useState("");
  const [foodorigin, setfoodorigin] = useState("");
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState("");
  const [strInstructions, setstrInstructions] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // ;
  // };

  const { mutate } = useMutation({
    mutationKey: ["food"],
    mutationFn: (foodData) => {
      return axios.post("/user/add-food", foodData);
    },
    onSuccess: () => {
      toast.success("Thanks for your contributing.");
    },
  });

  return (
    <section className="bg-white dark:bg-gray-900 mt-32 grid md:grid-cols-2 ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 w-full">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add A Food Item
        </h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ordered Food name"
                required
                onChange={(e) => setfoodname(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Food Image Url
              </label>
              <input
                type="url"
                name="foodimage"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Image link"
                required
                onChange={(e) => setfoodimage(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity{" "}
                <span className="text-gray-400 text-sm">
                  Available servings:
                </span>
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Food quantity"
                required
                onChange={(e) => setquantity(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>

              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="foodcategory"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                type="text"
                name="foodcategory"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Food quantity"
                required
                onChange={(e) => setfoodcategory(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="foodorigin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Food Origin
              </label>
              <input
                type="text"
                name="foodorigin"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=""
                required
                onChange={(e) => setfoodorigin(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="madeby"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Chef
              </label>
              <input
                type="text"
                name="madeby"
                id=" "
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Chef"
                required
                onChange={(e) => setmadeby(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Short Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="The culture of this dish.."
                required
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="strInstructions"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cooking Instructions
              </label>
              <textarea
                name="strInstructions"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write cooking instructions here"
                required
                onChange={(e) => setstrInstructions(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex 
            bg-gray-200 items-center px-5 py-2.5 mt-4 sm:mt-6  font-bold text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-gray-400"
            onClick={() =>
              mutate({
                foodname,
                foodimage,
                foodcategory,
                price,
                madeby,
                foodorigin,
                description,
                orderamount: 0,
                quantity,
                strInstructions,
                username: user.displayName,
                useremail: user.email,
              })
            }
          >
            Add Food
          </button>
        </form>
      </div>
    </section>
  );
};

AddFood.propTypes = {};

export default AddFood;
