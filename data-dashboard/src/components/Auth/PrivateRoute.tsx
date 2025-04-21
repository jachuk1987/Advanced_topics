// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// interface PrivateRouteProps {
//   children: JSX.Element;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const location = useLocation();
//   const isAuthenticated = Boolean(localStorage.getItem("authToken"));

//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to="/login" replace state={{ from: location }} />
//   );
// };

// export default PrivateRoute;


import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
