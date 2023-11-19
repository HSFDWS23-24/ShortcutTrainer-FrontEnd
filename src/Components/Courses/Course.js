import React, { useState } from 'react';
import Learn from '../StudyingMethods/Learn';
import Test from '../StudyingMethods/Test';
import './Course.css';

export default function Course(props) {
  return <div className='courseContainer'>
    <h2 className='courseTitle'>{props.courseDetails.courseName}</h2>
    <div className='courseIcon'></div>
    {/* Progress bar */}
  </div>
}