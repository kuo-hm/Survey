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
import { sizing } from "@material-ui/system";

const Surey = () => {
  const dispatch = useDispatch();

  const surveyData = useSelector((state) => state.survey.surveys);
  useEffect(() => {
    dispatch(getSurvey());
  }, [dispatch]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("answer1");
  const [answer1, setAnswer1] = useState(0);
  const [answer2, setAnswer2] = useState(0);
  const [answer3, setAnswer3] = useState(0);
  const [answer4, setAnswer4] = useState(0);
  const [answer, setAnswer] = useState("");
  const [done, setDone] = useState(false);

  const handleChange = (event) => {
    // setAnswerArray(surveyData[count].answers);
    // if (event.target.value === surveyData[count].answer[0])
    //   setAnswer1(answer1[0] + 1);
    // else if (event.target.value === surveyData[count].answer[1])
    //   setAnswerArray(answerArray[1] + 1);
    // else if (event.target.value === surveyData[count].answer[2])
    //   setAnswerArray[2] = setAnswerArray[2] + 1;
    // else if (event.target.value === surveyData[count].answer[3])
    //   setAnswerArray[3] = setAnswerArray[3] + 1;
    // console.log(answerArray);
    setValue(event.target.value);
  };
  const handleNext = async () => {
    if (surveyData.length === count + 1) {
      setAnswer((answer) => [
        ...answer,
        { question: surveyData[count].question, value: value },
      ]);
      const answers = {
        question: surveyData[count].question,
        answers: answerArray,
      };
      await dispatch(postAnswer(answers));

      setDone(true);
      return;
    } else setCount(count + 1);
    const answers = { question: surveyData[count].question, answer: value };
    await dispatch(postAnswer(answers));

    setAnswer((answer) => [
      ...answer,
      { question: surveyData[count].question, value: value },
    ]);
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
          <RadioGroup
            width="75%"
            aria-label="gender"
            name="gender1"
            onChange={handleChange}
          >
            <FormControlLabel
              width="75%"
              value={surveyData[count].answer[0]}
              control={<Radio />}
              label={surveyData[count].answer[0]}
            />
            <FormControlLabel
              value={surveyData[count].answer[1]}
              control={<Radio />}
              label={surveyData[count].answer[1]}
            />
            <FormControlLabel
              value={surveyData[count].answer[2]}
              control={<Radio />}
              label={surveyData[count].answer[2]}
            />
            <FormControlLabel
              value={surveyData[count].answer[3]}
              size="medium"
              control={<Radio />}
              label={surveyData[count].answer[3]}
            />

            <Button
              variant="contained"
              size="medium"
              onClick={handleNext}
              width="75%"
            >
              Next
            </Button>
          </RadioGroup>
        </FormControl>
      )}
      {done && (
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </div>
  );
};

export default Surey;
