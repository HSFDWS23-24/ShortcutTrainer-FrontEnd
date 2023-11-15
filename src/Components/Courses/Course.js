import React, { useState } from "react";
import Learn from "../StudyingMethods/Learn";
import Test from "../StudyingMethods/Test";
import "./Course.css";
import { Typography, Button } from "@mui/material";
import "@material/web/button/elevated-button.js";
import "@material/web/button/outlined-button.js";

export default function Course(props) {
  const [isYellow, setYellow] = useState(true);

  const starbuttonChange = () => {
    setYellow(!isYellow);
  };

  return (
    <>
      <main>
        <div className="course_main">
          <div className="headline">
          <Typography variant="h3" color="textPrimary">
            {props.title}
          </Typography>
          </div>


          <div className="course_middle">
            <div className="description">
            <Typography>{props.description}</Typography>
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
            <md-elevated-button >
              <Typography>back</Typography>
            </md-elevated-button>
            </div>
          <div className="learn_button">
          <md-elevated-button >
              <Typography>Complete</Typography>
            </md-elevated-button>
          </div>

          </div>
        </div>
      </main>
    </>
  );
}
