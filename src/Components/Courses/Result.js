import React, { useState } from 'react';
import './Result.css';
import CourseTile from './CourseTile';
import api from '../../api/Model';

export default function Results(props) {
  function clickedTileHandler(clickedTile) {
    props.clickedTileToLanding(clickedTile);
  }
  //Hier sollten die Results gefetched werden, die der Nutzer gerade abgeschlossen hat
  
  const myResult = api.getResult();

  const resultElements = myResult.map((course) => {
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

  return <div className="myResult">{resultElements}</div>;
}
