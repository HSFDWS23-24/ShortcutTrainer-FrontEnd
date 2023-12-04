import React from 'react';
import Learn from '../StudyingMethods/Learn';
import Test from '../StudyingMethods/Test';
import './CourseTile.css';

export default function Course(props) {
  function clickHandler(courseId) {
    props.clickedTile([true, courseId]);
    console.log(true);
  }
  const url = "url(" + props.courseDetails.imageUrl + ")";
  return <div onClick={() => clickHandler(1)} className='courseTileContainer' style={{backgroundImage: url}}>
    <h2 className='courseTileTitle'>{props.courseDetails.courseTitle}</h2>
    {/* Progress bar */}
  </div>
}
