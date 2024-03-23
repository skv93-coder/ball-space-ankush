import React from "react";
import Square from "./Square";
import Ball from "./Ball";

export default function BoardContainer() {
  return (
    <div
      className="board-container"
      style={{
        border: "1px solid black",
        margin: "0 50px",
        // width: "calc(100vw - 100px)",
        height: "75vh",
        position: "relative",
      }}
    >
      <Square />
      <Ball />
    </div>
  );
}
