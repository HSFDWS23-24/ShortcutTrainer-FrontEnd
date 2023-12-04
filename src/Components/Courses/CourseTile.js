import React, { useState } from 'react';
import Learn from '../StudyingMethods/Learn';
import Test from '../StudyingMethods/Test';
import './CourseTile.css';

export default function Course(props) {
  const url = "url(" + props.courseDetails.imageUrl + ")";
  return <div className='courseTileContainer' style={{backgroundImage: url}}>
    <h2 className='courseTileTitle'>{props.courseDetails.courseTitle}</h2>
    {/* Progress bar */}
  </div>
}