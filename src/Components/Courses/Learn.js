import React from 'react';
import Api from "../../api/Model";
import './Learn.css';

export default function Learn(props){

    const allQuestions = Api.getQuestions(props.course.courseId);

    console.log(allQuestions);

    return (
        <div class = "window">

            <div class = "CourseTitle">
                <h1>{props.course.courseTitle}</h1>
            </div>

            <div class = "CourseContent">
                <h3> 
                Was ist denn hier los
                {props.allQuestions}
                </h3>
            </div>
          
        </div>
    );
}