import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  error.message = "Go back to home";
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="  flex flex-col items-center  mx-auto ">
      <div className="space-y-5">
        <figure className=" w-[80%] mx-auto">
          <img
            src="https://i.ibb.co/2MNFHQw/undraw-feeling-blue-4b7q.png"
            className=" inset-0 object-cover w-[80%] h-auto mx-auto  "
            alt=""
          />
        </figure>
        <h4 className=" text-center  font-bold text-xl text-blue-gray-700 max-w-md mx-auto">
          Ugghhh! Feeling blue? Don't worry. We are working on it
        </h4>
        <p className=" text-center  font-semibold text-xl">
          {error.statusText || error.message}
        </p>

        {error.status === 404 && (
          <div className="text-center">
            <p>Looks like, you are lost.</p>
            <button
              onClick={handleGoBack}
              className="bg-gray-300 p-2 rounded-md "
            >
              Go back
            </button>
          </div>
        )}

        <h4 className=" text-center  font-medium text-xl">
          <Link className="bg-gray-300 p-2 rounded-md" to="/">
            Home
          </Link>
        </h4>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
