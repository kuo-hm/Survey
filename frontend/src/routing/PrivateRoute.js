import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") || localStorage.getItem("type") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign" />
        )
      }
    />
  );
};

export default PrivateRoute;
