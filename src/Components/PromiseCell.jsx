import { usePromise } from "../hooks/usePromise";

export function PromiseCell({ promisePhase, player }) {
  const { increasePromise, decreasePromise } = usePromise({ player });


  return (
    <>
      {promisePhase ? (
        <td className="promise">
          Promesa :
          <>
            <button onClick={decreasePromise}>-</button>
            <input
              name="promiseNumber"
              className="promise-input"
              type="number"
              value={player.promise} />
            <button onClick={increasePromise}>+</button>
          </>
        </td>
      ) : (
        <td className="promise">Promise: {player.promise}</td>
      )}
    </>
  );
}
