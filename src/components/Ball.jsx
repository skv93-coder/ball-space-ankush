import React from "react";
import { useBall } from "../store";
import { ballDimension } from "../constants";

export default function Ball({ idx }) {
  const ball = useBall(idx);
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
