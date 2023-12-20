import React from 'react';
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Api from "../../api/Model";
import "./Test.css";
import Keyboard from "../Questions/Keyboard";
import Progressbar from "../Progressbar/Progressbar";
import './Test.css';
import './Result';



export default function Test(props) {

    const allQuestions = Api.getQuestions(props.course.courseId);
    const [questionNum, setQuestionNum] = useState(0);
    const allResults = Api.getResult(props.course.courseId);
    console.log(allQuestions);
    console.log(allResults);

    function clickNextquestion() {
        if (questionNum !== allQuestions.length - 1) {
            setQuestionNum(questionNum + 1);
        }
    }

    function clickPreviousquestion() {
        if (questionNum !== 0) {
            setQuestionNum(questionNum - 1);
        }
    }


    return (
        <div class="window">

            <div class="CourseTitle">
                <h1>{props.course.courseTitle}</h1>
            </div>

            <div class="CourseContent">
                <h3>
                    {allQuestions[questionNum].description}:
                </h3>

                <p>
                    {allQuestions[questionNum].question}
                </p>

                <div class="keyboard">
                    <Keyboard />
                </div>

                <div class="QuestionButtons">
                    <Button variant="contained" onClick={clickPreviousquestion}>Vorherige Frage</Button>
                    <Button variant="contained" onClick={clickNextquestion}>Nächste Frage</Button>
                    <div className="result_button">
                        <Button variant="contained" onClick={props.clickResultHandler}>
                            <Typography>Result</Typography>
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    );
}
