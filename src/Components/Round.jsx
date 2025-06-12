export function Round({ currentRound, nextRound, previousRound, promisePhase }) {

  return (
    <div className="round">
      <p>Round {currentRound}</p>

      <p>Phase: {promisePhase ? "Promise" : "Score"}</p>

      <span className="round-controls">
        {(currentRound > 1 || !promisePhase) && (
          <button type="button" onClick={previousRound}>
            <p>{"<"}</p>
          </button>
        )}
        <button type="button" onClick={nextRound}>
          <p>{">"}</p>
        </button>
      </span>
    </div>
  );
}
