import React from "react";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto" />;
  }

  if (!loading && !user?.email) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
