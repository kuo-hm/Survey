import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
const Graphs = () => {
  const [selected, setselected] = useState("n");
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
  const Mention = {
    labels: ["Passable ", "Assez bien", "Bien", "très bien"],
    datasets: [
      {
        label: "Mention Bac",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(245, 71, 162, 1)",
          "rgba(54, 162, 235, 0.2)",

          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",

          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const Filiere = {
    labels: [
      "Ingénierie Financière et Audit",
      "Ingénierie Informatique et Réseaux",
      "génie industriel",
      "génie civil, bâtiments et travaux publics",
    ],
    datasets: [
      {
        label: "Quel filiére",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const [data, setData] = useState(Niveau);
  useEffect(() => {
    if (selected === "m") setData(Mention);
    else if (selected === "f") setData(Filiere);
    else setData(Niveau);
  }, [selected]);
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
    setselected(e.target.value);
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="header"></div>
      {selected}
      <select
        onChange={handleChange}
        style={{ marginLeft: "45%", padding: "20px" }}
      >
        <option value="f">Quel filiére</option>
        <option selected value="n">
          Niveau Scolaire
        </option>
        <option value="m">Mention Bac</option>
      </select>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graphs;
