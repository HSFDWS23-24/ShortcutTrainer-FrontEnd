import React from 'react';
import Api from "../../api/Model";
import './Learn.css';

export default function Learn(props){

    const allQuestions = Api.getQuestions(props.course.courseId);

    console.log(allQuestions);

    return (
        <div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>{props.course.courseTitle}</div>
        </div>
    );
}