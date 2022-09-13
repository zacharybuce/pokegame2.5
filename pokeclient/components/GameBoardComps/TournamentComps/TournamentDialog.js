import { Alert, Box, Button, Dialog, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bracket from "./Bracket";
import { useSocket } from "../../../contexts/SocketProvider";

const TournamentDialog = ({
  tournamentDialog,
  id,
  setTournamentDialog,
  setWillPvpBattle,
  setStartTimer,
  setActionComplete,
}) => {
  const socket = useSocket();
  const [tourneyData, setTourneyData] = useState();
  const [canParticipate, setCanParticipate] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (socket === undefined) return;

    socket.on("tournament-update", (tournamentData) => {
      setTourneyData(tournamentData);
      setIsReady(false);
      if (tournamentData.participants.includes(id)) {
        setCanParticipate(true);
      } else setCanParticipate(false);
      if (tournamentData.finished) {
        setFinished(true);
        setStartTimer(true);
      }
    });

    return () => socket.off("tournament-update");
  }, [socket, tourneyData]);

  return (
    <Dialog fullWidth maxWidth={"md"} open={tournamentDialog}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Tournament Bracket</Typography>
        <Divider sx={{ backgroundColor: "#ededed" }} />
        <Bracket tournamentData={tourneyData} />
        {!isReady && tourneyData && !finished && canParticipate ? (
          <Button
            variant="contained"
            onClick={() => {
              setActionComplete(false);
              socket.emit("tournament-battle-ready");
              setIsReady(true);
            }}
            sx={{ mt: "15px" }}
          >
            Ready
          </Button>
        ) : (
          ""
        )}

        {(isReady && !finished) || !canParticipate ? (
          <Alert severity="info">Wainting for other players</Alert>
        ) : (
          ""
        )}

        {finished ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setTourneyData(undefined);
              setFinished(false);
              setIsReady(false);
              setTournamentDialog(false);
              setWillPvpBattle(false);
            }}
            sx={{ mt: "15px" }}
          >
            Exit
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Dialog>
  );
};

export default TournamentDialog;
