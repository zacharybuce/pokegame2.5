import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import ActionArea from "./ActionArea";

const Team = dynamic(import("./Team"));

const Dashboard = ({
  setLeaderboardDrawer,
  candies,
  team,
  phase,
  movement,
  turnToMove,
  willPvpBattle,
  moveToTile,
  tileToShow,
  isReady,
  actionComplete,
  endTurn,
  setTeam,
  setBagDrawer,
  setBag,
  setCandies,
  setShopDialog,
  setTileDrawer,
  canUseShop,
  playerLocation,
  actionButtonClick,
}) => {
  return (
    <Box sx={{ ml: "2vw", mr: "2vw" }}>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Team
            team={team}
            candies={candies}
            setCandies={setCandies}
            setTeam={setTeam}
            setBag={setBag}
          />
        </Grid>
        <Grid item container xs={5}>
          <ActionArea
            phase={phase}
            turnToMove={turnToMove}
            willPvpBattle={willPvpBattle}
            movement={movement}
            moveToTile={moveToTile}
            isReady={isReady}
            tileToShow={tileToShow}
            endTurn={endTurn}
            playerLocation={playerLocation}
            actionComplete={actionComplete}
            actionButtonClick={actionButtonClick}
            canUseShop={canUseShop}
            setLeaderboardDrawer={setLeaderboardDrawer}
            setBagDrawer={setBagDrawer}
            setShopDialog={setShopDialog}
            setTileDrawer={setTileDrawer}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
