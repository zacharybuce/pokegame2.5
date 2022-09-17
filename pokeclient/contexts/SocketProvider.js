import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ id, ip, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (!ip) return;

    const newSocket = io(`http://${ip}:3001`, {
      query: { id },
    });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id, ip]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
