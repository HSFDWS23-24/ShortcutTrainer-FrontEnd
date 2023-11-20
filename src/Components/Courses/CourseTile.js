import React, { useState } from 'react';
import Learn from '../StudyingMethods/Learn';
import Test from '../StudyingMethods/Test';
import './CourseTile.css';

export default function Course(props) {
  return <div className='courseTileContainer'>
    <h2 className='courseTileTitle'>{props.courseDetails.courseName}</h2>
    <div className='courseTileIcon'></div>
    {/* Progress bar */}
  </div>
}