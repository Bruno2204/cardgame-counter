import { PromiseCell } from "./PromiseCell";
import { WinsCell } from "./WinsCell";

export function Player({ name, score, promisePhase, player, isTurnPlayer= true }) {

  return (
    <tr className="player">
      <td>{name} {isTurnPlayer && '🟢'} </td>
      <PromiseCell
        promisePhase={promisePhase}
        promise={player.getPromise()}
        player={player}
      />
      <WinsCell promisePhase={promisePhase} player={player} />
      <td>
        <p>Score: {score}</p>
      </td>
    </tr>
  );
}
