import { useTricks } from "../hooks/useWin";

export function WinsCell({ promisePhase, player }) {
  const { increaseWin, decreaseWin } = useTricks({player});

  return (
    <>
      {!promisePhase ? (
        <td className="win">
          Bazas :
          <>
            <button onClick={decreaseWin}>-</button>
            <input
              name="winNumber"
              className="win-input"
              type="number"
              value={player.getTricks()} />
            <button onClick={increaseWin}>+</button>
          </>
        </td>
      ) : (
        <td className="win">Tricks: {player.tricks}</td>
      )}
    </>
  );
}
