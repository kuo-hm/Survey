import "./styles/Survey.css";
import React, { useEffect, useState } from "react";

const Survey = ({ q, a1, a2, a3, a4 }) => {
  return (
    <>
      <form className="form">
        <div className="inputGroup">
          <h2>{q}</h2>
          <input id="radio1" name="radio" type="radio" />
          <label htmlFor="radio1">{a1} </label>
        </div>
        <div className="inputGroup">
          <input id="radio2" name="radio" type="radio" />
          <label htmlFor="radio2">{a2}</label>
        </div>
        <div className="inputGroup">
          <input id="radio3" name="radio" type="radio" />
          <label htmlFor="radio3">{a3} </label>
        </div>
        <div className="inputGroup">
          <input id="radio4" name="radio" type="radio" />
          <label htmlFor="radio4">{a4} </label>
        </div>
      </form>
    </>
  );
};

export default Survey;
