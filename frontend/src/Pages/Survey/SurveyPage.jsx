import { useEffect, useState, useRef } from "react";
import Survey from "../../components/Survey";
import "./SurveyPage.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const SurveyPage = () => {
  const [state, setstate] = useState([]);
  const load = {
    question: "Loading",
    answer1: "Loading",
    answer2: "Loading",
    answer3: "Loading",
    answer4: "Loading",
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/api/survey/getSurvey")
      .then((response) => response.json())
      .then((response) => setstate(response.surveys));
  }, []);

  const next = () => {
    if (state.length <= count) setCount(0);
    else setCount(count + 1);
  };
  return (
    <>
      {state.length > 0 ? (
        <div style={{ marginTop: "20%", height: "73vh" }}>
          <Survey
            q={state[count].question}
            a2={state[count].answer1}
            a1={state[count].answer2}
            a3={state[count].answer3}
            a4={state[count].answer4}
          />
          {state.length === count + 1 ? (
            <button className="btn-1">Submit</button>
          ) : (
            <button className="btn-1" onClick={next}>
              Next
            </button>
          )}
        </div>
      ) : (
        <>
          <Survey
            q="Loading"
            a2="Loading"
            a1="Loading"
            a3="Loading"
            a4="Loading"
          />
        </>
      )}
    </>
  );
};

export default SurveyPage;
