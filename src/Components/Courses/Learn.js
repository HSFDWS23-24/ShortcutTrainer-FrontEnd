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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                {props.allQuestions}
                </h3>
            </div>
          
        </div>
    );
}