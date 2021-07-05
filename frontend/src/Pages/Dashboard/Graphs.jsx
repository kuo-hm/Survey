import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../../Redux/features/survey/getAnswersSlice";
import { getSurvey } from "../../Redux/features/survey/surveySlice";
import { Button } from "@material-ui/core";
//TODO Fetch and count answers then show it in graphs
const Graphs = () => {
  const [selected, setselected] = useState("n");
  const [datas, setDatas] = useState("n");
  const dispatch = useDispatch();

  const surveyData = useSelector((state) => state.survey.surveys);
  useEffect(() => {
    dispatch(getSurvey());
  }, [dispatch]);

  const Niveau = {
    labels: ["Bac", "Bac +2", "Bac +3", "autre"],
    datasets: [
      {
        label: "Niveau Scolaire",
        data: [8, 12, 7, 6],
        backgroundColor: [
          "rgba(198, 96, 83, 0.5)",
          "rgba(42, 118, 117, 0.4)",
          "rgba(51, 23, 241, 0.6)",
          "rgba(233, 221, 44, 0.7))",
        ],
        borderColor: [
          "rgba(160, 62, 193, 0.7)",
          "rgba(14, 58, 179, 1)",
          "rgba(3, 32, 242, 0.2)",
          "rgba(219, 142, 121, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const handleChange = (e) => {
    console.log(surveyData);
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <input type="button" value="Test" onClick={handleChange} />
      <div className="header"></div>
      {selected}
      <select
        onChange={handleChange}
        style={{ marginLeft: "45%", padding: "20px" }}
      >
        {surveyData.map((surveys) => {
          return <option value={surveys.question}>{surveys.question}</option>;
        })}
      </select>
      <Bar data={Niveau} options={options} />
    </div>
  );
};

export default Graphs;
