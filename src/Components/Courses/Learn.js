import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Api from "../../api/Model";
import "./Learn.css";
import Keyboard from "../Questions/Keyboard";
import Progressbar from "../Progressbar/Progressbar";

export default function Learn(props) {
  const [allQuestions, setallQuestions] = useState(
    Api.getQuestions(props.course.courseId)
  );
  const [checkrequest, setcheckrequest] = useState(false);
  const [shouldClearInput, setShouldClearInput] = useState(false);


  const questionAmount = allQuestions.length;

  const [questionNum, setQuestionNum] = useState(0);
  const [questionAmountAnswered, setquestionAmountAnswered] = useState(
    allQuestions.filter(function (item) {
      return item.unanswered;
    }).length
  );

  const [progressValue, setprogressValue] = useState(
    (questionAmountAnswered / questionAmount) * 100
  );

  useEffect(() => {
    setprogressValue((questionAmountAnswered / questionAmount) * 100);
  }, [questionAmountAnswered, questionAmount]);

  function clickPreviousquestion() {
    if (questionNum !== 0) {
      setQuestionNum(questionNum - 1);
    }
  }

  function addQuestionUnanswered() {
    setquestionAmountAnswered((prevLength) => prevLength + 1);
  }

  function checkQuestion() {
    if (
      questionAmountAnswered < questionAmount &&
      !allQuestions[questionNum].unanswered
    ) {
      const updatedQuestions = [...allQuestions];
      updatedQuestions[questionNum] = {
        ...updatedQuestions[questionNum],
        unanswered: true,
      };
      setallQuestions(updatedQuestions);
      addQuestionUnanswered();
    }
    setcheckrequest(true);
  }

  function clickNextquestion() {
    if (questionNum !== allQuestions.length - 1) {
      setQuestionNum(questionNum + 1);
    }
    setcheckrequest(false);
    setShouldClearInput(true);

  }

  const handleInputCleared = () => {
    setShouldClearInput(false);
  };


  return (
    <div class="window">
      <div class="CourseTitle">
        <h1>{props.course.courseTitle}</h1>
      </div>

      <div class="CourseContent">
        <div class="Progressbar">
          <Progressbar value={progressValue} />
        </div>

        <h3>{allQuestions[questionNum].description}:</h3>

        <p>{allQuestions[questionNum].question}</p>

        <div class="keyboard">
          <Keyboard sendMessageToKeyboard={checkrequest}  onshouldClearInput={shouldClearInput} onInputCleared={handleInputCleared} />
        </div>

        <div class="QuestionButtons">
          <Button variant="contained" onClick={clickPreviousquestion}>
            Vorherige Frage
          </Button>
          <Button variant="contained" onClick={checkQuestion}>
            Frage auswerten
          </Button>
          <Button variant="contained" onClick={clickNextquestion}>
            Nächste Frage
          </Button>
        </div>
      </div>
    </div>
  );
}
