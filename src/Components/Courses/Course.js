import React, { useState } from 'react';
import Learn from '../StudyingMethods/Learn';
import Test from '../StudyingMethods/Test';
import './Course.css';

export default function Course(props) {
  return <div>Ich bin Kurs Nr. {props.courseId}</div>
}