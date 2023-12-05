import React from 'react';
import Api from "../../api/Model";
import './Test.css';

export default function Test(props){

    const allQuestions = Api.getQuestions(props.course.courseId);

    return (
        <div class = "window">

            <div class = "CourseTitle">
                <h1>{props.course.courseTitle}</h1>
            </div>

            <div class = "CourseContent">
                <h3> 
                Geschossens
                {props.allQuestions}
                </h3>
            </div>
          
        </div>
    );
}