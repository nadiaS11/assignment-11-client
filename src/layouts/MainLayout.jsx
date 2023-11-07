import React from "react";
import PropTypes from "prop-types";
import StickyNavbar from "./../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";

const MainLayout = (props) => {
  return (
    <div>
      <StickyNavbar></StickyNavbar>
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
