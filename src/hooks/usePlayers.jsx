import { useState } from "react";
import { Player } from "../classes/Player";

export function usePlayers() {
  const [players, setPlayers] = useState([
    new Player("Player 1"),
    new Player("Player 2"),
  ]);


  const addPlayer = (event) => {
    event.preventDefault();
    const { playerName } = Object.fromEntries(
      new window.FormData(event.target)
    );
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      new Player(playerName),
    ]);
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
