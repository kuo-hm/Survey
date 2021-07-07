import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurvey } from "../../Redux/features/survey/surveySlice";
import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { postAnswer } from "../../Redux/features/survey/answerSlice";
import { getAnswer } from "../../Redux/features/survey/getAnswersSlice";
import "./SurveyPage.css";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    marginRight: "40px",

    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
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
    <div className="div__survey">
      {surveyData.length && !done && (
        <FormControl component="fieldset">
          <p className="question__title">{surveyData[count].question}</p>

          <RadioGroup
            aria-label="gender"
            name="gender1"
            onChange={handleChange}
          >
            <FormControlLabel
              className="inputs"
              value="0"
              control={<StyledRadio />}
              label={surveyData[count].answer[0]}
            />
            <FormControlLabel
              className="inputs"
              value="1"
              control={<StyledRadio />}
              label={surveyData[count].answer[1]}
            />
            <FormControlLabel
              className="inputs"
              value="2"
              control={<StyledRadio />}
              label={surveyData[count].answer[2]}
            />
            <FormControlLabel
              className="inputs"
              value="3"
              size="medium"
              control={<StyledRadio />}
              label={surveyData[count].answer[3]}
            />
            {done ? (
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            ) : (
              <Button variant="contained" size="medium" onClick={handleNext}>
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
