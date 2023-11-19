import React, { useState } from 'react';
import './MyCourses.css';
import Course from './Course';

export default function MyCourses(){
    //Hier sollten die Kurse gefetched werden, die der Nutzer gerade besucht
    const myCourses = [
        1,5,3,6
    ];

    const courseElements = myCourses.map(e=>{
        return <Course courseId={e}></Course>
    });

    return courseElements;
}