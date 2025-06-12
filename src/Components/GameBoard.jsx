import { AddPlayer } from "./AddPlayer";
import { PlayerList } from "./PlayerList";
import { usePlayers } from "../hooks/usePlayers";
import { Round } from "./Round";
import { useRound } from "../hooks/useRound";

export function GameBoard() {
  const { players, addPlayer, resetPlayers } = usePlayers();
  const { currentRound, nextRound, previousRound, promisePhase } = useRound({
    players,
  });

  return (
    <section className="game">
      <AddPlayer addPlayer={addPlayer} resetPlayers={resetPlayers} />
      <PlayerList
        players={players}
        roundIndex={currentRound - 1}
        promisePhase={promisePhase}
      />
      <Round
        currentRound={currentRound}
        nextRound={nextRound}
        previousRound={previousRound}
        promisePhase={promisePhase}
      />
    </section>
  );
}
