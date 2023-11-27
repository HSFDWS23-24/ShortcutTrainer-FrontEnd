import React from "react";
import "./MyCourses.css";
import CourseTile from "./CourseTile";
import Course from "./Course";
import { Button } from "@material/web/button/internal/button";

export default function MyCourses(props) {
  //Hier sollten die Kurse gefetched werden, die der Nutzer gerade besucht

  const myCourses = [
    { courseId: 1, courseName: "Testkurs" },
    { courseId: 2, courseName: "Testkurs2" },
    { courseId: 3, courseName: "Testkurs3" },
    { courseId: 4, courseName: "Testkurs4" },
  ];
  function clickedTileHandler (clickedTile) {
    props.clickedTileToLanding(clickedTile);
  } 


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
