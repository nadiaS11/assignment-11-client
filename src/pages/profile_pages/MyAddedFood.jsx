import React from "react";
import PropTypes from "prop-types";
import Banner from "./../../components/Banner";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

const MyAddedFood = () => {
  const { user } = useAuth();
  const myAxios = useAxios();

  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await myAxios.get(`/user/added-foods?email=${user?.email}`);
      return res;
    },
  });
  console.log(data);

  return (
    <div className="min-h-screen mx-auto">
      <Banner>
        <img
          src="./logo-color.png"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </Banner>
      <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2">
        <img
          src={user.photoURL}
          alt=""
          className="object-cover w-56 h-56 rounded-full border-2 border-[#f8f6c5]"
        />
      </div>

      <div className="my-32 lg:mt-32 flex flex-col p-5 mx-auto  ">
        <div className="mb-10 md:mb-16  ">
          <h2 className="mb-4   text-2xl font-bold text-gray-800 md:mb-6 lg:text-5xl">
            {user?.displayName}
          </h2>

          <p className="max-w-screen-md lg:max-w-screen-2xl   text-gray-500 md:text-lg">
            Hello! We are so happy that you are back. Your most recent food
            items are available here. Happy Eating!
          </p>
        </div>
        {/* <!-- /Heading --> */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 ">
          {/* food */}
          <article className="flex flex-col  gap-4 md:flex-row lg:gap-6">
            <a
              href="#"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                loading="lazy"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="flex flex-col gap-2">
              {/* <span className="text-sm text-gray-400">April 2, 2022</span> */}

              <h2 className="text-xl font-bold text-gray-800">
                <a
                  href="#"
                  className="transition duration-100 hover:text-rose-500 active:text-rose-600"
                >
                  The Pines and the Mountains
                </a>
              </h2>

              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                necessitatibus molestias explicabo.
              </p>

              <div>
                <a
                  href="#"
                  className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl lg:w-full px-4 md:px-8 lg:flex gap-10">
        {/* <!-- Heading --> */}
      </div>
    </div>
  );
};

MyAddedFood.propTypes = {};

export default MyAddedFood;
