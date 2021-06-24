import Survey from "./subComponents/Survey";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { GrNext } from "react-icons/gr";

const SurveyPage = () => {
  const questions = ["Question1", "Question2", "Question3", "Question4"];
  const [count, setCount] = useState(0);
  const next = () => {
    setCount(count + 1);
  };
  let answer31 = "reda";

  const answer1 = ["reda", "oussama", "zakop", "amine"];
  const answer2 = ["reda", "oussama", "zakop", "amine"];
  const answer3 = [answer31, "oussama", "zakop", "amine"];

  return (
    <div>
      <Survey
        t1={answer1[count]}
        t2={answer2[count]}
        t3={answer3[count]}
        q1={questions[count]}
      />

      <Button
        rightIcon={<GrNext />}
        colorScheme="pink"
        variant="solid"
        ml="40%"
        onClick={next}
      >
        Next
      </Button>
    </div>
  );
};

export default SurveyPage;
