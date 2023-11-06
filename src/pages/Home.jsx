import React from "react";
import PropTypes from "prop-types";
import Banner from "./../components/Banner";
import TopSix from "./../components/TopSix";
import { Link } from "react-router-dom";

const Home = () => {
  const content = (
    <>
      <h2 className="my-6   text-3xl font-bold tracking-wider text-white sm:text-4xl sm:leading-none">
        Discover Culinary Delights,
        <br className="hidden md:block" />
        The Classics <span className="relative inline-block"> At Naamkeen</span>
      </h2>
      <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
        Experience a world of flavors, where every dish tells a story. Order,
        savor, and indulge in a symphony of tastes with Namkeen. Your food
        adventure begins here.
      </p>

      <Link
        aria-label="Scroll down"
        className="flex mt-10 items-center justify-evenly w-28 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M2.293,1.293,7.586,6,2.293,10.293A1,1,0,0,0,3.707,11.707l6-6a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414Z" />
        </svg>
        <span>Explore</span>
      </Link>
    </>
  );
  return (
    // <div className=" flex items-center justify-center min-h-[90vh]">
    //   <div className=" w-[70vw] h-[70vh] lg:w-[700px] lg:h-[700px] rounded-full   border bg-[#f8f6c5]"></div>
    // </div>
    <div>
      <Banner content={content}>
        <img
          src="https://i.ibb.co/XpzYQWg/photo-1496412705862-e0088f16f791-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </Banner>
      <TopSix></TopSix>
    </div>
  );
};

Home.propTypes = {};

export default Home;
