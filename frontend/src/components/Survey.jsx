import "./styles/Survey.css";
import { getSurvey } from "../Redux/features/survey/surveySlice";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Survey = () => {
  const posts = useSelector((state) => state.survey);

  const dispatch = useDispatch();
  const [state, setstate] = useState(posts);
  useEffect(() => {
    dispatch(getSurvey());
  }, [dispatch]);
  const nextHandler = async (e) => {
    e.preventDefault();
    // const answers = { question: question, answer: answer };
    // await dispatch(getSurvey(answers));
    setstate(posts.entities);
    console.log(state);
  };

  return (
    <div className="containerSurvey">
      <form className="form">
        <div className="inputGroup">
          <h2>Question</h2>
          <input id="radio1" name="radio" type="radio" />
          <label htmlFor="radio1">Question1 </label>
        </div>
        <div className="inputGroup">
          <input id="radio2" name="radio" type="radio" />
          <label htmlFor="radio2">Question2 </label>
        </div>
        <div className="inputGroup">
          <input id="radio3" name="radio" type="radio" />
          <label htmlFor="radio3">Question3 </label>
        </div>
        <div className="inputGroup">
          <input id="radio4" name="radio" type="radio" />
          <label htmlFor="radio4">Question4 </label>
        </div>
        <button className="btn-1" onClick={nextHandler}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Survey;
