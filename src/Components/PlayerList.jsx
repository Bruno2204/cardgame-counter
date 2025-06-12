import { Player } from "./Player";

export function PlayerList({ players, roundIndex, promisePhase }) {
  return (
    <table className="players">
      <tbody>
        {players.map((player, index) => (
          <Player
            key={index}
            name={player.name}
            score={player.score}
            promisePhase={promisePhase}
            player={player}
            roundIndex={roundIndex}
          />
        ))}
      </tbody>
    </table>
  );
}
