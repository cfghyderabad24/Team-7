import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authcontext";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  return isAuthenticated && isAdmin ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;