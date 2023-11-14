import React, { useState } from 'react';
import AllCourses from './Courses/AllCourses';
import Course from './Courses/Course';
import Menu from './Menu';
import Learn from './StudyingMethods/Learn';

import './Landing.css';

export default function Landing(props) {
    const coursesdetail = [
        {coursetitle:'Erster Kurs', coursedescription:'Es war ein mal ein Mädchen mit einer roten Kappe, die es von seiner Großmutter, mit der zusammen es von einem Jäger, der gerade des Weges kam und den Wolf im Haus der Großmutter, die dem Wolf anschließend Wackersteine in den Bauch, den sie dann zugenäht hatte, gelegt hatte, damit der beim Saufen ins Wasser fällt und ertrinkt, schnarchen gehört hatte, aus dem Bauch des selben, nach dem er, „Find’ ich dich hier, du alter Sünder!“ gesagt hatte, befreit wurde, nachdem dieser zunächst die Großmutter, die er mit den Worten, „Ich bin das Rotkäppchen und bringe dir Kuchen und Wein.“ getäuscht hatte, um sich dann nach Verschlingen derselben mit der Nachthaube in deren Bett zu legen, und dann das Mädchen, das er zunächst nach Weg und Ziel gefragt und dann mit einer Blumenwiese zum trödeln verführt hatte und dem er danach auf die Frage nach den großen Augen, den großen Ohren und dem entsetzlich großen Mund mit den Worten, „damit ich dich besser sehen kann“, „damit ich dich besser hören kann“ und „damit ich dich besser fressen kann“ geantwortet hatte, mit einem Happs unzerkaut verschlungen hatte, erhalten hatte und wegen der es Rotkäppchen genannt wurde' }
    ]

    return (
        <Course title= {coursesdetail[0].coursetitle} description={coursesdetail[0].coursedescription}  />
        );

}