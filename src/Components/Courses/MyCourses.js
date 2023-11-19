import React, { useState } from 'react';
import './MyCourses.css';
import Course from './Course';

export default function MyCourses(){
    //Hier sollten die Kurse gefetched werden, die der Nutzer gerade besucht
    const myCourses = [
        {courseId: 1, courseName: "Testkurs"},
        {courseId: 2, courseName: "Testkurs2"},
        {courseId: 3, courseName: "Testkurs3"},
        {courseId: 4, courseName: "Testkurs4"},
    ];

    const courseElements = myCourses.map(e=>{
        return <Course courseDetails={e}></Course>
    });

    return <div className='myCourses'>{courseElements}</div>;
}