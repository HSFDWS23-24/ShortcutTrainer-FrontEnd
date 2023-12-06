import React from 'react';
import { useEffect, useState} from "react";
import { Button } from "@mui/material";
import Api from "../../api/Model";
import './Learn.css';
import Keyboard from '../Questions/Question';

export default function Learn(props){

    const allQuestions = Api.getQuestions(props.course.courseId);
    const [questionNum, setQuestionNum] = useState(0);

    console.log(allQuestions);

    function clickNextquestion(){
        if(questionNum != allQuestions.length -1){
             setQuestionNum(questionNum + 1);
        }
    }

    function clickPreviousquestion(){
        if(questionNum != 0){
            setQuestionNum(questionNum - 1);
        }
    }


    return (
        <div class = "window">

            <div class = "CourseTitle">
                <h1>{props.course.courseTitle}</h1>
            </div>

            <div class = "CourseContent">
                <h3> 
                {allQuestions[questionNum].description}:
                </h3>

                <p> 
                {allQuestions[questionNum].question}
                </p>

                <div class = "keyboard">
                    <Keyboard/>
                </div>

                <div class = "QuestionButtons">
                    <Button variant="contained" onClick={clickPreviousquestion}>Vorherige Frage</Button>
                    <Button variant="contained" onClick={clickNextquestion}>Nächste Frage</Button>
                </div>
                
            </div>
          
        </div>
    );
}