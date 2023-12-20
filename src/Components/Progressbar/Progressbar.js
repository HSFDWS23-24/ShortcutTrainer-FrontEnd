import * as React from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)({
    height: 15,
    borderRadius: 3,
  });

export default function Progressbar(props) {
  return (
    <BorderLinearProgress variant="determinate" value={props.value}/>
  );
}
