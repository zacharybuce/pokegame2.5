import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import MoveButton from "./MoveButton";

const ActivePokemonMoves = ({
  team,
  sendMoveChoice,
  animsDone,
  hasSelected,
  setWillMegaEvo,
  battletype,
  runFromBattle,
}) => {
  const [megaEvo, setMegaEvo] = useState(false);

  if (animsDone)
    return (
      <Box>
        {!team.forceSwitch && !team.wait && !hasSelected ? (
          <Grid container spacing={1}>
            <Grid item container xs={9} spacing={1}>
              {team.active[0].moves.map((move, index) => {
                if (!move.disabled)
                  return (
                    <MoveButton
                      move={move}
                      index={index}
                      sendMoveChoice={sendMoveChoice}
                    />
                  );
              })}
            </Grid>
            <Grid item container xs={3} alignItems="center" spacing={1}>
              {/* Mega Evo Button */}
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button
                  variant={megaEvo ? "contained" : "outlined"}
                  className={megaEvo ? "megaevo" : ""}
                  disabled={!team.active[0].canMegaEvo}
                  sx={{ height: "60px", borderRadius: "50%", width: "50px" }}
                  onClick={() => {
                    setMegaEvo((prev) => !prev);
                    setWillMegaEvo(true);
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: "url(/icons/MegaEvolution.png)",
                      opacity: !team.active[0].canMegaEvo ? "0.5" : "1",
                      height: "100%",
                      width: "100%",
                      backgroundSize: "80%",
                      backgroundPosition: "50% 50%",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                </Button>
              </Grid>
              {/* Run Button */}
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                {battletype == "wildbattle" ? (
                  <Button variant="outlined" onClick={() => runFromBattle()}>
                    Run
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", width: "100%", pt: "20px" }}>
            <Typography variant="h5">
              {team.forceSwitch
                ? "Choose a pokemon to switch to"
                : "Waiting for opponent"}
            </Typography>
          </Box>
        )}
      </Box>
    );

  return <Grid container spacing={1}></Grid>;
};

export default ActivePokemonMoves;
