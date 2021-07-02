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

const Surey = () => {
  const dispatch = useDispatch();

  const surveyData = useSelector((state) => state.survey.surveys);
  useEffect(() => {
    dispatch(getSurvey());
  }, [dispatch]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("answer1");
  const [answer, setAnswer] =  useState("");
  const [done, setDone] =  useState(false);


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleNext =async () => {
    if (surveyData.length === count + 1) {
      setAnswer(answer=>[...answer,{question:surveyData[count].question,value:value}])
      const answers={question:surveyData[count].question,answer:value}
      await  dispatch(postAnswer(answers));
   
      setDone(true)
      return;
    } else setCount(count + 1);
    const answers={question:surveyData[count].question,answer:value}
   await  dispatch(postAnswer(answers));

    setAnswer(answer=>[...answer,{question:surveyData[count].question,value:value}])
  };
  const handleSubmit=()=>{
    console.log(answer)

  }

  return (
    <div>
      {surveyData.length && !done&&(
        <FormControl component="fieldset">
          <FormLabel component="legend">{surveyData[count].question}</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="answer1"
              control={<Radio />}
              label={surveyData[count].answer[0]}
            />
            <FormControlLabel
              value="answer2"
              control={<Radio />}
              label={surveyData[count].answer[1]}
            />
            <FormControlLabel
              value="answer3"
              control={<Radio />}
              label={surveyData[count].answer[2]}
            />
            <FormControlLabel
              value="answer4"
              control={<Radio />}
              label={surveyData[count].answer[3]}
            />
      
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
           
          </RadioGroup>
        </FormControl>
      )}
      {done&&    <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>}
   
    </div>
  );
};

export default Surey;
