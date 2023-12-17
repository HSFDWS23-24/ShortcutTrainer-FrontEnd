import React, { useState } from 'react';
import './Result.css';
import CourseTile from './CourseTile';
import api from '../../api/Model';
import { FaCheck, FaTimes, FaSmile, FaSadTear } from 'react-icons/fa';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { textAlign } from '@mui/system';

export default function Result(props) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  function clickedTileHandler(clickedTile) {
    props.clickedTileToLanding(clickedTile);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }
  //Hier sollten die Results gefetched werden, die der Nutzer gerade abgeschlossen hat
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const myResult = api.getResult();
  const myCourses = api.getAllCourses();
  const courseelement = myCourses.map((course) => {
    return (
      <>
        <CourseTile
          key={course.courseId}
          clickedTile={clickedTileHandler}
          courseDetails={course}
        />
      </>
    );
  });

  const overallAssessment = myResult && myResult[0] && myResult[0].overallAssessment;

  // Determine mood icon and message based on overallAssessment
  let moodIcon, congratulatoryMessage;
  if (overallAssessment >= 60) {
    moodIcon = <FaSmile style={{ color: 'green', fontSize: '24px' }} />;
    congratulatoryMessage = <p>Congratulations! You're doing great!</p>;
  } else {
    moodIcon = <FaSadTear style={{ color: 'red', fontSize: '24px' }} />;
    congratulatoryMessage = <p>Keep going! You can do better!</p>;
  }

  const resultRows = myResult && myResult[0] && myResult[0].questions
  ? myResult[0].questions
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((result) => (
        <TableRow key={result.questionId} className="table-row">
          <TableCell>{result.question}</TableCell>
          <TableCell>{result.keyCombination.join(', ')}</TableCell>
          <TableCell>
            {result.Assessment ? (
              <FaCheck style={{ color: 'green' }} />
            ) : (
              <FaTimes style={{ color: 'red' }} />
            )}
          </TableCell>
        </TableRow>
      ))
  : [];

  return <div>
    <div class="window">
      <div class="CourseTitle">
        <h1>{props.course.courseTitle}</h1>
      </div>
      <div class="Bewertung">
        <h3 style={{ textAlign: 'center' }}> <h3 style={{ textAlign: 'center' }}>Overall Assessment: {overallAssessment}</h3>
          {overallAssessment >= 60 ? (
            <>
              {congratulatoryMessage}
              {moodIcon}
            </>
          ) : (
            <>
              {congratulatoryMessage}
              {moodIcon}
            </>
          )}</h3>
      </div>
      <div class="ResultContent">
      <TableContainer component={Paper}>
            <Table className="result-table" size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Question</TableCell>
                  <TableCell>KeyCombination</TableCell>
                  <TableCell>Assessment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{resultRows}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            labelRowsPerPage="Questions per Page:"
            component="div"
            count={myResult && myResult[0] && myResult[0].questions ? myResult[0].questions.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </div>
    </div>
    <div className="mycourse">{courseelement}</div>
  </div>;
}
