import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const TournamentBattle = ({ battle, winner }) => {
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: 3,
        p: 1,
        mt: "10px",
        width: "75%",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Typography>{battle.p1Name}</Typography>
          <Typography>VS</Typography>
          <Typography>{battle.p2Name}</Typography>{" "}
        </Grid>
        <Grid item container alignItems="center" xs={6}>
          <Typography variant="h6">{winner}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TournamentBattle;
