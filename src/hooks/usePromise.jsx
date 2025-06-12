import { useState } from "react";

export function usePromise({player}) {
  const [promise, setPromise] = useState(0);
  function increasePromise() {
    setPromise((prev) => prev + 1);
    player.increasePromise();
  };
  function decreasePromise() {
    setPromise((prev) => (prev > 0 ? prev - 1 : 0));
    player.decreasePromise();
  }

  return { promise, increasePromise, decreasePromise };
}
