import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../../Redux/features/survey/surveySlice";
import {
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { postAnswer } from "../../Redux/features/survey/answerSlice";
import { getAnswer } from "../../Redux/features/survey/getAnswersSlice";

const Surey = () => {
  const dispatch = useDispatch();
  const answerData = useSelector((state) => state.getAnswer.answers.surveys);

  const surveyData = useSelector((state) => state.survey.surveys);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const survey = async () => {
      await dispatch(getSurvey());
    };

    survey();
  }, [dispatch]);
  const [value, setValue] = useState("answer1");
  const [answer, setAnswer] = useState("");
  const [done, setDone] = useState(false);

  const handleChange = async (event) => {
    await dispatch(getAnswer(surveyData[count].question));

    setValue(event.target.value);
  };
  const handleAnswer = async (idx) => {
    var intAnswer = [0, 0, 0, 0];
    if (answerData.data !== null) {
      var answer = Object.values(answerData.data);
      answer[idx] += 1;
      const Answers = { question: surveyData[count].question, data: answer };
      await console.log(Answers);
      await dispatch(postAnswer(Answers));
    } else {
      intAnswer[idx] += 1;
      const Answers = {
        question: surveyData[count].question,
        data: intAnswer,
      };
      console.log(Answers);
      await dispatch(postAnswer(Answers));
    }
  };
  const handleNext = async () => {
    setAnswer(surveyData[count].question);
    await dispatch(getAnswer(surveyData[count].question));
    // console.log(answerData.data);
    // console.log(surveyData[count].question);
    console.log(surveyData.length);
    console.log(count + 1);
    if (surveyData.length === count + 1) {
      setDone(true);
      for (let i = 0; i < 4; i++) {
        if (i === parseInt(value)) handleAnswer(i);
      }
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (i === parseInt(value)) handleAnswer(i);
    }
    if (!done) setCount(count + 1);
    // await dispatch(postAnswer(answers));
  };
  const handleSubmit = () => {
    console.log(answer);
  };

  return (
    <div
      style={{
        height: "73vh",
        marginLeft: "50%",
        marginTop: "20%",
      }}
    >
      {surveyData.length && !done && (
        <FormControl component="fieldset" size="medium" width="75%">
          <FormLabel component="legend">{surveyData[count].question}</FormLabel>
          <Button
            variant="contained"
            size="medium"
            onClick={handleAnswer}
            width="75%"
          >
            Test
          </Button>
          <RadioGroup
            width="75%"
            aria-label="gender"
            name="gender1"
            onChange={handleChange}
          >
            <FormControlLabel
              width="75%"
              value="0"
              control={<Radio />}
              label={surveyData[count].answer[0]}
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={surveyData[count].answer[1]}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={surveyData[count].answer[2]}
            />
            <FormControlLabel
              value="3"
              size="medium"
              control={<Radio />}
              label={surveyData[count].answer[3]}
            />
            {done ? (
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                size="medium"
                onClick={handleNext}
                width="75%"
              >
                Next
              </Button>
            )}
          </RadioGroup>
        </FormControl>
      )}
    </div>
  );
};

export default Surey;
