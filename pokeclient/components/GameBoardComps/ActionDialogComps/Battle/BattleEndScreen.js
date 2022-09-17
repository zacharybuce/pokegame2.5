import { Box, Typography, Divider, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { pSBC } from "../../../Utils/colorUtil";
import BattleReward from "./BattleReward";

const BattleEndScreen = ({ rewards, closeDialog }) => {
  return (
    <Box
      sx={{
        p: 3,
        textAlign: "center",
        width: "50%",
        ml: "25%",
        overflowX: "hidden",
      }}
    >
      <Typography variant="h2">
        Battle {rewards.win ? "Won!" : "Lost"}
      </Typography>
      <Box
        sx={{
          p: 2,
          borderRadius: "3px",
          backgroundColor: "#506680",
          textAlign: "start",
          mb: "2vh",
        }}
      >
        <Typography variant="h4">Battle Rewards</Typography>
        <Divider sx={{ mb: "1vh", backgroundColor: "#ededed" }} />
        <Grid
          container
          justifyContent="center"
          sx={{
            width: "50%",
            ml: "25%",
          }}
        >
          {rewards.money != undefined ? (
            <BattleReward reward={rewards.money} index={0} type={"money"} />
          ) : (
            ""
          )}
          {rewards.candies != undefined ? (
            <BattleReward reward={rewards.candies} index={1} type={"candies"} />
          ) : (
            ""
          )}
          {rewards.items != undefined
            ? rewards.items.map((item, i) => {
                return (
                  <BattleReward
                    reward={item}
                    index={i + 2}
                    type={"item"}
                    key={Math.floor(Math.random() * 100000)}
                  />
                );
              })
            : ""}
        </Grid>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#767D92",
          "&:hover": {
            backgroundColor: pSBC(-0.4, "#767D92"),
          },
        }}
        onClick={() => closeDialog()}
      >
        Close
      </Button>
    </Box>
  );
};

export default BattleEndScreen;
