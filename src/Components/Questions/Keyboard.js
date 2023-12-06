import { useState,useEffect } from "react";
import "./Keyboard.css";
import KeyboardLayout from "./KeyboardLayout";

export default function Keyboard (props) { 

    return (
        <div>
            <KeyboardLayout/>
        </div>
    );
}