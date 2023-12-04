import React, { useState } from 'react';
import './MyCourses.css';
import CourseTile from './CourseTile';
import api from '../../api/Model';

export default function MyCourses() {
    //Hier sollten die Kurse gefetched werden, die der Nutzer gerade besucht
    const myCourses = api.getAllCourses();

    const courseElements = myCourses.map(e => {
        return <CourseTile courseDetails={e}></CourseTile>
    });

    return <div className='myCourses'>{courseElements}</div>;
}