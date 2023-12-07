import React, { useState } from "react";
import AllCourses from "./Courses/AllCourses";
import Course from "./Courses/Course";
import Menu from "./Menu";
import Learn from "./StudyingMethods/Learn";
import keyboardwhite from "../keyboardwhite.jpg";
import MyCourses from "./Courses/MyCourses";
import "./Landing.css";


export default function Landing(props) {
  function clickedTileHandler (clickedTile) {
    props.clickedTileToApp(clickedTile);
    
  } 
  
  return (
    <main>
      <div
        className="landingText"
      >
        <div className="textContainer">
          <h3 className="title">Herzlich willkommen! </h3>
          <p>
            Wir freuen uns, Sie auf der shortcut Trainer-Plattform begrüßen zu
            dürfen. wir bieten Ihnen die einzigartige Möglichkeit, Ihr
            Keyboard-Shurtcut für verschiedene Anwendungen auf verschiedenen
            Betriebssystemen und in verschiedenen Sprachen zu trainieren.
          </p>
          <p>
            Mit einem unseren Abo erhältst du Zugriff auf unserer top-bewerteten
            Kurse. Jetzt kostenlos ausprobieren
          </p>
        </div>
      </div>
      <MyCourses clickedTileToLanding={clickedTileHandler} favourites={false}/>

    </main>
  );
}
