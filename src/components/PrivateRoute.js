// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const authedUser = useSelector((state) => state.authedUser);
  const currentPath = window.location.pathname;  // Capture current URL path

  return authedUser ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{ from: currentPath }} // Pass the attempted URL to login page
    />
  );
};

export default PrivateRoute;
