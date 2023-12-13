import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Api from "../../api/Model";
import "./Learn.css";
import Keyboard from "../Questions/Keyboard";
import Progressbar from "../Progressbar/Progressbar";

export default function Learn(props) {
  const allQuestions = Api.getQuestions(props.course.courseId);

  const lengthQuestions = allQuestions.length;

  const [questionNum, setQuestionNum] = useState(0);
  const [lengthQuestionAnswered, setlengthQuestionAnswered] = useState(
    allQuestions.filter(function (item) {
      return item.unanswered;
    }).length
  );

  const [progressValue, setprogressValue] = useState(
    (lengthQuestionAnswered / lengthQuestions) * 100
  );

  useEffect(() => {
    setprogressValue((lengthQuestionAnswered / lengthQuestions) * 100);
  }, [lengthQuestionAnswered, lengthQuestions]);

  console.log(progressValue);
  console.log(lengthQuestions);

  function clickPreviousquestion() {
    if (questionNum !== 0) {
      setQuestionNum(questionNum - 1);
    }
  }

  function addQuestionUnanswered() {
    setlengthQuestionAnswered((prevLength) => prevLength + 1);
    console.log("Vor dem Summieren" + lengthQuestionAnswered);
  }

  function checkQuestion() {
    if (
      lengthQuestionAnswered < lengthQuestions &&
      !allQuestions[questionNum].unanswered
    ) {
      addQuestionUnanswered();
    }
  }

  function clickNextquestion() {
    if (questionNum !== allQuestions.length - 1) {
      setQuestionNum(questionNum + 1);
    }
  }

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
          <Keyboard />
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
