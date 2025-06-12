import { useState } from "react";
import { Player } from "../classes/Player";

export function usePlayers() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (event) => {
    event.preventDefault();
    const { playerName } = Object.fromEntries(
      new window.FormData(event.target)
    );
    setPlayers((prevPlayers) => [...prevPlayers, new Player(playerName)]);
    event.target.reset();
    event.target.playerName.focus();
  };

  const resetPlayers = () => {
    setPlayers([]);
  };
  return {
    players,
    addPlayer,
    resetPlayers,
    numberOfPlayers: players.length,
  };
}
