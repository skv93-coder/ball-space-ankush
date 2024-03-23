import React from "react";
import { useBall } from "../store";
import { ballDimension } from "../constants";

export default function Ball() {
  const ball = useBall();
  return (
    <div
      style={{
        height: ballDimension.height + "%",
        width: ballDimension.width + "%",
        background: "black",
        borderRadius: "50%",
        position: "absolute",
        left: ball.x + "%",
        top: ball.y + "%",
      }}
      className="ball"
    ></div>
  );
}
// 1. strong independent 
// 2. something she cares about full time