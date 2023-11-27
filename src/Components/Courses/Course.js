import React, { useState } from "react";
import Learn from "../StudyingMethods/Learn";
import Test from "../StudyingMethods/Test";
import "./Course.css";
import { Typography } from "@mui/material";
import "@material/web/button/elevated-button.js";
import "@material/web/button/outlined-button.js";


export default function Course(props) {

  const [isYellow, setYellow] = useState(props.course.isFavourite);



  const starbuttonChange = () => {
    setYellow(previsYellow => !previsYellow);
  };

  return (
    <>
      <main>
        <div className="course_main">
          <div className="headline">
            <Typography variant="h3" color="textPrimary">
              {props.course.courseTitle}
            </Typography>
          </div>

          <div className="course_middle">
            <div className="description">
              <Typography>{props.course.description}</Typography>
            </div>
            <button
              className="star-button"
              onClick={starbuttonChange}
              style={{ color: isYellow ? "grey" : "gold" }}
            >
              <span className="star">&#9733;</span>
            </button>
          </div>

          <div className="learn_test_buttons">
            <div className="test_button">
              <md-elevated-button>
                <Typography>Learn</Typography>
              </md-elevated-button>
            </div>
            <div className="learn_button">
              <md-elevated-button>
                <Typography>Test</Typography>
              </md-elevated-button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
