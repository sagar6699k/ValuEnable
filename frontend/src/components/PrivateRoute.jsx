import { useContext } from "react";
import { AuthConext } from "../Contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, path }) => {
  const { token } = useContext(AuthConext);

  if (!token) {
    return (
        <div>
        <Redirect to="/login" />
      </div>
    );
  }
  return <Route path={path}>{children}</Route>;
};

export default PrivateRoute;
