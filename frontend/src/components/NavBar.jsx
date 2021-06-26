import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../Redux/features/logged/loggedSlice";

const NavBar = () => {
  const islogged = useSelector((state) => state.logged.islogged);
  const [logged, setLogged] = useState(islogged);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLogged(true);
      dispatch(isLogged(logged));
    } else setLogged(false);
  }, [logged, dispatch]);
  return (
    <nav className="navMenu">
      <Link to="/">MainPage</Link>
      <Link to="/survey">Survey</Link>
      {islogged ? (
        <Link
          to="/sign"
          onClick={() => {
            localStorage.removeItem("authToken");
            dispatch(isLogged(false));
          }}
        >
          Logout
        </Link>
      ) : (
        <Link to="/sign">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;
