import { useState } from "react";

export function useTricks({ player }) {
  const [trick, setTrick] = useState(0);
  function increaseWin() {
    setTrick((prev) => prev + 1);
    player.increaseTricks();
  }
  function decreaseWin() {
    setTrick((prev) => (prev > 0 ? prev - 1 : 0));
    player.decreaseTricks();
  }
  return { win: trick, increaseWin, decreaseWin };
}
