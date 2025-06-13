import { useState } from "react";

export function useRound({ players }) {
  const [rounds, setRounds] = useState([1]);
  const [currentRound, setCurrentRound] = useState(1);
  const [promisePhase, setPromisePhase] = useState(true);

  const nextRound = () => {
    if (promisePhase) {
      setPromisePhase(false);
      return;
    }
    if (currentRound == rounds.length) {
      setRounds((prevRounds) => [...prevRounds, currentRound + 1]);
    }
    players.forEach((player) => {
      player.calculateScore(currentRound - 1);
      player.reset();
    });
    setPromisePhase(true);
    setCurrentRound(currentRound + 1);
  };

  const previousRound = () => {
    if (!promisePhase) {
      setPromisePhase(true);
      return;
    }
    if (promisePhase) {
      setCurrentRound(currentRound - 1);
      setPromisePhase(false);
    }
  };

  return {
    currentRound,
    nextRound,
    previousRound,
    rounds,
    promisePhase,
    lastRound: rounds.length,
  };
}
