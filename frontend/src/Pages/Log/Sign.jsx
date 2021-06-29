import React, { useEffect, useState } from "react";
import "./Sign.css";
import { useDispatch } from "react-redux";
import { isLogged } from "../../Redux/features/logged/loggedSlice"; //incrementAsync
import { postLogin } from "../../Redux/features/auth/loginSlice";
import { postRegister } from "../../Redux/features/auth/registerSlice";

const Sign = ({ history }) => {
  const [slide, setSlide] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cin, setCin] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  // isLogged
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(postLogin({ email: "", password: "" }));
    if (localStorage.getItem("authToken")) {
      history.push("/survey");
    }
  }, [history]);
  //Login Handling
  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    await dispatch(postLogin(user));
    if (localStorage.getItem("error")) {
      //Message Error localStorage.getItem("error")
      setError(localStorage.getItem("error"));
      localStorage.removeItem("error");
    } else {
      dispatch(isLogged(true));
      history.push("/survey");
      setError("");
    }
  };
  //SignUp Handling
  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== repassword) {
      setPassword("");
      setRePassword("");
      setError("Your Password don't match!!");
      return;
      //Message Error "Your Password don't match!!",
    }
    const user = {
      email: email,
      password: password,
      fullName: fullName,
      cin: cin,
      date: date,
      phone: phone,
    };
    await dispatch(postRegister(user));
    if (localStorage.getItem("errorRegister")) {
      setError(localStorage.getItem("errorRegister"));

      //Message Error localStorage.getItem("errorRegister"),

      localStorage.removeItem("errorRegister");
    } else {
      setPhone("");
      setCin("");
      setDate("");
      setRePassword("");
      setSlide("login");
      setError("");
    }
  };
  return (
    <div className="log__container">
      <div className="form-structor">
        <div className={slide === "signup" ? "signup" : "signup slide-up"}>
          <h2
            className="form-title"
            id="signup"
            onClick={() => {
              setSlide("signup");
              setError("");
            }}
          >
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input
              type="text"
              className="input"
              placeholder="Nom Complete*"
              required
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <input
              type="email"
              className="input"
              placeholder="Email*"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="input"
              placeholder="Password*"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              className="input"
              placeholder="RePassword*"
              required
              onChange={(e) => setRePassword(e.target.value)}
              value={repassword}
            />
            <input
              type="text"
              className="input"
              placeholder="Cin*"
              required
              onChange={(e) => setCin(e.target.value)}
              value={cin}
            />
            <input
              type="tel"
              className="input"
              placeholder="06*"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              className="input"
              placeholder="dd/mm/yyyy*"
              required
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <p style={{ color: "#DC143C" }}>{error}</p>
          <button className="submit-btn" onClick={registerHandler}>
            Sign up
          </button>
        </div>
        <div className={slide === "login" ? "login" : "login slide-up"}>
          <div className="center">
            <h2
              className="form-title"
              id="login"
              onClick={() => {
                setSlide("login");
                setError("");
              }}
            >
              <span>or</span>Log in
            </h2>{" "}
            <div className="form-holder">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input"
                placeholder="Email"
                required
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                className="input"
                placeholder="Password"
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <button className="submit-btn" onClick={loginHandler}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
