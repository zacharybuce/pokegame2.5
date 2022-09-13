import { Grid, Typography } from "@mui/material";
import React from "react";
import TournamentBattle from "./TournamentBattle";

const Bracket = ({ tournamentData }) => {
  console.log(tournamentData);
  return (
    <Grid container sx={{ mt: "10px" }}>
      {tournamentData?.rounds.map((round, index) => (
        <Grid item xs={12 / tournamentData?.rounds.length}>
          <Typography variant="h5">Round {index + 1}</Typography>
          {round.map((battle, i) => (
            <TournamentBattle
              battle={battle}
              winner={
                tournamentData.winners[index]
                  ? tournamentData.winners[index][i]
                  : ""
              }
            />
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Bracket;
