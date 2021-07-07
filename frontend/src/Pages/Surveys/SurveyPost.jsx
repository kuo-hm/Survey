import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSurveys } from "../../Redux/features/survey/surveysSlice";
import { TextField, Button } from "@material-ui/core";
import "./Survey.css";
const SurveyPost = ({ history }) => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = [answer1, answer2, answer3, answer4];
    const survey = { question, answer };
    await dispatch(postSurveys(survey));
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    history.push("/survey");
  };

  return (
    <div className="container__survey">
      <form style={{}}>
        <br />

        <TextField
          style={{ width: "600px", height: "70px" }}
          id="question"
          label="Question"
          type="search"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextField
          style={{ width: "600px", height: "70px" }}
          id="answer1"
          label="Answer 1"
          type="search"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
        />
        <TextField
          style={{ width: "600px", height: "70px" }}
          id="answer2"
          label="Answer 2"
          type="search"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
        />
        <TextField
          style={{ width: "600px", height: "70px" }}
          id="answer3"
          label="Answer 3"
          type="search"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
        />
        <TextField
          style={{ width: "600px", height: "70px" }}
          id="answer4"
          label="Answer 4"
          type="search"
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          color="primary"
          href="#outlined-buttons"
          style={{ width: "600px", height: "70px", marginTop: "5px" }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default SurveyPost;
