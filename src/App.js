import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";
import Course from "./Components/Courses/Course";
import Learn from "./Components/Courses/Learn";
import Test from "./Components/Courses/Test";
import Result from "./Components/Courses/Result";
import Profile from "./Components/Profile";
import "./App.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Api from "./api/Model";

export default function App(porps) {
  const [main, setMain] = useState("Landing");
  const getcourse = Api.getAllCourses().find(
    (e) => e.courseId === 1 /*props.id*/
  );

  const getResult = Api.getResult().find(
    (e) => e.user_id === 1
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
  
  function clickResultHandler(){
    setMain("Result");
  }

  function clickTestHandler(){
    setMain("Test");
  }

  function showProfile() {
    setMain("Profile");
  }

  var view = <Landing clickedTileToApp={clickedTileHandler} />;
  switch (main) {
    case "Landing":
      view = <Landing clickedTileToApp={clickedTileHandler} />;
      break;

    case "Course":
      view = <Course course={getcourse} clickLearnHandler = {clickLearnHandler} clickTestHandler = {clickTestHandler} />;
      break;

    case "Learn":
      view = <Learn course={getcourse}></Learn>;
      break;

    case "Test":
      view = <Test course={getcourse} clickResultHandler = {clickResultHandler}></Test>
      break;

    case "Result":
      view = <Result result={getResult} course={getcourse}  clickedTileToLanding={clickedTileHandler} clickedTileToApp={clickedTileHandler}></Result>
      break;

    case "Profile":
      view = <Profile />;
      break;

    default:
      break;
  }

  return (
    <>
      <main>
        <Menu showProfile={showProfile} />

        {view}
        
      </main>

      <Footer />
    </>
  );
}
