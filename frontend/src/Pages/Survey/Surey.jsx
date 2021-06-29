import React, { useState } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import json from "./questions";
const Surey = () => {
  const [answers, setanswers] = useState();
  return (
    <div style={{ marginTop: "20%", height: "100%" }}>
      {answers && (
        <div style={{ marginLeft: "40%", width: "100%" }}>
          {" "}
          <p>
            Quel filiére : <br />
            {answers.Quel_filiére}
          </p>
          <p>
            Mention Bac : <br />
            {answers.Mention_Bac}
          </p>
          <p>
            Niveau_Scolair : <br />
            {answers.Niveau_Scolair}
          </p>
        </div>
      )}
      <Survey.Survey
        json={json}
        onComplete={(data) => setanswers(data.valuesHash)}
      />
    </div>
  );
};

export default Surey;
