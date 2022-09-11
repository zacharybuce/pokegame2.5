import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

const Clock = ({ startTimer, setWillPvpBattle, setStartTimer }) => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(time);
  timerRef.current = time;

  useEffect(() => {
    if (startTimer) {
      let myInterval = setInterval(() => {
        if (startTimer) {
          setTime((prev) => {
            if (prev == 1800 || prev == 3600) {
              console.log("trigger tournament");
              setStartTimer(false);
              setWillPvpBattle(true);
            }
            return prev + 1;
          });
        } else {
          clearInterval(myInterval);
        }
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
