import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Landing from './Components/Landing';
import Course from './Components/Courses/Course';
import './App.css';

function App(porps) {
    return <Course courseDetails={{courseName: "Kurs Test", courseId: 2}}></Course>
}

export default App;
