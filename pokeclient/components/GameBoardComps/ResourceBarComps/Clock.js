import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

const Clock = ({ startTimer }) => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(time);
  timerRef.current = time;

  useEffect(() => {
    if (startTimer) {
      let myInterval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [startTimer]);

  const display = () => {
    let min = Math.floor(time / 60);
    let secs = time % 60;
    if (secs < 10) secs = "0" + secs;
    return min + ":" + secs;
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5">{display()}</Typography>
    </Box>
  );
};

export default Clock;
