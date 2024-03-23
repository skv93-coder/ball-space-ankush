import React from "react";
import Button from "./Button";

const keyboard = ["up", "right", "down", "left"];
export default function NavigationContainer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 12px",
      }}
    >
      <div>
        {keyboard.map((k) => (
          <Button k={k} key={k} />
        ))}
      </div>
    </div>
  );
}
