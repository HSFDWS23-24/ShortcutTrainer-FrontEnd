import { useState, useEffect } from "react";
import "./Keyboard.css";
import KeyboardLayout from "./KeyboardLayout";

export default function Keyboard(props) {
  let example = ["s", "+", "d", "+", "f"];

  const [InputState, setInputState] = useState("");
  const saveInputDataHandler = (enteredInputData) => {
    let check = true;
  
      if (props.sendMessageToKeyboard === true) {
        if (example.length != enteredInputData.length) {
          setInputState("False");
        } else {
        for (let i = 0; i < example.length; i++) {
          if (enteredInputData[i] != example[i]) {
            check = false;
          }
        }
        if (check) {
          setInputState("Correct");
        } else {
          setInputState("False");
        }
      }
      } else {
        setInputState("");
      }
    
    };

  let resultColor;
  if (InputState == "Correct") {
    resultColor = true;
  } else {
    resultColor = false;
  }

  return (
    <div style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: resultColor ? "green" : "red",
          fontSize: "30px",
        }}
      >
        {InputState}
      </p>
      <KeyboardLayout OnSaveInputData={saveInputDataHandler} shouldClearInput={props.onshouldClearInput} InputCleared={props.onInputCleared}  />
    </div>
  );
}
// 