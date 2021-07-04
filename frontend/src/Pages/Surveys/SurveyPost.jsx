import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../../Redux/features/survey/surveySlice";
import { postSurveys } from "../../Redux/features/survey/surveysSlice";

const SurveyPost = () => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer, setAnswer] = useState();
  const [counts, setcounts] = useState();
  const dispatch = useDispatch();

  const islogged = useSelector((state) => state.survey.surveys);
  useEffect(() => {
    dispatch(getSurvey());
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "http://localhost:5000/api/survey/getAnswer",
        {
          question: "First question",
        },
        config
      )
      .then(function (response) {
        console.log(response.data.surveys);
        setAnswer(response.data.surveys);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = [answer1, answer2, answer3, answer4];
    const survey = { question, answer };
    await dispatch(postSurveys(survey));
  };
  const handleFetch = async (e) => {
    e.preventDefault();
    console.log(answer);
    const count = {};
    const result = [];

    answer[0].answer.forEach((item) => {
      if (count[item]) {
        count[item] += 1;
        return;
      }
      count[item] = 1;
    });

    for (let prop in count) {
      if (count[prop] >= 2) {
        result.push(prop);
      }
    }
    setcounts(count);
    console.log(count);
    return result;
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        {islogged.length}
        <br />
        questions
        <input
          type="text"
          style={{ width: "300px", height: "50px" }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        answer1
        <input
          type="text"
          style={{ width: "300px", height: "50px" }}
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
        />
        answer2
        <input
          type="text"
          style={{ width: "300px", height: "50px" }}
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
        />
        answer3
        <input
          type="text"
          style={{ width: "300px", height: "50px" }}
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
        />
        answer4
        <input
          type="text"
          style={{ width: "300px", height: "50px" }}
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
        />
        <input
          type="button"
          value="Send"
          onClick={handleSubmit}
          style={{ width: "300px", height: "50px" }}
        />
        <input
          type="button"
          value="Get"
          onClick={handleFetch}
          style={{ width: "300px", height: "50px" }}
        />
      </form>
    </div>
  );
};

export default SurveyPost;
