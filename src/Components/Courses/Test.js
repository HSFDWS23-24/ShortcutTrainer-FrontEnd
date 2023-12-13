import React from "react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Api from "../../api/Model";
import "./Test.css";
import Keyboard from "../Questions/Keyboard";
import Progressbar from "../Progressbar/Progressbar";

export default function Test(props) {
  const allQuestions = Api.getQuestions(props.course.courseId);

  const lengthQuestions = allQuestions.length;

  const [questionNum, setQuestionNum] = useState(0);
  const [progressValue, setprogressValue] = useState(
    (questionNum/ lengthQuestions) * 100
  );

  useEffect(() => {
    setprogressValue(((questionNum + 1) / lengthQuestions) * 100);
  }, [questionNum, lengthQuestions]);


  function clickPreviousquestion() {
    if (questionNum !== 0) {
      setQuestionNum(questionNum - 1);
    }
  }

  function checkQuestion() {
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
