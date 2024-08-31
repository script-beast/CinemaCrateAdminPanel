import React from "react";
import { Navigate } from "react-router-dom";
import { Page } from "../layouts";

const ProtectedRoutes = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Page /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
