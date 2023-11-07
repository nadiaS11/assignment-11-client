import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const FoodPurchase = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const [newQuantity, setNewQuantity] = useState(1);

  const currentDate = new Date().toISOString().split("T")[0];

  const axios = useAxios();

  const { data: food } = useQuery({
    queryKey: ["food"],
    queryFn: async () => {
      const res = await axios.get(`/foods/${id}`);
      return res;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["food"],
    mutationFn: (orderData) => {
      return axios.post("/user/create-order", orderData);
    },
  });

  const handleOrder = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const foodName = e.target.foodName.value;
    const price = e.target.price.value;
    const quantity = newQuantity;
    const category = e.target.category.value;
    const date = e.target.date.value;
    const instructions = e.target.instruction.value;
    if (quantity <= 0 || price <= 0) {
      return toast.error(`Invalid amount.`);
    }

    if (quantity > food?.data?.quantity) {
      return toast.error("You cant buy more than available quantity.");
    }
    console.log(
      name,
      email,
      foodName,
      price,
      quantity,
      category,
      date,
      instructions
    );
    mutate({
      name,
      email,
      foodName,
      price,
      quantity,
      category,
      date,
      instructions,
    });
    toast.success("Thank you for the purchase.");
  };

  return (
    <section className="bg-white dark:bg-gray-900 mt-32 ">
      {/* <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          <span></span>
        </h2>
        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal   text-5xl">
          <span className="mt-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-12 h-12 mb-4 text-[#e2dc8c]"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              ></path>
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
            </svg>
          </span>
          {user.displayName.toUpperCase()}
        </h1>
      </div> */}
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Order ID: {parseInt(id)}
        </h2>
        <form onSubmit={handleOrder}>
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
                defaultValue={food?.data?.foodname}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Food quantity"
                defaultValue={food?.data?.quantity}
                onChange={(e) => setNewQuantity(e.target.value)}
                required
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
                defaultValue={food?.data?.price}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Food quantity"
                defaultValue={food?.data?.foodcategory}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=""
                defaultValue={currentDate}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="username"
                id="quantity"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Food quantity"
                defaultValue={user?.displayName.toUpperCase()}
                disabled
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                defaultValue={user?.email}
                disabled
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="instruction"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Additional Instruction
              </label>
              <textarea
                name="instruction"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write your instructions here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex 
            bg-gray-200 items-center px-5 py-2.5 mt-4 sm:mt-6  font-bold text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-gray-400"
          >
            Order Food
          </button>
        </form>
      </div>
    </section>
  );
};

FoodPurchase.propTypes = {};

export default FoodPurchase;
