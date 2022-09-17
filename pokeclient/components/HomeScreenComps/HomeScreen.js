import { Button, Grid, Box, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import { useSocket } from "../../contexts/SocketProvider";
import useLocalStorage from "../../hooks/useLocalStorage";

const TitleContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
  },
}));

const HomeScreenContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    marginLeft: "10vw",
    marginRight: "10vw",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "20vw",
    marginRight: "20vw",
  },
}));

const HomeScreen = ({
  setTrainerDialogOpen,
  id,
  serverIp,
  setScreen,
  setSettingsDialogOpen,
  sprite,
  setMusicEvent,
  setServerIp,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const socket = useSocket();
  const [ipFieldVal, setIpFieldVal] = useState();
  const [prevIp, setPrevIp] = useLocalStorage("ip", null);

  const playButtonClick = () => {
    if (!id)
      enqueueSnackbar(`No id found...`, {
        variant: "error",
      });
    else if (!serverIp)
      enqueueSnackbar(`Must enter an ip`, {
        variant: "error",
      });
    else {
      setMusicEvent("lobby");
      setScreen("Lobby");
      console.log("sending join-lobby...");
      socket.emit("join-lobby", sprite);
    }
  };

  const continueButtonClick = () => {
    if (!id)
      enqueueSnackbar(`No id found...`, {
        variant: "error",
      });
    else if (!serverIp)
      enqueueSnackbar(`Must enter an ip`, {
        variant: "error",
      });
    else {
      setScreen("ContinueLobby");
      setMusicEvent("lobby");
      socket.emit("join-lobby-continue", sprite);
    }
  };

  const connectButtonClick = () => {
    setServerIp(ipFieldVal);
    setPrevIp(ipFieldVal);
  };

  useEffect(() => {
    setIpFieldVal(prevIp);
  }, []);

  return (
    <HomeScreenContainer>
      <Grid container spacing={1} textAlign="center" sx={{ mt: "10vh" }}>
        <Grid item xs={12} sx={{ mb: "2vh" }}>
          <TitleContainer>PokeQuest</TitleContainer>
        </Grid>

        {!serverIp ? (
          <Grid item container xs={12} sx={{ ml: "8vw", mr: "8vw", mb: "2vh" }}>
            <Grid item xs={10}>
              <TextField
                id="outlined-basic"
                label="Server IP"
                variant="outlined"
                autoComplete="off"
                fullWidth
                value={ipFieldVal}
                onChange={(event) => setIpFieldVal(event.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item container alignItems="center" xs={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => connectButtonClick()}
                sx={{ height: "100%" }}
              >
                Connect
              </Button>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        {serverIp ? (
          <Grid
            item
            container
            xs={12}
            sx={{ ml: "4vw", mr: "4vw" }}
            spacing={1}
          >
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => playButtonClick()}
              >
                Play
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => continueButtonClick()}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={6}>
          <Button
            onClick={() => setTrainerDialogOpen(true)}
            fullWidth
            variant="contained"
          >
            Trainer
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => setSettingsDialogOpen(true)}
            fullWidth
            variant="contained"
          >
            Settings
          </Button>
        </Grid>
      </Grid>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
