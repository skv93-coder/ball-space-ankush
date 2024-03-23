import React from "react";
import { useBall, useSquare } from "../store";
import { ballDimension, squareDimension } from "../constants";

export default function Success() {
  const square = useSquare();
  const ball = useBall();

  if (
    square.x <= ball.x &&
    square.x + squareDimension.width >= ball.x + ballDimension.width &&
    square.y <= ball.y &&
    square.y + squareDimension.height >= ball.y + ballDimension.height
  ) {
    return (
      <div
        style={{
          height: "150px",
          width: "150px",
          border: "2px solid green",
          position: "absolute",
          top: "calc(75vh - 150px)",
          left: "calc(50% - 75px)",
        }}
      >
        Success
      </div>
    );
  }
  return "";
}
