export function AddPlayer({ addPlayer, resetPlayers }) {
  return (
    <form className="form" onSubmit={addPlayer}>
      <input name="playerName" placeholder="Jugador" />
      <button type="submit">+</button>
      <button type="button" className="restart-game" onClick={resetPlayers}>
        ♻️
      </button>
    </form>
  );
}
