import React, { useCallback } from "react";
import BoardContainer from "./BoardContainer";
import NavigationContainer from "./NavigationContainer";
import Success from "./Success";
import useKeyUpDown from "../useKeyUpDown";
import { useDispatch } from "../store";

const keyCodeLookup = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
};
const keyArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
export default function GameContainer() {
  const dispatch = useDispatch();

  const balls = [0, 1, 2];
  const handleKeyUp = useCallback(
    (code) => {
      dispatch({ type: keyCodeLookup[code], payload: 0 });
    },
    [dispatch]
  );
  useKeyUpDown({ keyArr, fc: handleKeyUp, time: 1000 });
  return (
    <div style={{ height: "100vh" }} className="game-container">
      {balls.map((b, i) => (
        <BoardContainer key={i} idx={i} />
      ))}
      <NavigationContainer />
      <Success />
    </div>
  );
}
