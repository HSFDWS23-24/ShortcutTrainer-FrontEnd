import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";
import Course from "./Components/Courses/Course";
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

  return (
    <main>
      <Menu />

      {main === "Landing" && <Landing clickedTileToApp={clickedTileHandler} />}
      {main === "Course" && <Course course={getcourse} />}

      <Footer />
    </main>
  );
}
