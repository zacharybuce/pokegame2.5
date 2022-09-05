import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Clock from "./Clock";
import Resources from "./Resources";

const ResourceBar = ({ turn, money, candies, bag, badges }) => {
  return (
    <AppBar position="fixed" className="resourcebar">
      <Toolbar>
        <Grid container>
          <Grid item xs={2} sx={{ borderRight: "1px solid " }}>
            <Typography variant="h6">Turn {turn}</Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={2}
          >
            <Clock startTimer={true} />
          </Grid>
          <Resources
            money={money}
            candies={candies}
            bag={bag}
            badges={badges}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ResourceBar;
