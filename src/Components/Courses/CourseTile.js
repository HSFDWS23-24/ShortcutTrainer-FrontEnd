import React from 'react';
import Learn from '../StudyingMethods/Learn';
import Test from '../StudyingMethods/Test';
import './CourseTile.css';

export default function Course(props) {
  function clickHandler(courseId) {
    props.clickedTile([true, courseId]);
    console.log(true);
  }

  return (
    <div onClick={() => clickHandler(1)} className='courseTileContainer'>
      <h2 className='courseTileTitle'>{props.courseDetails.courseName}</h2>
      <div className='courseTileIcon'></div>
      {/* Progress bar */}
    </div>
  );
}
