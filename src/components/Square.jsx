import React from "react";
import { useSquare } from "../store";
import { squareDimension } from "../constants";

export default function Square() {
  const square = useSquare();

  return (
    <div
      style={{
        height: squareDimension.height + "%",
        width: squareDimension.width + "%",
        background: "green",
        position: "absolute",
        top: square.y + "%",
        left: square.x + "%",
      }}
    >
      {/* {ball.x},{ball.y} */}
    </div>
  );
}
