import React, { useEffect, useState } from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../Redux/features/logged/loggedSlice";

const NavBar = () => {
  const islogged = useSelector((state) => state.logged.islogged);
  const [logged, setLogged] = useState(islogged);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLogged(true);
      dispatch(isLogged(logged));
    } else setLogged(false);
  }, [logged, dispatch]);
  const scrolls = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 103) {
      setScrolled(true);
    } else setScrolled(false);

    console.log(window.scrollY);
  };
  window.addEventListener("scroll", scrolls);
  return (
    <nav className="navMenu" style={scrolled ? { display: "none" } : {}}>
      <Link to="/">Page d'accueil</Link>
      <Link to="/survey">Sondage</Link>
      {localStorage.getItem("type") === "admin" && (
        <Link to="/graph">Chart</Link>
      )}
      {localStorage.getItem("type") === "admin" && (
        <Link to="/add">Nouvelle Sondage</Link>
      )}

      {islogged ? (
        <Link
          to="/sign"
          onClick={() => {
            localStorage.removeItem("authToken");
            localStorage.removeItem("type");

            dispatch(isLogged(false));
          }}
        >
          Se déconnecter
        </Link>
      ) : (
        <Link to="/sign">Connexion</Link>
      )}
    </nav>
  );
};

export default NavBar;
