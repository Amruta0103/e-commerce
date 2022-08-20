import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

export function PrivateRoute({ path, ...props }) {
  const { isLoggedin } = useAuth();

  return isLoggedin ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
