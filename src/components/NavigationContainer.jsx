import React from "react";
import ButtonGroup from "./ButtonGroup";

export default function NavigationContainer() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        padding: "10px 12px",
        alignItems: "center",
        position: "relative",
        height: "300px",
        width: "100%",
      }}
    >
      <ButtonGroup idx={3} />
    </div>
  );
}
