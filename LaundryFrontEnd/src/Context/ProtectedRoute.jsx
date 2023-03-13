import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContextProvider";
const ProtectedRoute = ({ children }) => {

   const role= sessionStorage.getItem("role")
   const { user } = useUserAuth();
   

  console.log("Check user in Private: ", role);
  if (role?.length>0) {
   return children;
  }
   return <Navigate to="/" />;
};

export default ProtectedRoute;