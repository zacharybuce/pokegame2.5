import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Tooltip,
} from "@mui/material";
import PokeSprite from "../../../Utils/PokeSprite";

const TownCard = ({
  name,
  mapId,
  townId,
  location,
  color,
  img,
  starters,
  selectTown,
  disabled,
}) => {
  const [selectedMon, setSelectedMon] = useState();

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box
        sx={{
          backgroundImage: `url(/Tiles-${mapId}/${color}.png)`,
          border: "5px solid lightgrey",
          borderRadius: "3px",
          width: "300px",
          p: 2,
          justifyContent: "center",
          opacity: disabled ? ".6" : "1",
        }}
      >
        <Typography color="black" variant="h4">
          {name}
        </Typography>
        <Grid container>
          <Grid item container xs={12} justifyContent="center">
            <Box
              sx={{
                backgroundImage: `url(Tiles-${mapId}/${img}.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100px",
                height: "100px",
              }}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <ToggleButtonGroup
              value={selectedMon}
              exclusive
              onChange={(event, newMon) => setSelectedMon(newMon)}
              disabled={disabled}
            >
              {starters.map((pokemon) => (
                <Tooltip title={pokemon.species}>
                  <ToggleButton
                    value={pokemon.species}
                    sx={{
                      transition: "all .2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <PokeSprite name={pokemon.id} />
                  </ToggleButton>
                </Tooltip>
              ))}
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              disabled={!selectedMon || disabled}
              sx={{ mt: "1vh", width: "90%", backgroundColor: "#081B33" }}
              onClick={() => selectTown(location, selectedMon, townId)}
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TownCard;
