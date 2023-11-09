import React from "react";
import PropTypes from "prop-types";
import Banner from "./../../components/Banner";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const MyAddedFood = () => {
  const { user } = useAuth();
  const myAxios = useAxios();

  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await myAxios.get(
        `/user/added-foods?useremail=${user?.email}`
      );
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
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 container mx-auto">
          {/* food */}
          {data?.data?.map((food) => (
            <article
              key={food._id}
              className="flex flex-col mx-auto gap-4 md:flex-row lg:gap-6"
            >
              <a className="group relative block h-56 w-72 shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-32  md:w-32 lg:h-40 lg:w-40">
                <img
                  src={food?.foodimage}
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
                    {food?.foodname}
                  </a>
                </h2>

                <div
                  className="flex
                justify-between items-center"
                >
                  <p className="text-gray-500">{food?.foodcategory}</p>
                  <p className="text-gray-900    font-bold text-2xl">
                    ${food?.price}
                  </p>
                </div>

                <Link to={`/update/${food._id}`}>
                  <Button
                    variant="outlined"
                    ripple={true}
                    className="font-semibold text-rose-500 transition duration-100 hover:bg-[#f8f6c5] active:text-rose-700 px-2 py-1"
                  >
                    Update
                  </Button>
                </Link>
              </div>
            </article>
          ))}
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
