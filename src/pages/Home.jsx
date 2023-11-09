import React from "react";
import PropTypes from "prop-types";
import Banner from "./../components/Banner";
import TopSix from "./../components/TopSix";
import { Link } from "react-router-dom";
import CategoryButtons from "./../components/CategoryButtons";
import Contact from "./../components/Contact";

const Home = () => {
  return (
    // <div className=" flex items-center justify-center min-h-[90vh]">
    //   <div className=" w-[70vw] h-[70vh] lg:w-[700px] lg:h-[700px] rounded-full   border bg-[#f8f6c5]"></div>
    // </div>
    <div>
      <Banner>
        <img
          src="https://i.ibb.co/XpzYQWg/photo-1496412705862-e0088f16f791-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
      </Banner>
      <TopSix></TopSix>
      <div>
        <CategoryButtons></CategoryButtons>
      </div>
      <Contact></Contact>
    </div>
  );
};

Home.propTypes = {};

export default Home;
