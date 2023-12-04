import React, { useState } from 'react';
import './MyCourses.css';
import CourseTile from './CourseTile';
import api from '../../api/Model';

export default function MyCourses() {
  function clickedTileHandler (clickedTile) {
    props.clickedTileToLanding(clickedTile);
  } 
    //Hier sollten die Kurse gefetched werden, die der Nutzer gerade besucht
    const myCourses = api.getAllCourses();

    const courseElements = myCourses.map(e => {
        return <CourseTile courseDetails={e}></CourseTile>
    });


  const courseElements = myCourses.map((course) => {
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
