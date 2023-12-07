import React, { useState } from 'react';
import './MyCourses.css';
import CourseTile from './CourseTile';
import api from '../../api/Model';

export default function MyCourses(props) {
  function clickedTileHandler(clickedTile) {
    props.clickedTileToLanding(clickedTile);
  }
  //Hier sollten die Kurse gefetched werden, die der Nutzer gerade besucht
  const myCourses = api.getAllCourses();


  const courseElements = myCourses.map((course) => {
    if (props.favourites && !course.isFavourite) {
      return null;
    }
    return (
      <>
        <CourseTile
          key={course.courseId}
          clickedTile={clickedTileHandler}
          courseDetails={course}
        />
      </>
    );
  });

  return <div className="myCourses">{courseElements}</div>;
}
