import { Navigate } from "react-router-dom";
function ProtectedRoute({ children, ...otherProps }) {
  const isAuthenticated = localStorage.getItem("authenticated");
  return isAuthenticated ? children : <Navigate to="/custlogin" />;
}

export default ProtectedRoute;
