import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";
import Course from "./Components/Courses/Course";
import "./App.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Api from "./api/Model";

export default function App(porps) {

  const getcourse = Api.getAllCourses().find(e => e.courseId === 1 /*props.id*/);
  console.log(getcourse);

  return (
    <main>
      <Menu />
      <Landing />
      <Course
        course={getcourse}
      />
      <Footer />
    </main>
  );
}

