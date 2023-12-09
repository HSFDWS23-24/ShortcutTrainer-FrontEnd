import React, { useState } from "react";
import Learn from "../StudyingMethods/Learn";
import Test from "../StudyingMethods/Test";
import "./Course.css";
import { Typography, Button } from "@mui/material";
import "@material/web/button/elevated-button.js";
import "@material/web/button/outlined-button.js";
import Api from "../../api/Model";

export default function Course(props) {

  const [isYellow, setYellow] = useState(props.course.isFavourite);

  const starbuttonChange = () => {
    setYellow(previsYellow => !previsYellow);
  };
  
  return (
        <div className="window">

          <div className="CourseTitleAndStar">
            <div className="CourseTitle">
              <h1>{props.course.courseTitle}</h1>
            </div>

            <div className ="star">
              <button
                className="star-button"
                onClick={starbuttonChange}
                style={{ color: isYellow ? "grey" : "gold" }}
              >
              <span className="star">&#9733;</span>
              </button>
            </div>
 
          </div>

          <div className="CourseContent">
            <h3>{props.course.description}</h3> 
          </div>

          <div className="learn_test_buttons">
              <Button variant="contained" onClick={props.clickLearnHandler}>Learn </Button>
              <Button variant ="contained"onClick={props.clickTestHandler}>Test</Button>
          </div>
        </div>
  );
}
