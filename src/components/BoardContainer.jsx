import React from "react";
import Square from "./Square";
import Ball from "./Ball";
import ButtonGroup from "./ButtonGroup";

export default function BoardContainer({ idx }) {
  return (
    <div
      className="board-container"
      style={{
        border: "1px solid black",
        height: "25vh",
        position: "relative",
      }}
    >
      {idx === 0 ? <Square key="7ys" /> : <ButtonGroup key="72" idx={idx} />}
      <Ball key="47" idx={idx} />
    </div>
  );
}
