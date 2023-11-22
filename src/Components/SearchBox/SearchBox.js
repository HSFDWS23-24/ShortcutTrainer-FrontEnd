import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import "./SearchBox.css";

export default function SearchBox(props) {
    function setSearch(e) {
        props.setSearch(e.target.value);
    }
    function setPrice(e) {
        props.setPrice(e.target.value);
    }
    return <div className="searchbox">
        <TextField onChange={setSearch} className="searchbox_textfield"></TextField>
        <Slider min={1} max={100} onChange={setPrice} className="priceSlider"></Slider>
    </div>
}