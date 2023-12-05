import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";
import Course from "./Components/Courses/Course";
import Learn from "./Components/Courses/Learn";
import "./App.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Api from "./api/Model";

export default function App(porps) {
  const [main, setMain] = useState("Landing");
  const getcourse = Api.getAllCourses().find(
    (e) => e.courseId === 1 /*props.id*/
  );
  console.log(getcourse);

  function clickedTileHandler(clickedTile) {
    if (clickedTile) {
      setMain("Course");
    }
  }

  function clickLearnHandler(){
    setMain("Learn");
  }

  var view = <Landing clickedTileToApp={clickedTileHandler} />;
  switch (main) {
    case "Landing":
      view = <Landing clickedTileToApp={clickedTileHandler} />;
      break;

    case "Course":
      view = <Course course={getcourse} clickLearnHandler = {clickLearnHandler} />;
      break;

    case "Learn":
      view = <Learn course={getcourse}></Learn>;
      break;

    default:
      break;
  }

  return (
    <main>
      <Menu />

      {view}

      <Footer />
    </main>
  );
}
