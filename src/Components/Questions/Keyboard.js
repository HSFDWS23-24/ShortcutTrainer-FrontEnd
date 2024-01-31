import { useState, useEffect } from "react";
import "./Keyboard.css";
import KeyboardLayout from "./KeyboardLayout";

export default function Keyboard(props) {
  let example = ["s", "+", "d", "+", "f"];

  const [InputState, setInputState] = useState("");
  const saveInputDataHandler = (enteredInputData) => {
    let check = true;
    for (let i = 0; i < example.length; i++) {
      if (enteredInputData[i] != example[i]) {
        check = false;
      }
    }
    if(check){
        setInputState("Correct");
    }else{
        setInputState("");
    }
      

  };
  return (
    <div>
      <p>{InputState}</p>
      <KeyboardLayout OnSaveInputData={saveInputDataHandler} />
    </div>
  );
}
