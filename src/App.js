import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";
import Course from "./Components/Courses/Course";
import "./App.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

export default function App(porps) {
  return (
    <main>
      <Menu />
      <Landing />
      <Footer />
    </main>
  );
}

