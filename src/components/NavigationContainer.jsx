import React from "react";
import Button from "./Button";

const keyboard = ["up", "right", "down", "left"];
export default function NavigationContainer() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        padding: "10px 12px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button k={keyboard[0]} key={keyboard[0]} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 12px",
          gap: 8,
        }}
      >
        <Button k={keyboard[1]} key={keyboard[1]} />
        <Button k={keyboard[3]} key={keyboard[3]} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button k={keyboard[2]} key={keyboard[2]} />
      </div>
    </div>
  );
}
