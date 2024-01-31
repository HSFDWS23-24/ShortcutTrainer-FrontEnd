import React, { useState, useRef, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./KeyboardLayout.css";
import { Backspace } from "@mui/icons-material";

export default function KeyboardLayout(props) {
  const [layoutName, setLayoutName] = useState("default");
  const keyboard = useRef(null);

  const maxLength = 20;
  const [typedKeys, setTypedKeys] = useState([]);

  const handleKeystroke = (event) => {
    const keyPressed = event.key;
    const lastKey = typedKeys[typedKeys.length - 1];

    if (keyPressed !== "Backspace") {
      if (typedKeys.length <= maxLength) {
        if (lastKey !== keyPressed && typedKeys.length !== 0) {
          setTypedKeys((prevKeys) => [...prevKeys, "+", keyPressed]);
        } else if (lastKey !== keyPressed) {
          setTypedKeys((prevKeys) => [...prevKeys, keyPressed]);
        }
      }
    } else {
      setTypedKeys((prevKeys) =>
        prevKeys.length >= 3 ? prevKeys.slice(0, -2) : prevKeys.slice(0, -1)
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeystroke);
    return () => {
      window.removeEventListener("keydown", handleKeystroke);
    };
  }, [typedKeys]);


  useEffect(() => {
    const handleCapsLockChange = (event) => {
      const capsLockActive = event.getModifierState("CapsLock");
      setLayoutName(capsLockActive ? "shift" : "default");
    };

    window.addEventListener("keydown", handleCapsLockChange);

    return () => {
      window.removeEventListener("keydown", handleCapsLockChange);
    };
  }, [setLayoutName]);

  const commonKeyboardOptions = {
    theme: "simple-keyboard hg-theme-default hg-layout-default",
    physicalKeyboardHighlight: true,
    syncInstanceInputs: true,
    mergeDisplay: true,
    debug: true,
  };

  const keyboardOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
      "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
      "^ 1 2 3 4 5 6 7 8 9 0 ß ´ {backspace}",
      "{tab} q w e r t z u i o p ü +",
      "{capslock} a s d f g h j k l ö ä # {enter}",
      "{shiftleft} y x c v b n m , . - {shiftright}",
      "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}",
      ],
      shift: [
        "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "° ! \" § $ % & / ( ) = ? ` {backspace}",
        "{tab} Q W E R T Z U I O P Ü *",
        "{capslock} A S D F G H J K L Ö Ä ' {enter}",
        "{shiftleft} Y X C V B N M ; : _ {shiftright}",
        "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
      ],
    },
    display: {
      "{escape}": "esc ⎋",
      "{tab}": "tab ⇥",
      "{backspace}": "backspace ⌫",
      "{enter}": "enter ↵",
      "{capslock}": "caps lock ⇪",
      "{shiftleft}": "shift ⇧",
      "{shiftright}": "shift ⇧",
      "{controlleft}": "ctrl ⌃",
      "{controlright}": "ctrl ⌃",
      "{altleft}": "alt ⌥",
      "{altright}": "alt ⌥",
      "{metaleft}": "cmd ⌘",
      "{metaright}": "cmd ⌘",
    },
  };

  const keyboardControlPadOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        "{prtscr} {scrolllock} {pause}",
        "{insert} {home} {pageup}",
        "{delete} {end} {pagedown}",
      ],
    },
  };

  const keyboardArrowsOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"],
    },
  };

  const keyboardNumPadOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        "{numlock} {numpaddivide} {numpadmultiply}",
        "{numpad7} {numpad8} {numpad9}",
        "{numpad4} {numpad5} {numpad6}",
        "{numpad1} {numpad2} {numpad3}",
        "{numpad0} {numpaddecimal}",
      ],
    },
  };

  const keyboardNumPadEndOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"],
    },
  };



  useEffect(() => {
    
    if (props.shouldClearInput) {
      setTypedKeys([]);

      props.InputCleared();
    }
  }, [props.shouldClearInput]);

  props.OnSaveInputData(typedKeys);

  return (
    <div>
      <div className="typedKeys">
        <p> {typedKeys}</p>
        {console.log(typedKeys)}
      </div>
      <div className={"keyboardContainer"}>
        <Keyboard
          baseClass={"simple-keyboard-main"}
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layoutName}
          {...keyboardOptions}
        />

        <div className="controlArrows">
          <Keyboard
            baseClass={"simple-keyboard-control"}
            {...keyboardControlPadOptions}
          />
          <Keyboard
            baseClass={"simple-keyboard-arrows"}
            {...keyboardArrowsOptions}
          />
        </div>

        <div className="numPad">
          <Keyboard
            baseClass={"simple-keyboard-numpad"}
            {...keyboardNumPadOptions}
          />
          <Keyboard
            baseClass={"simple-keyboard-numpadEnd"}
            {...keyboardNumPadEndOptions}
          />
        </div>
      </div>
    </div>
  );
}

