import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Api from "../../api/Model";
import "./Test.css";
import Keyboard from "../Questions/Keyboard";
import Progressbar from "../Progressbar/Progressbar";
import './Test.css';
import './Result';

export default function Test(props) {
  const allQuestions = Api.getQuestions(props.course.courseId);
  const questionAmount = allQuestions.length;

  const [questionNum, setQuestionNum] = useState(0);
  const [progressValue, setProgressValue] = useState(
    (questionNum / questionAmount) * 100
  );

  useEffect(() => {
    setProgressValue(((questionNum + 1) / questionAmount) * 100);
  }, [questionNum, questionAmount]);

  function clickNextquestion() {
    if (questionNum !== questionAmount - 1) {
      setQuestionNum(questionNum + 1);
    }
  }

  function clickPreviousquestion() {
    if (questionNum !== 0) {
      setQuestionNum(questionNum - 1);
    }
  }

  function checkQuestion() {
    // Implement your logic to check the question here
  }

  return (
    <div className="window">
      <div className="CourseTitle">
        <div className="Progressbar">
          <Progressbar value={progressValue} />
        </div>
        <h1>{props.course.courseTitle}</h1>
      </div>
      <div className="CourseContent">
        <h3>{allQuestions[questionNum]?.description}:</h3>
        <p>{allQuestions[questionNum]?.question}</p>
        <div className="keyboard">
          <Keyboard />
        </div>
        <div className="QuestionButtons">
          <Button variant="contained" onClick={clickPreviousquestion}>
            Vorherige Frage
          </Button>
          <Button variant="contained" onClick={checkQuestion}>
            Frage auswerten
          </Button>
          <Button variant="contained" onClick={clickNextquestion}>
            Nächste Frage
          </Button>
          {questionNum === questionAmount - 1 && (
            <div className="result_button">
              <Button variant="contained" onClick={props.clickResultHandler}>
                <Typography>Result</Typography>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}