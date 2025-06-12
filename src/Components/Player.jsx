import { PromiseCell } from "./PromiseCell";
import { WinsCell } from "./WinsCell";

export function Player({ name, score, promisePhase, player }) {

  return (
    <tr className="player">
      <td>{name}</td>
      <PromiseCell
        promisePhase={promisePhase}
        promise={player.promise}
        player={player}
      />
      <WinsCell promisePhase={promisePhase} player={player} />
      <td>
        <p>Score: {score}</p>
      </td>
    </tr>
  );
}
