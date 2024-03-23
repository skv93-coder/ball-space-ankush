import React, { useCallback } from "react";
import BoardContainer from "./BoardContainer";
import NavigationContainer from "./NavigationContainer";
import Success from "./Success";
import { useDispatch } from "../store";
import useKeyUpDown from "../useKeyUpDown";

const keyCodeLookup = {
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
};
const keyArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
export default function GameContainer() {
  const dispatch = useDispatch();
  const handleKeyUp = useCallback(
    (code) => {
      dispatch({ type: keyCodeLookup[code] });
    },
    [dispatch]
  );
  useKeyUpDown({ keyArr, fc: handleKeyUp, time: 1000 });
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <BoardContainer />
      <NavigationContainer />
      <Success />
    </div>
  );
}
