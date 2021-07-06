import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../../Redux/features/survey/getAnswersSlice";
import { getSurvey } from "../../Redux/features/survey/surveySlice";
//TODO Fetch and count answers then show it in graphs
const Graphs = () => {
  const [selected, setselected] = useState("n");
  const [datas, setDatas] = useState();
  const dispatch = useDispatch();
  const [data, setData] = useState([0, 0, 0, 0]);
  const [labels, setLabels] = useState([
    "loading",
    "loading",
    "loading",
    "loading",
  ]);
  const [label, setLabel] = useState("loading");

  const surveyData = useSelector((state) => state.survey.surveys);
  useEffect(() => {
    dispatch(getSurvey());
  }, [dispatch]);

  const Niveau = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
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
  const handleChange = async (e) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const ques = e.target.value.split(".")[0];
    const ans = e.target.value.split(".")[1];
    const answers = ans.split(",");

    await axios
      .post("/api/survey/getAnswer", { question: ques }, config)
      .then((response) => {
        setData(response.data.surveys.data);
      })
      .then(() => {
        setLabel(ques);
        setLabels(answers);
      });
    setDatas(e.target.value);
  };

  return (
    <div style={{ marginTop: "80px", height: "91vh" }}>
      <div className="header"></div>
      <select
        onChange={handleChange}
        style={{ marginLeft: "45%", padding: "20px" }}
      >
        <option disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>

        {surveyData.map((surveys) => {
          return (
            <option id="test" value={surveys.question + "." + surveys.answer}>
              {surveys.question}
            </option>
          );
        })}
      </select>
      <Bar data={Niveau} options={options} />
    </div>
  );
};

export default Graphs;
